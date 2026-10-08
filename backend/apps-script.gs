/**
 * Registro de resultados - Formacion en Economia Solidaria (FODUN)
 *
 * Se pega en Apps Script y se publica como aplicacion web.
 * Ver backend/GUIA-GOOGLE-SHEETS.md.
 *
 * El juego envia un registro cuando el asociado supera el
 * nivel Avanzado. Hay una fila por asociado (nombre + ciudad).
 * Si vuelve a terminar, se conserva su mejor puntaje y se suma
 * una vez mas en "Veces completado".
 *
 * Nota: el archivo usa solo caracteres basicos y lineas cortas
 * para que no se dane al copiarlo y pegarlo.
 */

var HOJA = 'Resultados';
var NOMBRE_LIBRO =
  'Resultados - Formaci\u00F3n en Econom\u00EDa Solidaria';

var ENCABEZADOS = [
  'Clave',
  'Nombre',
  'Ciudad',
  'Personaje',
  'Puntaje total',
  'B\u00E1sico (20)',
  'Medio (30)',
  'Avanzado (50)',
  'Tiempo total (min)',
  'Veces completado',
  'Primera finalizaci\u00F3n',
  '\u00DAltima actualizaci\u00F3n',
  '\u00DAltimo env\u00EDo',
  'Acept\u00F3 pol\u00EDtica'
];

var COL = {
  clave: 1, nombre: 2, ciudad: 3, personaje: 4, total: 5,
  basico: 6, medio: 7, avanzado: 8, tiempo: 9, veces: 10,
  primera: 11, ultima: 12, envio: 13, politica: 14
};

var CIUDADES = [
  'Bogot\u00E1',
  'Medell\u00EDn',
  'Manizales',
  'Palmira',
  'La Paz'
];

var PERSONAJES = ['fabi', 'fabio'];

// Tope de filas: ~2.800 asociados con margen. Evita que un envio
// masivo de datos falsos llene la hoja.
var MAX_FILAS = 5000;

/** Recibe el resultado enviado por el juego. */
function doPost(e) {
  var datos;
  try {
    datos = JSON.parse(e.postData.contents);
  } catch (err) {
    return error('Formato inv\u00E1lido', true);
  }

  var problema = validar(datos);
  if (problema) {
    return error(problema, true);
  }

  var lock = LockService.getScriptLock();
  try {
    lock.waitLock(20000);
  } catch (err) {
    return error('Servidor ocupado', false);
  }

  try {
    return guardar(datos);
  } catch (err) {
    // El detalle queda en el registro de Apps Script, no se envia
    // al navegador (no revela nombres de archivos ni rutas).
    console.error(err);
    return error('Error interno', false);
  } finally {
    lock.releaseLock();
  }
}

/** Crea o actualiza la fila del asociado. */
function guardar(datos) {
  var hoja = obtenerHoja();
  var nombre = limpiarNombre(datos.nombre);
  var clave = normalizar(nombre) + '|' + datos.ciudad;
  var ahora = new Date();
  var fila = buscarFila(hoja, clave);
  var tiempo = minutos(datos.tiempo);
  var politica = fechaPolitica(datos.consentimiento);

  if (!fila) {
    if (hoja.getLastRow() > MAX_FILAS) {
      return error('L\u00EDmite de registros alcanzado', true);
    }
    hoja.appendRow([
      clave, nombre, datos.ciudad, datos.personaje,
      datos.total, datos.basico, datos.medio,
      datos.avanzado, tiempo, 1, ahora, ahora, datos.id,
      politica
    ]);
    return responder({ ok: true, nuevo: true });
  }

  var total = ENCABEZADOS.length;
  var actual = hoja.getRange(fila, 1, 1, total).getValues()[0];
  if (actual[COL.envio - 1] === datos.id) {
    return responder({ ok: true, repetido: true });
  }

  var anterior = Number(actual[COL.total - 1]);
  var mejora = Number(datos.total) > anterior;
  if (mejora) {
    hoja.getRange(fila, COL.personaje, 1, 6).setValues([[
      datos.personaje, datos.total, datos.basico,
      datos.medio, datos.avanzado, tiempo
    ]]);
  }

  var veces = Number(actual[COL.veces - 1] || 0) + 1;
  hoja.getRange(fila, COL.veces).setValue(veces);
  hoja.getRange(fila, COL.ultima, 1, 2)
    .setValues([[ahora, datos.id]]);
  // Se conserva la primera fecha de aceptacion registrada.
  if (politica && !actual[COL.politica - 1]) {
    hoja.getRange(fila, COL.politica).setValue(politica);
  }
  return responder({ ok: true, mejora: mejora });
}

