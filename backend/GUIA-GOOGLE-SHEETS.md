# Registro de resultados en Google Sheets

> **Importante:** el repositorio de GitHub no guarda datos ni contiene la hoja de resultados. El juego es una página estática; los resultados se guardan en una hoja de **Google Sheets en el Drive de la cuenta del fondo**. Esa hoja se crea con los pasos de esta guía, y desde Google Sheets se puede descargar como Excel (Archivo → Descargar → Microsoft Excel).

Cuando un asociado **supera el nivel Avanzado**, el juego envía su resultado a una hoja de Google Sheets del fondo. Si no completa los tres niveles, no se registra nada.

Cada asociado ocupa **una fila**, identificada por nombre y ciudad. Si vuelve a terminar el recorrido, se conserva su mejor puntaje y aumenta el contador "Veces completado".

| Columna | Contenido |
|---|---|
| Nombre, Ciudad, Personaje | Datos del asociado y personaje elegido (fabi o fabio) |
| Puntaje total | Sobre 100 |
| Básico (20), Medio (30), Avanzado (50) | Mejor puntaje de cada nivel |
| Tiempo total (min) | Suma del tiempo de los mejores intentos |
| Veces completado | Cuántas veces terminó los tres niveles |
| Primera finalización / Última actualización | Fechas |
| Aceptó política | Fecha en que el asociado aceptó la política de tratamiento de datos (vacía en registros anteriores a esta función) |

Las columnas "Clave" y "Último envío" quedan ocultas; el script las usa para evitar duplicados.

---

## Pasos 1 y 2. Crear la hoja y pegar el script (10 min)

Entra con la **cuenta de Google institucional del fondo**. No uses una cuenta personal, para que los datos no dependan de una persona.

**Opción A (recomendada): desde una hoja**
1. Crea una hoja nueva en [sheets.new](https://sheets.new) y ponle un nombre, por ejemplo: `Resultados · Formación en Economía Solidaria`.
2. En la hoja, abre **Extensiones → Apps Script**.
3. Borra el contenido del archivo `Código.gs`, pega todo el contenido de [`apps-script.gs`](apps-script.gs) y pulsa **Guardar** (ícono de disquete).

**Opción B: si ya pegaste el script directamente en [script.google.com](https://script.google.com)**
No hace falta empezar de nuevo. Al ejecutar `prepararHoja`, el script crea la hoja `Resultados · Formación en Economía Solidaria` en el Drive de la cuenta y sigue usándola después.

**En ambos casos:**
1. En la barra superior del editor elige la función **`prepararHoja`** y pulsa **Ejecutar**.
2. La primera vez Google pide permisos: **Revisar permisos → elige la cuenta → Configuración avanzada → Ir a … (no seguro) → Permitir**. Es normal en scripts propios.
3. Abajo, en el **Registro de ejecución**, aparece `Hoja lista:` con el enlace a la hoja. Ábrelo: verás la pestaña **"Resultados"** con los encabezados en color vino.

## Paso 3. Publicar como aplicación web (10 min)

1. Pulsa **Implementar → Nueva implementación**.
2. En el ícono de engranaje, elige **Aplicación web**.
3. Configura:
   - **Descripción:** `Registro juego FODUN`
   - **Ejecutar como:** `Yo` (la cuenta del fondo)
   - **Quién tiene acceso:** `Cualquier usuario`. Es necesario para que los asociados envíen su resultado sin iniciar sesión en Google.
4. Pulsa **Implementar** y autoriza los permisos:
   - **Revisar permisos** y elige la cuenta del fondo.
   - Si aparece "Google no verificó esta app", pulsa **Configuración avanzada → Ir a … (no seguro)**. Es normal en scripts propios.
   - Pulsa **Permitir**.
5. Copia la **URL de la aplicación web**. Termina en `/exec`, por ejemplo:
   `https://script.google.com/macros/s/AKfy…/exec`

Para comprobar que funciona, abre esa URL en el navegador. Debe mostrar `{"ok":true,"servicio":"Formación en Economía Solidaria · FODUN"}`.

## Paso 4. Conectar el juego

En `index.html`, pega la URL en esta línea:

```js
const SHEETS_URL = "https://script.google.com/macros/s/AKfy…/exec";
```

Si la línea queda vacía (`""`), el juego funciona igual pero no envía resultados.

## Paso 5. Publicar el juego con GitHub Pages (10 min)

El Artifact de pruebas de Claude no puede conectarse a servicios externos, así que el registro se prueba desde GitHub Pages:

1. En GitHub, abre el repositorio → **Settings → Pages**.
2. En **Source**, elige **Deploy from a branch**, rama `main` y carpeta `/ (root)`, y pulsa **Save**.
3. En uno o dos minutos el juego queda disponible en `https://victor3146.github.io/ASCENSO/`.

## Paso 6. Prueba piloto

1. Juega los tres niveles con un nombre de prueba, por ejemplo "Prueba Piloto".
2. Al terminar el nivel Avanzado, la pantalla final debe decir **"✅ Tu resultado quedó registrado."**
3. Revisa que la fila aparezca en la pestaña "Resultados" y bórrala antes del lanzamiento.

---

## Si se cambia el script más adelante

Después de editar el código en Apps Script, ve a **Implementar → Administrar implementaciones → editar (lápiz) → Versión: Nueva versión → Implementar**. Así la URL no cambia y no hay que tocar el juego.

## Qué valida el script

Rechaza los envíos imposibles:
- nombre sin apellido o con caracteres extraños
- ciudad que no está en la lista (Bogotá, Medellín, Manizales, Palmira, La Paz)
- Básico distinto de 20 o Medio distinto de 30
- Avanzado que no sea múltiplo de 10 entre 0 y 50
- total que no cuadra
- tiempos irreales

Ignora los envíos repetidos. No puede detectar a alguien que escriba el nombre de otra persona, porque no hay padrón ni contraseña.

## Si no hay internet

Si el asociado termina sin conexión, el resultado queda guardado en su navegador. El juego lo reenvía la próxima vez que lo abra o cuando vuelva la conexión.

## Datos personales

La hoja contiene nombres y ciudades de los asociados. Compártela solo con quienes la administran y define con el área legal el aviso de tratamiento de datos (Ley 1581 de 2012).
