// Banco de preguntas · Formación en Economía Solidaria (FODUN)
// Fuente: banco_preguntas_fodun_v2.xlsx (redacción revisada). El color define el nivel:
// verde = 0 (Básico), amarillo = 1 (Medio), rojo = 2 (Avanzado).
// En cada intento se eligen al azar 4 (Básico), 3 (Medio) o 5 (Avanzado) preguntas del nivel;
// si alguien se equivoca en Básico o Medio, la pregunta de reemplazo sale de las restantes del mismo nivel.
window.FABI_QUESTION_BANK = [
  /* ============ NIVEL 1 · BÁSICO (verde) ============ */
  {
    "id": "p1",
    "level": 0,
    "context": "Al afiliarse a FODUN, la persona recibe un nombre oficial dentro del fondo.",
    "question": "¿Cómo se llama oficialmente a quien se afilia a FODUN?",
    "options": [
      "Socio",
      "Asociado",
      "Inversionista"
    ],
    "correctIndex": 1,
    "feedbackCorrect": "¡Correcto! La respuesta es: Asociado.",
    "feedbackIncorrect": "La respuesta correcta es: Asociado."
  },
  {
    "id": "p2",
    "level": 0,
    "context": "FODUN es un fondo de empleados.",
    "question": "¿A qué sector pertenece?",
    "options": [
      "Sector privado",
      "Sector público",
      "Sector solidario"
    ],
    "correctIndex": 2,
    "feedbackCorrect": "¡Correcto! La respuesta es: Sector solidario.",
    "feedbackIncorrect": "La respuesta correcta es: Sector solidario."
  },
  {
    "id": "p3",
    "level": 0,
    "context": "Al vincularse al fondo, el asociado se compromete con una cuota mensual.",
    "question": "¿De cuánto es esa cuota?",
    "options": [
      "El 3 % del salario",
      "Un valor fijo de $100.000",
      "El 8 % del salario"
    ],
    "correctIndex": 0,
    "feedbackCorrect": "¡Correcto! La respuesta es: El 3 % del salario.",
    "feedbackIncorrect": "La respuesta correcta es: El 3 % del salario."
  },
  {
    "id": "p4",
    "level": 0,
    "context": "Las cuotas de un crédito con el fondo se pueden pagar de varias formas.",
    "question": "¿Cuál es la más ágil para el asociado y la más conveniente para el fondo?",
    "options": [
      "Libranza",
      "Pago en caja",
      "Pago mixto"
    ],
    "correctIndex": 0,
    "feedbackCorrect": "¡Correcto! La respuesta es: Libranza.",
    "feedbackIncorrect": "La respuesta correcta es: Libranza."
  },
  {
    "id": "p5",
    "level": 0,
    "context": "Una ventaja del fondo es que el asociado no asume el costo del seguro de sus créditos.",
    "question": "¿Quién paga los seguros de los créditos?",
    "options": [
      "FODUN",
      "La Universidad",
      "El asociado"
    ],
    "correctIndex": 0,
    "feedbackCorrect": "¡Correcto! La respuesta es: FODUN.",
    "feedbackIncorrect": "La respuesta correcta es: FODUN."
  },
  {
    "id": "p6",
    "level": 0,
    "context": "Los créditos que otorga el fondo se cobran con una tasa de interés.",
    "question": "¿Quién define la tasa de interés de los créditos?",
    "options": [
      "La Junta Directiva",
      "El Gerente General",
      "La Supersolidaria"
    ],
    "correctIndex": 0,
    "feedbackCorrect": "¡Correcto! La respuesta es: La Junta Directiva.",
    "feedbackIncorrect": "La respuesta correcta es: La Junta Directiva."
  },
  {
    "id": "p7",
    "level": 0,
    "context": "Las entidades solidarias están vigiladas por un organismo de control del Estado.",
    "question": "¿Quién vigila a los fondos de empleados?",
    "options": [
      "La Superintendencia de la Economía Solidaria",
      "La Superintendencia Financiera",
      "Analfe (Asociación Nacional de Fondos de Empleados)"
    ],
    "correctIndex": 0,
    "feedbackCorrect": "¡Correcto! La respuesta es: La Superintendencia de la Economía Solidaria.",
    "feedbackIncorrect": "La respuesta correcta es: La Superintendencia de la Economía Solidaria."
  },
  {
    "id": "p8",
    "level": 0,
    "context": "Por estatutos, el fondo debe reunir a su Asamblea General de forma periódica.",
    "question": "¿Cómo se llama la asamblea que se realiza cada año?",
    "options": [
      "Ordinaria",
      "Extraordinaria",
      "Supernumeraria"
    ],
    "correctIndex": 0,
    "feedbackCorrect": "¡Correcto! La respuesta es: Ordinaria.",
    "feedbackIncorrect": "La respuesta correcta es: Ordinaria."
  },
  {
    "id": "p9",
    "level": 0,
    "context": "FODUN es un fondo de carácter nacional.",
    "question": "¿En cuántas ciudades tiene presencia?",
    "options": [
      "Cuatro",
      "Cinco",
      "Seis"
    ],
    "correctIndex": 1,
    "feedbackCorrect": "¡Correcto! La respuesta es: Cinco.",
    "feedbackIncorrect": "La respuesta correcta es: Cinco."
  },
  {
    "id": "p10",
    "level": 0,
    "context": "Las organizaciones solidarias tienen una estructura de gobierno con distintos niveles de autoridad.",
    "question": "¿Cuál es la máxima autoridad de FODUN?",
    "options": [
      "La Asamblea General de delegados",
      "La Junta Directiva del fondo",
      "La Gerencia General del fondo"
    ],
    "correctIndex": 0,
    "feedbackCorrect": "¡Correcto! La respuesta es: La Asamblea General de delegados.",
    "feedbackIncorrect": "La respuesta correcta es: La Asamblea General de delegados."
  },
  {
    "id": "p13",
    "level": 0,
    "context": "FODUN entrega a sus asociados una tarjeta para ahorrar y usar su crédito.",
    "question": "¿Cómo se llama esa tarjeta?",
    "options": [
      "Servibanca",
      "Visionamos",
      "Amiga"
    ],
    "correctIndex": 1,
    "feedbackCorrect": "¡Correcto! La respuesta es: Visionamos.",
    "feedbackIncorrect": "La respuesta correcta es: Visionamos."
  },
  {
    "id": "p14",
    "level": 0,
    "context": "Las visitas a los centros recreativos tienen un reglamento con algunas restricciones.",
    "question": "¿Se pueden llevar mascotas a los centros recreativos?",
    "options": [
      "No, no están permitidas",
      "Sí, sin ninguna restricción",
      "Sí, pagando un valor adicional"
    ],
    "correctIndex": 0,
    "feedbackCorrect": "¡Correcto! La respuesta es: No, no están permitidas.",
    "feedbackIncorrect": "La respuesta correcta es: No, no están permitidas."
  },
  {
    "id": "p19",
    "level": 0,
    "context": "El fondo reconoce intereses sobre los ahorros de los asociados.",
    "question": "¿Quién define la tasa de interés de los ahorros?",
    "options": [
      "La Junta Directiva",
      "El Gerente General",
      "Analfe"
    ],
    "correctIndex": 0,
    "feedbackCorrect": "¡Correcto! La respuesta es: La Junta Directiva.",
    "feedbackIncorrect": "La respuesta correcta es: La Junta Directiva."
  },
  {
    "id": "p20",
    "level": 0,
    "context": "El Comité de Control Social es uno de los órganos que acompañan al fondo.",
    "question": "¿Quién elige a sus integrantes?",
    "options": [
      "La Asamblea General",
      "La Junta Directiva",
      "El Gerente General"
    ],
    "correctIndex": 0,
    "feedbackCorrect": "¡Correcto! La respuesta es: La Asamblea General.",
    "feedbackIncorrect": "La respuesta correcta es: La Asamblea General."
  },
  {
    "id": "p22",
    "level": 0,
    "context": "El fondo también ofrece seguros a sus asociados.",
    "question": "¿Cuál es la forma más ágil de pagarlos?",
    "options": [
      "Libranza",
      "Tarjeta de crédito",
      "Efectivo"
    ],
    "correctIndex": 0,
    "feedbackCorrect": "¡Correcto! La respuesta es: Libranza.",
    "feedbackIncorrect": "La respuesta correcta es: Libranza."
  },
  {
    "id": "p25",
    "level": 0,
    "context": "El fondo busca proteger los recursos de sus asociados.",
    "question": "¿FODUN tiene una póliza de protección para las tarjetas de crédito?",
    "options": [
      "Sí, el fondo tiene esa póliza",
      "No, cada asociado debe contratarla",
      "No, las tarjetas no tienen protección"
    ],
    "correctIndex": 0,
    "feedbackCorrect": "¡Correcto! La respuesta es: Sí, el fondo tiene esa póliza.",
    "feedbackIncorrect": "La respuesta correcta es: Sí, el fondo tiene esa póliza."
  },
  {
    "id": "p35",
    "level": 0,
    "context": "El fondo tiene un programa de auxilio funerario.",
    "question": "¿La afiliación a este programa es obligatoria para los asociados menores de 70 años?",
    "options": [
      "Sí, es obligatoria",
      "No, es voluntaria",
      "Solo para los asociados pensionados"
    ],
    "correctIndex": 0,
    "feedbackCorrect": "¡Correcto! La respuesta es: Sí, es obligatoria.",
    "feedbackIncorrect": "La respuesta correcta es: Sí, es obligatoria."
  },
  {
    "id": "p38",
    "level": 0,
    "context": "La tarjeta de ahorro y crédito es una de las formas más ágiles de usar el crédito del fondo.",
    "question": "¿A qué tipo de crédito está asociada?",
    "options": [
      "Rotatorio",
      "De corto plazo",
      "De permanencia"
    ],
    "correctIndex": 0,
    "feedbackCorrect": "¡Correcto! La respuesta es: Rotatorio.",
    "feedbackIncorrect": "La respuesta correcta es: Rotatorio."
  },
  {
    "id": "p52",
    "level": 0,
    "context": "Los principios solidarios orientan el funcionamiento del fondo.",
    "question": "¿Cuáles de estos son principios solidarios?",
    "options": [
      "Rentabilidad, competencia y reserva de información",
      "Solidaridad, equidad, participación democrática y ayuda mutua",
      "Libre mercado, anonimato y delegación total en la Gerencia"
    ],
    "correctIndex": 1,
    "feedbackCorrect": "¡Correcto! La respuesta es: Solidaridad, equidad, participación democrática y ayuda mutua.",
    "feedbackIncorrect": "La respuesta correcta es: Solidaridad, equidad, participación democrática y ayuda mutua."
  },
  {
    "id": "p56",
    "level": 0,
    "context": "En su página web, el fondo presenta “El círculo solidario”.",
    "question": "¿Cuál es la secuencia que publica?",
    "options": [
      "Ahorro, crédito, excedentes, bienestar y nuevos beneficios",
      "Crédito, mora, exclusión y liquidación",
      "Utilidad, dividendo, retiro del inversionista y cierre"
    ],
    "correctIndex": 0,
    "feedbackCorrect": "¡Correcto! La respuesta es: Ahorro, crédito, excedentes, bienestar y nuevos beneficios.",
    "feedbackIncorrect": "La respuesta correcta es: Ahorro, crédito, excedentes, bienestar y nuevos beneficios."
  },
  /* ============ NIVEL 2 · MEDIO (amarillo) ============ */
  {
    "id": "p11",
    "level": 1,
    "context": "El bienestar es una de las principales misiones del fondo.",
    "question": "¿Cuántos centros recreativos tiene FODUN?",
    "options": [
      "Cuatro",
      "Siete",
      "Cinco"
    ],
    "correctIndex": 0,
    "feedbackCorrect": "¡Correcto! La respuesta es: Cuatro.",
    "feedbackIncorrect": "La respuesta correcta es: Cuatro."
  },
  {
    "id": "p12",
    "level": 1,
    "context": "Además de sus centros recreativos, el fondo ofrece alojamientos en distintas ciudades del país.",
    "question": "¿En qué ciudades se encuentran?",
    "options": [
      "Medellín, Bogotá, Cartagena y Santa Marta",
      "Medellín, Bogotá, Valledupar y Melgar",
      "Bogotá, Melgar, Cartagena y Valledupar"
    ],
    "correctIndex": 0,
    "feedbackCorrect": "¡Correcto! La respuesta es: Medellín, Bogotá, Cartagena y Santa Marta.",
    "feedbackIncorrect": "La respuesta correcta es: Medellín, Bogotá, Cartagena y Santa Marta."
  },
  {
    "id": "p15",
    "level": 1,
    "context": "Muchos asociados no saben que el fondo les ofrece pólizas de seguro.",
    "question": "¿Qué tipo de póliza maneja FODUN?",
    "options": [
      "Colectiva",
      "Individual",
      "Mixta"
    ],
    "correctIndex": 0,
    "feedbackCorrect": "¡Correcto! La respuesta es: Colectiva.",
    "feedbackIncorrect": "La respuesta correcta es: Colectiva."
  },
  {
    "id": "p16",
    "level": 1,
    "context": "El fondo ofrece créditos con distintos plazos.",
    "question": "¿Cuál es el crédito con el plazo más corto?",
    "options": [
      "Crédito de emergencia",
      "Crédito ordinario",
      "Crédito de vehículo"
    ],
    "correctIndex": 0,
    "feedbackCorrect": "¡Correcto! La respuesta es: Crédito de emergencia.",
    "feedbackIncorrect": "La respuesta correcta es: Crédito de emergencia."
  },
  {
    "id": "p17",
    "level": 1,
    "context": "Los CDAT (Certificados de Depósito de Ahorro a Término) son títulos de ahorro que ofrece el fondo.",
    "question": "¿Cuáles son sus plazos?",
    "options": [
      "3, 6 y 12 meses",
      "8 y 12 meses",
      "5 y 10 meses"
    ],
    "correctIndex": 0,
    "feedbackCorrect": "¡Correcto! La respuesta es: 3, 6 y 12 meses.",
    "feedbackIncorrect": "La respuesta correcta es: 3, 6 y 12 meses."
  },
  {
    "id": "p18",
    "level": 1,
    "context": "El fondo liquida periódicamente los intereses de los ahorros permanentes.",
    "question": "¿Cada cuánto se liquidan?",
    "options": [
      "Cada 3 meses",
      "Cada 7 meses",
      "Cada 12 meses"
    ],
    "correctIndex": 0,
    "feedbackCorrect": "¡Correcto! La respuesta es: Cada 3 meses.",
    "feedbackIncorrect": "La respuesta correcta es: Cada 3 meses."
  },
  {
    "id": "p21",
    "level": 1,
    "context": "FODUN tiene una larga trayectoria al servicio de sus asociados.",
    "question": "¿Cuántos años cumplirá FODUN en el año 2040?",
    "options": [
      "50 años",
      "46 años",
      "53 años"
    ],
    "correctIndex": 0,
    "feedbackCorrect": "¡Correcto! La respuesta es: 50 años.",
    "feedbackIncorrect": "La respuesta correcta es: 50 años."
  },
  {
    "id": "p23",
    "level": 1,
    "context": "Para reclamar un seguro con el fondo es necesario reportar el siniestro.",
    "question": "¿Qué es un siniestro?",
    "options": [
      "Un hecho súbito, impredecible y accidental",
      "El pago que hace la aseguradora al asociado",
      "Un tipo de seguro para la vivienda familiar"
    ],
    "correctIndex": 0,
    "feedbackCorrect": "¡Correcto! La respuesta es: Un hecho súbito, impredecible y accidental.",
    "feedbackIncorrect": "La respuesta correcta es: Un hecho súbito, impredecible y accidental."
  },
  {
    "id": "p24",
    "level": 1,
    "context": "Los asociados consultan con frecuencia sobre los seguros que ofrece el fondo.",
    "question": "¿Cuál es el seguro más consultado?",
    "options": [
      "Salud",
      "Hogar",
      "Autos"
    ],
    "correctIndex": 2,
    "feedbackCorrect": "¡Correcto! La respuesta es: Autos.",
    "feedbackIncorrect": "La respuesta correcta es: Autos."
  },
  {
    "id": "p26",
    "level": 1,
    "context": "Los seguros del fondo protegen los recursos de los asociados.",
    "question": "¿Cuál es el mayor beneficio que tienen los asociados en seguros?",
    "options": [
      "La póliza de deudores",
      "La póliza de autos",
      "La póliza de salud"
    ],
    "correctIndex": 0,
    "feedbackCorrect": "¡Correcto! La respuesta es: La póliza de deudores.",
    "feedbackIncorrect": "La respuesta correcta es: La póliza de deudores."
  },
  {
    "id": "p27",
    "level": 1,
    "context": "Cuando un asociado visita una sede recreativa, queda protegido automáticamente.",
    "question": "¿Qué lo cubre?",
    "options": [
      "Una póliza de responsabilidad civil",
      "Un seguro de los bomberos del municipio",
      "Un plan de la Funeraria Unal"
    ],
    "correctIndex": 0,
    "feedbackCorrect": "¡Correcto! La respuesta es: Una póliza de responsabilidad civil.",
    "feedbackIncorrect": "La respuesta correcta es: Una póliza de responsabilidad civil."
  },
  {
    "id": "p28",
    "level": 1,
    "context": "Si un asociado asegurado por el fondo tiene un siniestro con su vehículo, debe pagar un deducible.",
    "question": "¿Cuál es el deducible por daño del vehículo?",
    "options": [
      "1 SMMLV",
      "20 %",
      "2 SMMLV"
    ],
    "correctIndex": 0,
    "feedbackCorrect": "¡Correcto! La respuesta es: 1 SMMLV.",
    "feedbackIncorrect": "La respuesta correcta es: 1 SMMLV."
  },
  {
    "id": "p29",
    "level": 1,
    "context": "El seguro de salud del fondo tiene distintas coberturas.",
    "question": "¿Qué incluye la cobertura básica?",
    "options": [
      "Urgencias, hospitalización y cirugía",
      "EPS, ARL y servicio de urgencias",
      "Ambulancia y cirugías plásticas"
    ],
    "correctIndex": 0,
    "feedbackCorrect": "¡Correcto! La respuesta es: Urgencias, hospitalización y cirugía.",
    "feedbackIncorrect": "La respuesta correcta es: Urgencias, hospitalización y cirugía."
  },
  {
    "id": "p30",
    "level": 1,
    "context": "El asociado puede ampliar su seguro de salud con coberturas adicionales.",
    "question": "¿Qué cobertura adicional puede comprar?",
    "options": [
      "Consulta externa y exámenes ambulatorios",
      "Atención odontológica completa",
      "Cobertura total de anteojos y lentes"
    ],
    "correctIndex": 0,
    "feedbackCorrect": "¡Correcto! La respuesta es: Consulta externa y exámenes ambulatorios.",
    "feedbackIncorrect": "La respuesta correcta es: Consulta externa y exámenes ambulatorios."
  },
  {
    "id": "p31",
    "level": 1,
    "context": "Hay un principio de organización que diferencia al sector solidario de las empresas de capital.",
    "question": "¿Cuál es?",
    "options": [
      "Autogestión",
      "Jerarquización",
      "Dirección"
    ],
    "correctIndex": 0,
    "feedbackCorrect": "¡Correcto! La respuesta es: Autogestión.",
    "feedbackIncorrect": "La respuesta correcta es: Autogestión."
  },
  {
    "id": "p33",
    "level": 1,
    "context": "El fondo da un auxilio a los asociados pensionados que necesitan asistencia domiciliaria.",
    "question": "¿Qué porcentaje del valor del servicio cubre?",
    "options": [
      "El 35 %",
      "El 20 %",
      "El 15 %"
    ],
    "correctIndex": 0,
    "feedbackCorrect": "¡Correcto! La respuesta es: El 35 %.",
    "feedbackIncorrect": "La respuesta correcta es: El 35 %."
  },
  {
    "id": "p36",
    "level": 1,
    "context": "Para acceder al auxilio funerario se necesita un tiempo mínimo de afiliación.",
    "question": "¿Desde cuándo se puede acceder?",
    "options": [
      "A los 6 meses de la afiliación",
      "A los 3 meses de la afiliación",
      "A los 8 meses de la afiliación"
    ],
    "correctIndex": 0,
    "feedbackCorrect": "¡Correcto! La respuesta es: A los 6 meses de la afiliación.",
    "feedbackIncorrect": "La respuesta correcta es: A los 6 meses de la afiliación."
  },
  {
    "id": "p37",
    "level": 1,
    "context": "Si un asociado fallece, el fondo entrega un auxilio funerario.",
    "question": "¿Cuál es su monto?",
    "options": [
      "15 SMMLV",
      "10 SMMLV",
      "20 SMMLV"
    ],
    "correctIndex": 0,
    "feedbackCorrect": "¡Correcto! La respuesta es: 15 SMMLV.",
    "feedbackIncorrect": "La respuesta correcta es: 15 SMMLV."
  },
  {
    "id": "p51",
    "level": 1,
    "context": "Los estatutos definen en qué programas se reinvierten los excedentes del fondo.",
    "question": "¿En cuáles?",
    "options": [
      "Bienestar, educación solidaria, auxilios, sedes y apartamentos, eventos y desarrollo empresarial solidario",
      "Dividendos para los asociados, compra de acciones en bancos y bonificaciones para la Junta Directiva",
      "Solo el pago de los honorarios de la Revisoría Fiscal y de los gastos administrativos de la Gerencia"
    ],
    "correctIndex": 0,
    "feedbackCorrect": "¡Correcto! La respuesta es: Bienestar, educación solidaria, auxilios, sedes y apartamentos, eventos y desarrollo empresarial solidario.",
    "feedbackIncorrect": "La respuesta correcta es: Bienestar, educación solidaria, auxilios, sedes y apartamentos, eventos y desarrollo empresarial solidario."
  },
  {
    "id": "p60",
    "level": 1,
    "context": "Los asociados de cada regional eligen delegados que los representan.",
    "question": "¿Para qué existen los delegados?",
    "options": [
      "Para llevar la voz de los asociados de su regional a la Asamblea, cuando no todos pueden asistir",
      "Para reemplazar a la Asamblea General y administrar directamente las sedes de cada regional",
      "Para elegir al Gerente General y repartir las utilidades del fondo entre los inversionistas"
    ],
    "correctIndex": 0,
    "feedbackCorrect": "¡Correcto! La respuesta es: Para llevar la voz de los asociados de su regional a la Asamblea, cuando no todos pueden asistir.",
    "feedbackIncorrect": "La respuesta correcta es: Para llevar la voz de los asociados de su regional a la Asamblea, cuando no todos pueden asistir."
  },
  /* ============ NIVEL 3 · AVANZADO (rojo) ============ */
  {
    "id": "p32",
    "level": 2,
    "context": "El fondo reconoce un auxilio por incapacidad médica con un tope anual por asociado.",
    "question": "¿Cuál es el monto máximo por asociado en cada vigencia anual?",
    "options": [
      "18 SMMLV",
      "9 SMMLV",
      "7 SMMLV"
    ],
    "correctIndex": 0,
    "feedbackCorrect": "¡Correcto! La respuesta es: 18 SMMLV.",
    "feedbackIncorrect": "La respuesta correcta es: 18 SMMLV."
  },
  {
    "id": "p34",
    "level": 2,
    "context": "La asistencia domiciliaria para asociados pensionados tiene topes en salarios mínimos.",
    "question": "¿Cuáles son esos topes?",
    "options": [
      "3 SMMLV por mes y máximo 18 SMMLV",
      "6 SMMLV por mes y máximo 8 SMMLV",
      "1 SMMLV por mes y máximo 3 SMMLV"
    ],
    "correctIndex": 0,
    "feedbackCorrect": "¡Correcto! La respuesta es: 3 SMMLV por mes y máximo 18 SMMLV.",
    "feedbackIncorrect": "La respuesta correcta es: 3 SMMLV por mes y máximo 18 SMMLV."
  },
  {
    "id": "p39",
    "level": 2,
    "context": "Cada asociado paga una cuota mensual equivalente al 3 % de su salario o mesada pensional.",
    "question": "¿Cómo se distribuye esa cuota?",
    "options": [
      "50 % aportes sociales y 50 % ahorro permanente",
      "20 % aportes sociales y 80 % ahorro permanente",
      "80 % aportes sociales y 20 % ahorro permanente"
    ],
    "correctIndex": 1,
    "feedbackCorrect": "¡Correcto! La respuesta es: 20 % aportes sociales y 80 % ahorro permanente.",
    "feedbackIncorrect": "La respuesta correcta es: 20 % aportes sociales y 80 % ahorro permanente."
  },
  {
    "id": "p40",
    "level": 2,
    "context": "Los estatutos fijan cómo se distribuyen los excedentes de cada año, incluido el Fondo de Desarrollo Empresarial Solidario (FODES).",
    "question": "¿Cuál afirmación es correcta?",
    "options": [
      "El 50 % se reparte en efectivo entre los asociados y el otro 50 % va a la reserva de protección de aportes",
      "Primero se cubren pérdidas anteriores; luego, mínimo 20 % a la reserva de protección de aportes y mínimo 10 % al FODES",
      "Todos los excedentes se destinan al crédito de vivienda, salvo que la Junta Directiva decida darles otro uso"
    ],
    "correctIndex": 1,
    "feedbackCorrect": "¡Correcto! La respuesta es: Primero se cubren pérdidas anteriores; luego, mínimo 20 % a la reserva de protección de aportes y mínimo 10 % al FODES.",
    "feedbackIncorrect": "La respuesta correcta es: Primero se cubren pérdidas anteriores; luego, mínimo 20 % a la reserva de protección de aportes y mínimo 10 % al FODES."
  },
  {
    "id": "p41",
    "level": 2,
    "context": "El asociado puede retirarse voluntariamente del fondo y, más adelante, pedir su reingreso.",
    "question": "¿Cuándo y ante quién puede pedir el reingreso?",
    "options": [
      "De inmediato, en cualquier momento, ante la Gerencia General",
      "Después de al menos 6 meses de su retiro, ante la Junta Directiva",
      "Después de 1 año, solo si lo aprueba la Asamblea General de delegados"
    ],
    "correctIndex": 1,
    "feedbackCorrect": "¡Correcto! La respuesta es: Después de al menos 6 meses de su retiro, ante la Junta Directiva.",
    "feedbackIncorrect": "La respuesta correcta es: Después de al menos 6 meses de su retiro, ante la Junta Directiva."
  },
  {
    "id": "p42",
    "level": 2,
    "context": "La Asamblea General de delegados se reúne cada año y vota según las reglas de los estatutos.",
    "question": "¿Qué reglas de votación aplican?",
    "options": [
      "Quórum: la mitad de los delegados elegidos. Decisiones ordinarias: mayoría absoluta de los presentes. Reforma de estatutos: 70 % de los presentes. Fusión, transformación, disolución o liquidación: 70 % del total de delegados convocados.",
      "Quórum: un tercio de los delegados elegidos. Decisiones ordinarias: mayoría simple de los presentes. Reforma de estatutos: mayoría simple de los presentes. Fusión, transformación, disolución o liquidación: decisión de la Junta Directiva.",
      "Quórum: la mitad más uno de los asociados hábiles. Decisiones ordinarias y reforma de estatutos: mitad más uno de los asociados hábiles. Fusión, transformación, disolución o liquidación: 50 % de los presentes."
    ],
    "correctIndex": 0,
    "feedbackCorrect": "¡Correcto! La respuesta es: Quórum: la mitad de los delegados elegidos. Decisiones ordinarias: mayoría absoluta de los presentes. Reforma de estatutos: 70 % de los presentes. Fusión, transformación, disolución o liquidación: 70 % del total de delegados convocados.",
    "feedbackIncorrect": "La respuesta correcta es: Quórum: la mitad de los delegados elegidos. Decisiones ordinarias: mayoría absoluta de los presentes. Reforma de estatutos: 70 % de los presentes. Fusión, transformación, disolución o liquidación: 70 % del total de delegados convocados."
  },
  {
    "id": "p43",
    "level": 2,
    "context": "El fondo se administra con los principios de democracia, participación y autogestión.",
    "question": "¿Cuál afirmación es correcta sobre la Junta Directiva y el Comité de Control Social?",
    "options": [
      "La Gerencia General los designa y responden únicamente ante la Superintendencia",
      "La Asamblea General los elige y representan a los asociados de todo el país",
      "Los asociados eligen a la Junta, y el Revisor Fiscal nombra al Comité por el periodo que él fije"
    ],
    "correctIndex": 1,
    "feedbackCorrect": "¡Correcto! La respuesta es: La Asamblea General los elige y representan a los asociados de todo el país.",
    "feedbackIncorrect": "La respuesta correcta es: La Asamblea General los elige y representan a los asociados de todo el país."
  },
  {
    "id": "p44",
    "level": 2,
    "context": "La Junta Directiva y el Comité de Control Social tienen una composición fijada en los estatutos.",
    "question": "¿Cómo está integrado cada órgano?",
    "options": [
      "Junta Directiva: 7 principales y 7 suplentes personales. Comité de Control Social: 3 principales y sus suplentes personales.",
      "Junta Directiva: 5 principales sin suplentes. Comité de Control Social: 7 principales, uno por sede y tres de Bogotá.",
      "Junta Directiva y Comité de Control Social: 7 principales y 7 suplentes cada uno, elegidos por cada sede regional."
    ],
    "correctIndex": 0,
    "feedbackCorrect": "¡Correcto! La respuesta es: Junta Directiva: 7 principales y 7 suplentes personales. Comité de Control Social: 3 principales y sus suplentes personales.",
    "feedbackIncorrect": "La respuesta correcta es: Junta Directiva: 7 principales y 7 suplentes personales. Comité de Control Social: 3 principales y sus suplentes personales."
  },
  {
    "id": "p45",
    "level": 2,
    "context": "Los órganos de gobierno del fondo son independientes y tienen funciones diferentes.",
    "question": "¿Cuál afirmación describe correctamente sus funciones?",
    "options": [
      "El Comité de Control Social ejerce la vigilancia social; “La Junta Comunica” informa las decisiones de la Junta; los informes de gestión se presentan a la Asamblea como rendición de cuentas.",
      "El Comité de Control Social aprueba los estados financieros; “La Junta Comunica” reemplaza a la Asamblea; los informes de gestión los elabora solo la Gerencia Regional de Bogotá.",
      "La Revisoría Fiscal elige a la Junta Directiva; el Comité de Control Social administra el crédito; los informes de gestión son internos y no se presentan a los delegados."
    ],
    "correctIndex": 0,
    "feedbackCorrect": "¡Correcto! La respuesta es: El Comité de Control Social ejerce la vigilancia social; “La Junta Comunica” informa las decisiones de la Junta; los informes de gestión se presentan a la Asamblea como rendición de cuentas.",
    "feedbackIncorrect": "La respuesta correcta es: El Comité de Control Social ejerce la vigilancia social; “La Junta Comunica” informa las decisiones de la Junta; los informes de gestión se presentan a la Asamblea como rendición de cuentas."
  },
  {
    "id": "p46",
    "level": 2,
    "context": "La Revisoría Fiscal vigila las finanzas del fondo y debe ser independiente.",
    "question": "¿Qué condición corresponde a su elección?",
    "options": [
      "La elige la Asamblea; no puede ser asociado ni pariente o socio de directivos o miembros de control, y no puede reelegirse más de dos veces seguidas.",
      "La nombra la Junta Directiva entre los asociados con más de dos años de antigüedad, y tiene voz y voto en todas las decisiones de la Junta.",
      "La designa la Superintendencia de la Economía Solidaria por cinco años, y su función principal es aprobar los créditos y administrar las sedes regionales."
    ],
    "correctIndex": 0,
    "feedbackCorrect": "¡Correcto! La respuesta es: La elige la Asamblea; no puede ser asociado ni pariente o socio de directivos o miembros de control, y no puede reelegirse más de dos veces seguidas.",
    "feedbackIncorrect": "La respuesta correcta es: La elige la Asamblea; no puede ser asociado ni pariente o socio de directivos o miembros de control, y no puede reelegirse más de dos veces seguidas."
  },
  {
    "id": "p47",
    "level": 2,
    "context": "Las organizaciones pueden ser públicas, privadas o solidarias, según su propósito.",
    "question": "¿Cuál afirmación describe correctamente a FODUN?",
    "options": [
      "Es un banco de los docentes de la Universidad Nacional que capta su ahorro para generar utilidades y repartirlas entre inversionistas.",
      "Es una organización solidaria de docentes activos y pensionados de la Universidad Nacional, que administra sus recursos para el bienestar colectivo.",
      "Es un intermediario financiero externo a la comunidad docente, cuyas decisiones las toma una junta de inversionistas privados ajenos a la Universidad."
    ],
    "correctIndex": 1,
    "feedbackCorrect": "¡Correcto! La respuesta es: Es una organización solidaria de docentes activos y pensionados de la Universidad Nacional, que administra sus recursos para el bienestar colectivo.",
    "feedbackIncorrect": "La respuesta correcta es: Es una organización solidaria de docentes activos y pensionados de la Universidad Nacional, que administra sus recursos para el bienestar colectivo."
  },
  {
    "id": "p48",
    "level": 2,
    "context": "El aporte mensual de cada asociado tiene un propósito solidario y se convierte en beneficios colectivos.",
    "question": "¿Cuál es el ciclo que conecta el aporte con el bienestar?",
    "options": [
      "Los aportes financian créditos con tasas de mercado y generan utilidades que se pagan como dividendos a los inversionistas.",
      "Los aportes fortalecen el patrimonio, permiten créditos en condiciones preferenciales y generan excedentes que se reinvierten en bienestar.",
      "Los aportes se congelan, los créditos se otorgan solo a terceros y los excedentes se reparten como utilidad individual cada mes."
    ],
    "correctIndex": 1,
    "feedbackCorrect": "¡Correcto! La respuesta es: Los aportes fortalecen el patrimonio, permiten créditos en condiciones preferenciales y generan excedentes que se reinvierten en bienestar.",
    "feedbackIncorrect": "La respuesta correcta es: Los aportes fortalecen el patrimonio, permiten créditos en condiciones preferenciales y generan excedentes que se reinvierten en bienestar."
  },
  {
    "id": "p49",
    "level": 2,
    "context": "La página del fondo explica los principios que sostienen su modelo y el papel de la educación solidaria (PESEM).",
    "question": "¿Cuál afirmación es correcta?",
    "options": [
      "Son solidaridad, equidad, participación democrática y ayuda mutua; la educación solidaria es parte del modelo, no un beneficio adicional.",
      "El principio central es la rentabilidad, y el PESEM es un seguro voluntario que no tiene relación con la participación de los asociados.",
      "La equidad significa que deciden solo los asociados de Bogotá, y la educación solidaria es una actividad opcional y externa al modelo."
    ],
    "correctIndex": 0,
    "feedbackCorrect": "¡Correcto! La respuesta es: Son solidaridad, equidad, participación democrática y ayuda mutua; la educación solidaria es parte del modelo, no un beneficio adicional.",
    "feedbackIncorrect": "La respuesta correcta es: Son solidaridad, equidad, participación democrática y ayuda mutua; la educación solidaria es parte del modelo, no un beneficio adicional."
  },
  {
    "id": "p50",
    "level": 2,
    "context": "Los estatutos definen cómo participan, deciden y vigilan los asociados.",
    "question": "¿Por qué existen la Asamblea, los delegados y el Comité de Control Social?",
    "options": [
      "La Asamblea solo informa; los delegados administran el crédito; el Comité de Control Social reemplaza a la Revisoría Fiscal y reparte los excedentes.",
      "La Asamblea es el máximo órgano de decisión; los delegados llevan la voz de cada regional; el Comité de Control Social vela por el interés de los asociados.",
      "La Asamblea solo opina cuando la Gerencia la convoca; los delegados administran las sedes; el Comité de Control Social fija las tasas de los créditos."
    ],
    "correctIndex": 1,
    "feedbackCorrect": "¡Correcto! La respuesta es: La Asamblea es el máximo órgano de decisión; los delegados llevan la voz de cada regional; el Comité de Control Social vela por el interés de los asociados.",
    "feedbackIncorrect": "La respuesta correcta es: La Asamblea es el máximo órgano de decisión; los delegados llevan la voz de cada regional; el Comité de Control Social vela por el interés de los asociados."
  },
  {
    "id": "p53",
    "level": 2,
    "context": "En la sección de preguntas frecuentes de la página del fondo se explica qué son los aportes.",
    "question": "¿Qué son los aportes?",
    "options": [
      "Dejan de pertenecer al asociado en el momento del descuento y no se le devuelven, ni siquiera al retirarse.",
      "Son la base del patrimonio colectivo y, a la vez, le pertenecen al asociado como parte de su patrimonio.",
      "Solo sirven para pagar los seguros del fondo y no tienen relación con el ahorro ni con el crédito."
    ],
    "correctIndex": 1,
    "feedbackCorrect": "¡Correcto! La respuesta es: Son la base del patrimonio colectivo y, a la vez, le pertenecen al asociado como parte de su patrimonio.",
    "feedbackIncorrect": "La respuesta correcta es: Son la base del patrimonio colectivo y, a la vez, le pertenecen al asociado como parte de su patrimonio."
  },
  {
    "id": "p54",
    "level": 2,
    "context": "En la página del fondo, el modelo solidario se resume en una frase que cierra un círculo.",
    "question": "¿Cuál es esa frase?",
    "options": [
      "Unos aportan, otros deciden y solo crecen los inversionistas: el ciclo termina cuando se reparten las utilidades.",
      "Todos aportamos, todos participamos y todos crecemos juntos: cada beneficio vuelve como nuevo ahorro y el ciclo empieza otra vez.",
      "Cada asociado aporta lo que quiere y recibe lo que aportó: el ciclo se cierra cuando recibe dividendos y deja de aportar."
    ],
    "correctIndex": 1,
    "feedbackCorrect": "¡Correcto! La respuesta es: Todos aportamos, todos participamos y todos crecemos juntos: cada beneficio vuelve como nuevo ahorro y el ciclo empieza otra vez.",
    "feedbackIncorrect": "La respuesta correcta es: Todos aportamos, todos participamos y todos crecemos juntos: cada beneficio vuelve como nuevo ahorro y el ciclo empieza otra vez."
  },
  {
    "id": "p55",
    "level": 2,
    "context": "La página del fondo describe una cadena que va del ahorro al bienestar.",
    "question": "¿Cuál es esa cadena?",
    "options": [
      "El asociado ahorra, el ahorro se retira de inmediato, no entra al patrimonio y por eso no financia nuevos créditos.",
      "El asociado ahorra, eso fortalece el patrimonio, permite nuevos créditos y los excedentes financian el bienestar de todos.",
      "El asociado ahorra, el ahorro se deposita en un banco externo y el fondo solo cobra una comisión por administrarlo."
    ],
    "correctIndex": 1,
    "feedbackCorrect": "¡Correcto! La respuesta es: El asociado ahorra, eso fortalece el patrimonio, permite nuevos créditos y los excedentes financian el bienestar de todos.",
    "feedbackIncorrect": "La respuesta correcta es: El asociado ahorra, eso fortalece el patrimonio, permite nuevos créditos y los excedentes financian el bienestar de todos."
  },
  {
    "id": "p57",
    "level": 2,
    "context": "La página del fondo agrupa en dos tipos los beneficios para los asociados.",
    "question": "¿Cómo los agrupa?",
    "options": [
      "Financieros: ahorro, crédito y CDAT. Sociales: auxilios, convenios, seguros, sedes y apartamentos, cursos y eventos en familia.",
      "Financieros: solo los CDAT. Sociales: la participación en la Asamblea y la elección de los delegados de cada regional.",
      "Financieros: dividendos y acciones en bolsa. Sociales: descuentos en bancos y en comercios aliados de todo el país."
    ],
    "correctIndex": 0,
    "feedbackCorrect": "¡Correcto! La respuesta es: Financieros: ahorro, crédito y CDAT. Sociales: auxilios, convenios, seguros, sedes y apartamentos, cursos y eventos en familia.",
    "feedbackIncorrect": "La respuesta correcta es: Financieros: ahorro, crédito y CDAT. Sociales: auxilios, convenios, seguros, sedes y apartamentos, cursos y eventos en familia."
  },
  {
    "id": "p58",
    "level": 2,
    "context": "La página del fondo explica por qué se hacen elecciones.",
    "question": "¿Qué razón da?",
    "options": [
      "Porque un banco corresponsal exige que el fondo cambie cada año a sus gerentes, directivos y delegados.",
      "Porque los asociados eligen democráticamente a quienes los representan en la Asamblea y en los órganos de control.",
      "Porque los estatutos asignan los cargos de delegado por antigüedad en el fondo, sin necesidad de hacer una votación."
    ],
    "correctIndex": 1,
    "feedbackCorrect": "¡Correcto! La respuesta es: Porque los asociados eligen democráticamente a quienes los representan en la Asamblea y en los órganos de control.",
    "feedbackIncorrect": "La respuesta correcta es: Porque los asociados eligen democráticamente a quienes los representan en la Asamblea y en los órganos de control."
  },
  {
    "id": "p59",
    "level": 2,
    "context": "La página del fondo explica dos principios: la equidad y la ayuda mutua.",
    "question": "¿Cómo los explica?",
    "options": [
      "Equidad: todos tienen igualdad de oportunidades. Ayuda mutua: el bienestar colectivo fortalece el bienestar individual.",
      "Equidad: tiene más voto quien más aporta. Ayuda mutua: cada asociado debe resolver solo sus propios créditos.",
      "Equidad: se da prioridad a una sola regional. Ayuda mutua: los auxilios se entregan solo a no asociados."
    ],
    "correctIndex": 0,
    "feedbackCorrect": "¡Correcto! La respuesta es: Equidad: todos tienen igualdad de oportunidades. Ayuda mutua: el bienestar colectivo fortalece el bienestar individual.",
    "feedbackIncorrect": "La respuesta correcta es: Equidad: todos tienen igualdad de oportunidades. Ayuda mutua: el bienestar colectivo fortalece el bienestar individual."
  }
];