/** Comprueba desde el navegador que la app web esta publicada. */
function doGet() {
  return responder({ ok: true, servicio: NOMBRE_LIBRO });
}

/** Rechaza datos imposibles o incompletos. */
function validar(d) {
  if (!d || typeof d !== 'object') {
    return 'Sin datos';
  }
  if (!nombreValido(limpiarNombre(d.nombre))) {
    return 'Nombre inv\u00E1lido';
  }
  if (CIUDADES.indexOf(d.ciudad) < 0) {
    return 'Ciudad inv\u00E1lida';
  }
  if (PERSONAJES.indexOf(d.personaje) < 0) {
    return 'Personaje inv\u00E1lido';
  }
  // Basico y Medio exigen todas las respuestas correctas.
  if (d.basico !== 20) {
    return 'Puntaje B\u00E1sico inv\u00E1lido';
  }
  if (d.medio !== 30) {
    return 'Puntaje Medio inv\u00E1lido';
  }
  // Avanzado: 5 preguntas de 10 puntos.
  var av = d.avanzado;
  var avOk = typeof av === 'number' && av % 10 === 0 &&
    av >= 0 && av <= 50;
  if (!avOk) {
    return 'Puntaje Avanzado inv\u00E1lido';
  }
  if (d.total !== d.basico + d.medio + d.avanzado) {
    return 'Total inconsistente';
  }
  var t = d.tiempo;
  if (typeof t !== 'number' || !(t >= 10 && t <= 86400)) {
    return 'Tiempo inv\u00E1lido';
  }
  // El identificador solo admite letras minusculas y numeros:
  // un texto que empiece por "=" se volveria una formula en la hoja.
  if (!idValido(d.id)) {
    return 'Env\u00EDo sin identificador';
  }
  // Fecha de aceptacion de la politica de datos. Es opcional para
  // no perder envios guardados antes de esta version del juego.
  var c = d.consentimiento;
  if (c !== undefined && c !== '' && !fechaPolitica(c)) {
    return 'Fecha de aceptaci\u00F3n inv\u00E1lida';
  }
  return '';
}

/** Convierte la fecha de aceptacion en fecha de la hoja. */
function fechaPolitica(texto) {
  if (typeof texto !== 'string' || texto.length > 40) return '';
  var f = new Date(texto);
  return isNaN(f.getTime()) ? '' : f;
}

function idValido(id) {
  if (typeof id !== 'string') return false;
  if (id.length < 6 || id.length > 40) return false;
  for (var i = 0; i < id.length; i++) {
    var c = id.charCodeAt(i);
    var ok = (c >= 48 && c <= 57) || (c >= 97 && c <= 122);
    if (!ok) return false;
  }
  return true;
}

/** Letras (con tildes y enie), espacio, punto, guion y apostrofo. */
function nombreValido(n) {
  if (n.length < 5 || n.length > 40) return false;
  if (n.indexOf(' ') < 0) return false;
  for (var i = 0; i < n.length; i++) {
    var c = n.charCodeAt(i);
    var letra = (c >= 65 && c <= 90) || (c >= 97 && c <= 122);
    var tilde = c >= 192 && c <= 255 && c !== 215 && c !== 247;
    var signo = c === 32 || c === 39 || c === 45 || c === 46;
    if (!letra && !tilde && !signo) return false;
  }
  return true;
}

