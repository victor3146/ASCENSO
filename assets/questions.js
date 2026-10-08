// Banco de preguntas · Formación en Economía Solidaria (FODUN)
// level: 0 = Básico, 1 = Medio, 2 = Avanzado. En cada intento se eligen al azar 4 (Básico), 3 (Medio) o 5 (Avanzado);
// si alguien se equivoca en Básico o Medio, la pregunta de reemplazo sale de las restantes del mismo nivel.
window.FABI_QUESTION_BANK = [
  /* ============================ NIVEL BÁSICO ============================ */
  {
    "id": "b1", "level": 0, "topic": "fundamentos",
    "context": "Un compañero de la universidad te pregunta qué clase de entidad es el fondo de empleados.",
    "question": "¿Cuál es la descripción correcta?",
    "options": [
      "Una organización solidaria sin ánimo de lucro, formada por trabajadores que se asocian para ayudarse mutuamente.",
      "Una empresa privada que reparte utilidades entre sus inversionistas.",
      "Una entidad del Estado que presta servicios financieros."
    ],
    "correctIndex": 0,
    "feedbackCorrect": "Los fondos de empleados son organizaciones de la economía solidaria, sin ánimo de lucro, conformadas por trabajadores que comparten un vínculo común.",
    "feedbackIncorrect": "La respuesta correcta es: una organización solidaria sin ánimo de lucro, formada por trabajadores que se asocian para ayudarse mutuamente."
  },
  {
    "id": "b2", "level": 0, "topic": "principios",
    "context": "Al diseñar un nuevo servicio, la Junta Directiva debe decidir qué priorizar.",
    "question": "Según los principios de la economía solidaria, ¿qué va primero?",
    "options": [
      "El capital aportado por los asociados con más recursos.",
      "El ser humano y su trabajo, por encima del capital.",
      "La rentabilidad del fondo frente a la competencia."
    ],
    "correctIndex": 1,
    "feedbackCorrect": "La Ley 454 de 1998 establece como primer principio la primacía del ser humano, su trabajo y los mecanismos de cooperación sobre los medios de producción y el capital.",
    "feedbackIncorrect": "La respuesta correcta es: el ser humano y su trabajo, por encima del capital. Es el primer principio de la economía solidaria (Ley 454 de 1998)."
  },
  {
    "id": "b3", "level": 0, "topic": "principios",
    "context": "Una docente quiere vincularse al fondo y, al mismo tiempo, un colega decide retirarse.",
    "question": "¿Qué principio respalda ambas decisiones?",
    "options": [
      "Integración con otras organizaciones del sector.",
      "Servicio a la comunidad.",
      "Adhesión voluntaria, responsable y abierta."
    ],
    "correctIndex": 2,
    "feedbackCorrect": "Nadie puede ser obligado a asociarse ni a permanecer: la vinculación y el retiro son voluntarios, cumpliendo lo que indiquen los estatutos.",
    "feedbackIncorrect": "La respuesta correcta es: adhesión voluntaria, responsable y abierta. Vincularse y retirarse son decisiones libres del asociado."
  },
  {
    "id": "b4", "level": 0, "topic": "democracia",
    "context": "En una asamblea, un asociado con muchos aportes pide que su voto valga más que el de los demás.",
    "question": "¿Qué responde la economía solidaria?",
    "options": [
      "Su voto vale según el monto de sus aportes.",
      "Cada asociado tiene un voto, sin importar el valor de sus aportes.",
      "Solo votan quienes tienen créditos vigentes."
    ],
    "correctIndex": 1,
    "feedbackCorrect": "La administración es democrática: cada asociado (o delegado) tiene un voto. El poder de decisión no depende del capital.",
    "feedbackIncorrect": "La respuesta correcta es: cada asociado tiene un voto, sin importar sus aportes. Así funciona la administración democrática."
  },
  {
    "id": "b5", "level": 0, "topic": "principios",
    "context": "El fondo organiza talleres para que los asociados conozcan sus derechos, deberes y servicios.",
    "question": "¿Qué principio está aplicando?",
    "options": [
      "Formación e información permanente, oportuna y progresiva.",
      "Propiedad asociativa sobre los medios de producción.",
      "Promoción de la cultura ecológica."
    ],
    "correctIndex": 0,
    "feedbackCorrect": "La educación solidaria es un principio: un asociado informado participa mejor y toma mejores decisiones.",
    "feedbackIncorrect": "La respuesta correcta es: formación e información permanente, oportuna y progresiva para los asociados."
  },
  {
    "id": "b6", "level": 0, "topic": "sin ánimo de lucro",
    "context": "Al cierre del año, los ingresos del fondo superaron sus costos y gastos.",
    "question": "¿Cómo se llama ese resultado positivo en una organización solidaria?",
    "options": [
      "Dividendos.",
      "Utilidades para socios capitalistas.",
      "Excedentes."
    ],
    "correctIndex": 2,
    "feedbackCorrect": "En las organizaciones solidarias se habla de excedentes, no de utilidades: se aplican según la ley, los estatutos y lo que apruebe la asamblea.",
    "feedbackIncorrect": "La respuesta correcta es: excedentes. Las organizaciones sin ánimo de lucro no reparten utilidades como una empresa de capital."
  },
  {
    "id": "b7", "level": 0, "topic": "deberes",
    "context": "Un asociado nuevo quiere saber cuál es uno de sus deberes con el fondo.",
    "question": "¿Cuál de estas opciones es un deber del asociado?",
    "options": [
      "Aprobar personalmente cada crédito que se otorgue.",
      "Cumplir los estatutos y sus compromisos económicos con el fondo.",
      "Nombrar al revisor fiscal."
    ],
    "correctIndex": 1,
    "feedbackCorrect": "Conocer y cumplir los estatutos, reglamentos y obligaciones económicas es un deber básico que protege a todos los asociados.",
    "feedbackIncorrect": "La respuesta correcta es: cumplir los estatutos y sus compromisos económicos. Aprobar créditos o nombrar al revisor fiscal corresponde a otros órganos."
  },
  {
    "id": "b8", "level": 0, "topic": "valores",
    "context": "Una asociada sufre una calamidad doméstica y el fondo le entrega un auxilio.",
    "question": "¿Qué valor de la economía solidaria se refleja?",
    "options": [
      "Solidaridad y ayuda mutua.",
      "Competencia entre asociados.",
      "Lucro individual."
    ],
    "correctIndex": 0,
    "feedbackCorrect": "Los recursos comunes permiten apoyar a quien lo necesita: eso es solidaridad y ayuda mutua en la práctica.",
    "feedbackIncorrect": "La respuesta correcta es: solidaridad y ayuda mutua. El auxilio sale del esfuerzo colectivo de los asociados."
  },

  /* ============================ NIVEL MEDIO ============================ */
  {
    "id": "m1", "level": 1, "topic": "gobierno",
    "context": "El fondo necesita aprobar una reforma de sus estatutos.",
    "question": "¿Qué órgano tiene esa facultad?",
    "options": [
      "La gerencia.",
      "El revisor fiscal.",
      "La Asamblea General de asociados o de delegados."
    ],
    "correctIndex": 2,
    "feedbackCorrect": "La Asamblea General es el máximo órgano de administración. Sus decisiones obligan a todos los asociados cuando se toman conforme a la ley y los estatutos.",
    "feedbackIncorrect": "La respuesta correcta es: la Asamblea General. Es el máximo órgano del fondo y la única que puede reformar los estatutos."
  },
  {
    "id": "m2", "level": 1, "topic": "gobierno",
    "context": "Entre una asamblea y otra, alguien debe orientar la administración del fondo y aprobar sus reglamentos.",
    "question": "¿Qué órgano cumple ese papel?",
    "options": [
      "La Junta Directiva.",
      "El Comité de Control Social.",
      "Cada asociado de forma individual."
    ],
    "correctIndex": 0,
    "feedbackCorrect": "La Junta Directiva, elegida por la asamblea, es el órgano permanente de administración y responde ante ella.",
    "feedbackIncorrect": "La respuesta correcta es: la Junta Directiva. La elige la asamblea y administra el fondo de forma permanente."
  },
  {
    "id": "m3", "level": 1, "topic": "control social",
    "context": "Un asociado considera que no se respetaron sus derechos en un trámite interno.",
    "question": "¿A qué órgano puede acudir para ejercer el control social?",
    "options": [
      "Al comité de crédito.",
      "Al Comité de Control Social.",
      "Al proveedor de tecnología."
    ],
    "correctIndex": 1,
    "feedbackCorrect": "El Comité de Control Social vela por que la gestión se ajuste a la ley y los estatutos, y atiende las quejas sobre derechos y deberes de los asociados.",
    "feedbackIncorrect": "La respuesta correcta es: el Comité de Control Social, que protege los derechos de los asociados y vigila que se cumplan los estatutos."
  },
  {
    "id": "m4", "level": 1, "topic": "control",
    "context": "Se deben revisar y dictaminar los estados financieros del fondo.",
    "question": "¿Quién realiza esta labor?",
    "options": [
      "El comité de bienestar.",
      "La Junta Directiva.",
      "El Revisor Fiscal."
    ],
    "correctIndex": 2,
    "feedbackCorrect": "El Revisor Fiscal ejerce el control financiero y contable, y dictamina los estados financieros que se presentan a la asamblea.",
    "feedbackIncorrect": "La respuesta correcta es: el Revisor Fiscal. Su dictamen da confianza a los asociados sobre las cifras del fondo."
  },
  {
    "id": "m5", "level": 1, "topic": "aportes y ahorro",
    "context": "Cada mes se descuenta de tu nómina la cuota periódica para el fondo.",
    "question": "En un fondo de empleados, ¿a qué se destina esa cuota?",
    "options": [
      "A aportes sociales y ahorro permanente, en la proporción que fijen los estatutos.",
      "Solo a cubrir gastos administrativos.",
      "A pagar dividendos a la Junta Directiva."
    ],
    "correctIndex": 0,
    "feedbackCorrect": "La cuota periódica se divide entre aportes sociales (capital del fondo) y ahorro permanente, según lo definan los estatutos.",
    "feedbackIncorrect": "La respuesta correcta es: aportes sociales y ahorro permanente. Esa cuota fortalece el patrimonio común y tu propio ahorro."
  },
  {
    "id": "m6", "level": 1, "topic": "crédito",
    "context": "Un asociado quiere solicitar un crédito por encima de su capacidad de pago.",
    "question": "¿Qué actitud es coherente con la economía solidaria?",
    "options": [
      "Solicitarlo de todas formas y pagar cuando se pueda.",
      "Pedir a otro asociado que lo respalde sin explicarle el riesgo.",
      "Endeudarse según su capacidad de pago, para cuidar sus finanzas y los recursos de todos."
    ],
    "correctIndex": 2,
    "feedbackCorrect": "Los créditos se prestan con el ahorro de los asociados. La morosidad afecta a todos, por eso el endeudamiento debe ser responsable.",
    "feedbackIncorrect": "La respuesta correcta es: endeudarse según la capacidad de pago. Los recursos que se prestan son de todos los asociados."
  },
  {
    "id": "m7", "level": 1, "topic": "participación",
    "context": "Hay elección de delegados a la asamblea y muchos asociados no votan.",
    "question": "¿Por qué es importante participar?",
    "options": [
      "Porque quien no vota pierde sus ahorros.",
      "Porque la gestión democrática depende de que los asociados elijan y vigilen a sus representantes.",
      "No es importante: la gerencia decide todo."
    ],
    "correctIndex": 1,
    "feedbackCorrect": "La participación es el motor de una organización autogestionada: elegir delegados y órganos de control es ejercer la propiedad colectiva.",
    "feedbackIncorrect": "La respuesta correcta es: la gestión democrática depende de que los asociados elijan y vigilen a sus representantes."
  },
  {
    "id": "m8", "level": 1, "topic": "fondos sociales",
    "context": "El fondo financia auxilios, actividades de bienestar y planes en sus sedes recreativas.",
    "question": "¿De dónde provienen principalmente estos recursos?",
    "options": [
      "De fondos sociales constituidos con parte de los excedentes y otros recursos que definan los estatutos o la asamblea.",
      "De préstamos bancarios que luego se reparten.",
      "De multas cobradas a los asociados."
    ],
    "correctIndex": 0,
    "feedbackCorrect": "Los fondos sociales (bienestar, solidaridad, educación) se alimentan principalmente de los excedentes y de los recursos que aprueben los órganos del fondo.",
    "feedbackIncorrect": "La respuesta correcta es: de los fondos sociales, alimentados con parte de los excedentes y otros recursos aprobados."
  },

  /* ============================ NIVEL AVANZADO ============================ */
  {
    "id": "a1", "level": 2, "topic": "supervisión",
    "context": "Una entidad externa vigila que el fondo cumpla la normativa del sector solidario.",
    "question": "¿Qué entidad es?",
    "options": [
      "La Superintendencia Financiera.",
      "La Cámara de Comercio.",
      "La Superintendencia de la Economía Solidaria (Supersolidaria)."
    ],
    "correctIndex": 2,
    "feedbackCorrect": "La Supersolidaria ejerce inspección, vigilancia y control sobre las organizaciones solidarias, entre ellas los fondos de empleados.",
    "feedbackIncorrect": "La respuesta correcta es: la Superintendencia de la Economía Solidaria (Supersolidaria)."
  },
  {
    "id": "a2", "level": 2, "topic": "marco legal",
    "context": "En una capacitación te piden identificar la ley marco de la economía solidaria en Colombia.",
    "question": "¿Cuál es?",
    "options": [
      "La Ley 454 de 1998.",
      "La Ley 100 de 1993.",
      "La Ley 1581 de 2012."
    ],
    "correctIndex": 0,
    "feedbackCorrect": "La Ley 454 de 1998 fija el marco conceptual de la economía solidaria y creó la Supersolidaria. Los fondos de empleados se rigen además por el Decreto Ley 1481 de 1989 y sus reformas.",
    "feedbackIncorrect": "La respuesta correcta es: la Ley 454 de 1998. La Ley 100 trata de seguridad social y la 1581 de protección de datos personales."
  },
  {
    "id": "a3", "level": 2, "topic": "excedentes",
    "context": "La asamblea discute qué hacer con los excedentes del ejercicio.",
    "question": "¿Cuál afirmación es correcta?",
    "options": [
      "Se reparten libremente entre los miembros de la Junta Directiva.",
      "Primero se aplican a las reservas y fondos que exige la ley; el remanente se destina según decida la asamblea dentro de lo permitido.",
      "Se devuelven a la universidad como empleador."
    ],
    "correctIndex": 1,
    "feedbackCorrect": "La ley fija destinaciones mínimas obligatorias (como la reserva de protección de aportes). Sobre el resto decide la asamblea, siempre en beneficio de los asociados.",
    "feedbackIncorrect": "La respuesta correcta es: primero las reservas y fondos de ley, y el remanente según decida la asamblea."
  },
  {
    "id": "a4", "level": 2, "topic": "patrimonio",
    "context": "En un año difícil, el fondo registra pérdidas.",
    "question": "¿Para qué sirve la reserva de protección de aportes?",
    "options": [
      "Para pagar bonificaciones a la gerencia.",
      "Para financiar créditos sin intereses.",
      "Para proteger el patrimonio y absorber pérdidas, resguardando los aportes de los asociados."
    ],
    "correctIndex": 2,
    "feedbackCorrect": "Esta reserva se forma con parte de los excedentes y existe precisamente para absorber pérdidas sin afectar los aportes de los asociados.",
    "feedbackIncorrect": "La respuesta correcta es: proteger el patrimonio y absorber pérdidas, resguardando los aportes de los asociados."
  },
  {
    "id": "a5", "level": 2, "topic": "retiro",
    "context": "Un docente decide retirarse voluntariamente del fondo.",
    "question": "¿Qué ocurre con sus aportes y su ahorro permanente?",
    "options": [
      "Se le devuelven según los estatutos, después de cruzarlos con las obligaciones que tenga pendientes.",
      "Se pierden a favor del fondo.",
      "Se transfieren automáticamente a un banco."
    ],
    "correctIndex": 0,
    "feedbackCorrect": "Al retirarse, el asociado recibe sus aportes y ahorro permanente en los plazos y condiciones de los estatutos, descontando lo que deba al fondo.",
    "feedbackIncorrect": "La respuesta correcta es: se devuelven según los estatutos, después de cruzarlos con sus obligaciones pendientes."
  },
  {
    "id": "a6", "level": 2, "topic": "buen gobierno",
    "context": "Un miembro de la Junta Directiva debe votar la aprobación de un crédito para un familiar suyo.",
    "question": "¿Qué debe hacer?",
    "options": [
      "Aprobarlo rápido, porque conoce bien al solicitante.",
      "Declarar el conflicto de interés y abstenerse de participar en la decisión.",
      "Pedir que la discusión no quede en el acta."
    ],
    "correctIndex": 1,
    "feedbackCorrect": "El buen gobierno exige declarar los conflictos de interés y apartarse de la decisión. Así se protege la confianza de todos los asociados.",
    "feedbackIncorrect": "La respuesta correcta es: declarar el conflicto de interés y abstenerse de decidir."
  },
  {
    "id": "a7", "level": 2, "topic": "principios",
    "context": "El fondo se une con otras organizaciones solidarias para ofrecer mejores servicios a menor costo.",
    "question": "¿Qué principio está aplicando?",
    "options": [
      "Competencia de mercado.",
      "Autonomía absoluta frente al sector.",
      "Integración con otras organizaciones del mismo sector."
    ],
    "correctIndex": 2,
    "feedbackCorrect": "La integración permite sumar capacidades: las organizaciones solidarias se asocian entre sí para fortalecerse y servir mejor.",
    "feedbackIncorrect": "La respuesta correcta es: integración con otras organizaciones del mismo sector."
  },
  {
    "id": "a8", "level": 2, "topic": "principios",
    "context": "Una entidad externa intenta imponer quién debe ser elegido en la Junta Directiva del fondo.",
    "question": "¿Qué principio protege al fondo?",
    "options": [
      "Autonomía, autodeterminación y autogobierno.",
      "Servicio a la comunidad.",
      "Promoción de la cultura ecológica."
    ],
    "correctIndex": 0,
    "feedbackCorrect": "Las organizaciones solidarias se gobiernan a sí mismas: sus órganos los eligen libremente los asociados.",
    "feedbackIncorrect": "La respuesta correcta es: autonomía, autodeterminación y autogobierno."
  }
];