/**
 * Hoja de calculo donde se guardan los resultados.
 * Si el script se abrio desde una hoja, usa esa hoja.
 * Si se creo en script.google.com, crea una hoja en el Drive
 * la primera vez y la reutiliza despues.
 */
function obtenerLibro() {
  var activo = SpreadsheetApp.getActiveSpreadsheet();
  if (activo) return activo;
  var props = PropertiesService.getScriptProperties();
  var id = props.getProperty('HOJA_ID');
  if (id) return SpreadsheetApp.openById(id);
  var libro = SpreadsheetApp.create(NOMBRE_LIBRO);
  props.setProperty('HOJA_ID', libro.getId());
  return libro;
}

function obtenerHoja() {
  var libro = obtenerLibro();
  var hoja = libro.getSheetByName(HOJA);
  if (!hoja) {
    hoja = libro.insertSheet(HOJA);
    hoja.getRange(1, 1, 1, ENCABEZADOS.length)
      .setValues([ENCABEZADOS])
      .setFontWeight('bold')
      .setBackground('#8C1636')
      .setFontColor('#FFFFFF');
    hoja.setFrozenRows(1);
    hoja.hideColumns(COL.clave);
    hoja.hideColumns(COL.envio);
    hoja.getRange('K:L').setNumberFormat('yyyy-mm-dd hh:mm');
  }
  asegurarEncabezados(hoja);
  return hoja;
}

/**
 * Agrega al final las columnas nuevas que falten (por ejemplo
 * "Acepto politica") sin mover ni borrar los datos existentes.
 */
function asegurarEncabezados(hoja) {
  var n = ENCABEZADOS.length;
  var fila1 = hoja.getRange(1, 1, 1, n).getValues()[0];
  if (fila1[n - 1] === ENCABEZADOS[n - 1]) return;
  for (var i = 0; i < n; i++) {
    if (fila1[i] === '' || fila1[i] === null) {
      hoja.getRange(1, i + 1).setValue(ENCABEZADOS[i])
        .setFontWeight('bold')
        .setBackground('#8C1636')
        .setFontColor('#FFFFFF');
    }
  }
  var filas = hoja.getMaxRows() - 1;
  if (filas > 0) {
    hoja.getRange(2, COL.politica, filas, 1)
      .setNumberFormat('yyyy-mm-dd hh:mm');
  }
}

function buscarFila(hoja, clave) {
  var ultima = hoja.getLastRow();
  if (ultima < 2) return 0;
  var claves = hoja.getRange(2, COL.clave, ultima - 1, 1)
    .getValues();
  for (var i = 0; i < claves.length; i++) {
    if (claves[i][0] === clave) return i + 2;
  }
  return 0;
}

/** Quita espacios repetidos y signos que inician formulas. */
function limpiarNombre(s) {
  var t = String(s || '').split(/\s+/).join(' ').trim();
  while (t && '=+-@'.indexOf(t.charAt(0)) >= 0) {
    t = t.substring(1);
  }
  return t;
}

/** Minusculas y sin tildes, para comparar nombres. */
function normalizar(s) {
  var t = String(s).normalize('NFD');
  var out = '';
  for (var i = 0; i < t.length; i++) {
    var c = t.charCodeAt(i);
    if (c < 768 || c > 879) out += t.charAt(i);
  }
  return out.toLowerCase().split(/\s+/).join(' ').trim();
}

/** Segundos a minutos con un decimal. */
function minutos(seg) {
  return Math.round(Math.max(0, seg) / 6) / 10;
}

function error(mensaje, permanente) {
  return responder({
    ok: false,
    permanente: permanente,
    error: mensaje
  });
}

function responder(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * Ejecutalo una vez desde el editor (boton "Ejecutar") para
 * crear la hoja "Resultados". El enlace aparece en el
 * "Registro de ejecucion".
 */
function prepararHoja() {
  obtenerHoja();
  Logger.log('Hoja lista: ' + obtenerLibro().getUrl());
}
