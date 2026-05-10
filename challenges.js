/*
  Datos de rutas y pruebas.

  Aviso de seguridad: en una web estática no se pueden ocultar completamente
  respuestas, ubicaciones ni rutas. Este archivo se descarga en el navegador.
  Es adecuado para una actividad educativa, no para una evaluación segura.
*/

window.TREASURE_ROUTES = {
  G01: {
    routeName: "Ruta HTML inicial",
    challenges: [
      {
        group: "G01",
        challengeId: "G01-P01",
        title: "Etiqueta para un enlace",
        statement: "¿Qué etiqueta HTML se usa para crear un enlace?",
        acceptedAnswers: ["a", "<a>", "etiqueta a"],
        hints: ["Tiene un atributo llamado href.", "Es una etiqueta de una sola letra."],
        successMessage: "Correcto. Id a: Debajo de la escala de incendios pabellón viejo. Cuando encontréis el código físico, verificadlo aquí.",
        unlockedLocation: "Debajo de la escala de incendios pabellón viejo",
        locationCode: "G01-K7M2Q9",
        teacherNotes: "Pregunta básica sobre enlaces HTML."
      },
      {
        group: "G01",
        challengeId: "G01-P02",
        title: "Estructura básica",
        statement: "¿Qué etiqueta contiene el contenido visible de una página HTML?",
        acceptedAnswers: ["body", "<body>", "etiqueta body"],
        hints: ["No es head.", "Dentro de ella van textos, imágenes y enlaces visibles."],
        successMessage: "Correcto. Id a: Papelera de plástico detrás pabellón nuevo. Cuando encontréis el código físico, verificadlo aquí.",
        unlockedLocation: "Papelera de plástico detrás pabellón nuevo",
        locationCode: "G01-H8P4W2",
        teacherNotes: "Diferencia entre head y body."
      },
      {
        group: "G01",
        challengeId: "G01-P03",
        title: "Párrafo HTML",
        statement: "Completa la etiqueta: para escribir un párrafo se usa ____.",
        acceptedAnswers: ["p", "<p>", "etiqueta p"],
        hints: ["Es una etiqueta de una sola letra.", "Se cierra con </p>."],
        successMessage: "Correcto. Id a: Debajo de primera pizarra frente a las pistas de fútbol. Cuando encontréis el código físico, verificadlo aquí.",
        unlockedLocation: "Debajo de primera pizarra frente a las pistas de fútbol",
        locationCode: "G01-R4X8T1",
        teacherNotes: "Uso de la etiqueta p."
      },
      {
        group: "G01",
        challengeId: "G01-P04",
        title: "Imagen HTML",
        statement: "¿Qué etiqueta HTML se usa para insertar una imagen?",
        acceptedAnswers: ["img", "<img>", "etiqueta img"],
        hints: ["Suele usar src y alt.", "No necesita etiqueta de cierre en HTML."],
        successMessage: "Correcto. Id a: Mesa ajedrez. Cuando encontréis el código físico, verificadlo aquí.",
        unlockedLocation: "Mesa ajedrez",
        locationCode: "G01-Z2C7N5",
        teacherNotes: "Etiqueta img y atributos básicos."
      },
      {
        group: "G01",
        challengeId: "G01-P05",
        title: "Color del texto",
        statement: "¿Qué propiedad CSS cambia el color del texto?",
        acceptedAnswers: ["color", "color:", "propiedad color"],
        hints: ["No cambia el fondo.", "Se escribe, por ejemplo, color: red;"],
        successMessage: "Correcto. Id a: Banco de piedra cerca de la fuente. Cuando encontréis el código físico, verificadlo aquí.",
        unlockedLocation: "Banco de piedra cerca de la fuente",
        locationCode: "G01-Q6D1L7",
        teacherNotes: "Propiedad CSS color."
      },
      {
        group: "G01",
        challengeId: "G01-P06",
        title: "Selector de clase",
        statement: "¿Qué selector CSS selecciona una clase llamada caja?",
        acceptedAnswers: [".caja", "punto caja", "selector .caja"],
        hints: ["Las clases usan un punto.", "No empieza por almohadilla."],
        successMessage: "Correcto. Id a: Árboles detrás de mesa sin pintar. Cuando encontréis el código físico, verificadlo aquí.",
        unlockedLocation: "Árboles detrás de mesa sin pintar",
        locationCode: "G01-B9L3V6",
        teacherNotes: "Selector de clase con punto."
      }
    ]
  },
  G02: {
    routeName: "Ruta CSS inicial",
    challenges: [
      {
        group: "G02",
        challengeId: "G02-P01",
        title: "Título principal",
        statement: "¿Qué etiqueta HTML se usa normalmente para el título principal de una página?",
        acceptedAnswers: ["h1", "<h1>", "etiqueta h1"],
        hints: ["Es el encabezado de mayor nivel.", "Después pueden venir h2 o h3."],
        successMessage: "Correcto. Id a: Portería sin red cerca pabellón deportivo. Cuando encontréis el código físico, verificadlo aquí.",
        unlockedLocation: "Portería sin red cerca pabellón deportivo",
        locationCode: "G02-F6P1A8",
        teacherNotes: "Jerarquía básica de títulos."
      },
      {
        group: "G02",
        challengeId: "G02-P02",
        title: "Fondo con CSS",
        statement: "¿Qué propiedad CSS cambia el color de fondo?",
        acceptedAnswers: ["background-color", "background color", "background-color:", "propiedad background-color"],
        hints: ["No es color, porque color cambia el texto.", "Empieza por background."],
        successMessage: "Correcto. Id a: Escalera de incendios pabellón nuevo. Cuando encontréis el código físico, verificadlo aquí.",
        unlockedLocation: "Escalera de incendios pabellón nuevo",
        locationCode: "G02-X8R2K7",
        teacherNotes: "Propiedad background-color."
      },
      {
        group: "G02",
        challengeId: "G02-P03",
        title: "Conectar CSS",
        statement: "¿Qué etiqueta se usa en HTML para conectar un archivo CSS externo?",
        acceptedAnswers: ["link", "<link>", "etiqueta link"],
        hints: ["Suele ir dentro de head.", "Usa rel=\"stylesheet\"."],
        successMessage: "Correcto. Id a: Mesa amarillo y negra. Cuando encontréis el código físico, verificadlo aquí.",
        unlockedLocation: "Mesa amarillo y negra",
        locationCode: "G02-M3D9Q4",
        teacherNotes: "Uso de link para enlazar CSS."
      },
      {
        group: "G02",
        challengeId: "G02-P04",
        title: "Selector de ID",
        statement: "¿Qué selector CSS selecciona un id llamado menu?",
        acceptedAnswers: ["#menu", "almohadilla menu", "selector #menu"],
        hints: ["Los id usan almohadilla.", "No empieza por punto."],
        successMessage: "Correcto. Id a: Salida al parking derecha. Cuando encontréis el código físico, verificadlo aquí.",
        unlockedLocation: "Salida al parking derecha",
        locationCode: "G02-T5V6B1",
        teacherNotes: "Selector de id con almohadilla."
      },
      {
        group: "G02",
        challengeId: "G02-P05",
        title: "Texto centrado",
        statement: "Escribe la propiedad CSS que sirve para alinear texto.",
        acceptedAnswers: ["text-align", "text align", "text-align:", "propiedad text-align"],
        hints: ["Permite valores como center, left o right.", "Tiene un guion entre las dos palabras."],
        successMessage: "Correcto. Id a: Papelera marrón cerca de la escalera de incendios pabellón viejo. Cuando encontréis el código físico, verificadlo aquí.",
        unlockedLocation: "Papelera marrón cerca de la escalera de incendios pabellón viejo",
        locationCode: "G02-N9C3L7",
        teacherNotes: "Propiedad text-align."
      },
      {
        group: "G02",
        challengeId: "G02-P06",
        title: "Lista ordenada",
        statement: "¿Qué etiqueta HTML crea una lista ordenada con números?",
        acceptedAnswers: ["ol", "<ol>", "etiqueta ol", "lista ol"],
        hints: ["La lista no ordenada usa ul.", "Ordered list se abrevia ol."],
        successMessage: "Correcto. Id a: Pizarra cerca de la salida del pabellón viejo. Cuando encontréis el código físico, verificadlo aquí.",
        unlockedLocation: "Pizarra cerca de la salida del pabellón viejo",
        locationCode: "G02-W4K8R2",
        teacherNotes: "Diferencia entre ol y ul."
      }
    ]
  },
  G03: {
    routeName: "Ruta etiquetas y atributos",
    challenges: [
      {
        group: "G03",
        challengeId: "G03-P01",
        title: "Atributo de enlace",
        statement: "¿Qué atributo de la etiqueta <a> indica la dirección del enlace?",
        acceptedAnswers: ["href", "href=", "atributo href"],
        hints: ["Empieza por h.", "Se usa así: <a href=\"...\">."],
        successMessage: "Correcto. Id a: Caja metálica al lado del huerto. Cuando encontréis el código físico, verificadlo aquí.",
        unlockedLocation: "Caja metálica al lado del huerto",
        locationCode: "G03-Q9H4M2",
        teacherNotes: "Atributo href en enlaces."
      },
      {
        group: "G03",
        challengeId: "G03-P02",
        title: "Atributo de imagen",
        statement: "¿Qué atributo de <img> indica la ruta o archivo de la imagen?",
        acceptedAnswers: ["src", "src=", "atributo src"],
        hints: ["También aparece en vídeos o scripts.", "Se usa para indicar el origen del recurso."],
        successMessage: "Correcto. Id a: Ventana de audiovisuales. Cuando encontréis el código físico, verificadlo aquí.",
        unlockedLocation: "Ventana de audiovisuales",
        locationCode: "G03-L3D7X5",
        teacherNotes: "Atributo src."
      },
      {
        group: "G03",
        challengeId: "G03-P03",
        title: "Texto alternativo",
        statement: "¿Qué atributo de <img> añade un texto alternativo para accesibilidad?",
        acceptedAnswers: ["alt", "alt=", "atributo alt"],
        hints: ["Ayuda si la imagen no carga.", "También lo usan lectores de pantalla."],
        successMessage: "Correcto. Id a: Basura gris cerca de la puerta pabellón nuevo. Cuando encontréis el código físico, verificadlo aquí.",
        unlockedLocation: "Basura gris cerca de la puerta pabellón nuevo",
        locationCode: "G03-C7L1X8",
        teacherNotes: "Atributo alt y accesibilidad básica."
      },
      {
        group: "G03",
        challengeId: "G03-P04",
        title: "Comentario HTML",
        statement: "Completa el inicio de un comentario HTML: ____ comentario -->",
        acceptedAnswers: ["<!--", "<!-- comentario -->", "<!-- comentario -->", "menor exclamacion guion guion", "menor exclamación guion guion"],
        hints: ["Empieza con menor que y exclamación.", "Después van dos guiones."],
        successMessage: "Correcto. Id a: Canasta cerca del pabellón deportivo. Cuando encontréis el código físico, verificadlo aquí.",
        unlockedLocation: "Canasta cerca del pabellón deportivo",
        locationCode: "G03-N5R6T3",
        teacherNotes: "Sintaxis básica de comentarios HTML."
      },
      {
        group: "G03",
        challengeId: "G03-P05",
        title: "Tamaño de letra",
        statement: "¿Qué propiedad CSS cambia el tamaño del texto?",
        acceptedAnswers: ["font-size", "font size", "font-size:", "propiedad font-size"],
        hints: ["Puede usar px, rem o em.", "Empieza por font."],
        successMessage: "Correcto. Id a: Pizarra detrás del pabellón nuevo. Cuando encontréis el código físico, verificadlo aquí.",
        unlockedLocation: "Pizarra detrás del pabellón nuevo",
        locationCode: "G03-A6K8V1",
        teacherNotes: "Propiedad font-size."
      },
      {
        group: "G03",
        challengeId: "G03-P06",
        title: "Elemento de lista",
        statement: "¿Qué etiqueta se usa para cada elemento dentro de una lista ul u ol?",
        acceptedAnswers: ["li", "<li>", "etiqueta li"],
        hints: ["Va dentro de ul u ol.", "Significa list item."],
        successMessage: "Correcto. Id a: Valla con la iglesia. Cuando encontréis el código físico, verificadlo aquí.",
        unlockedLocation: "Valla con la iglesia",
        locationCode: "G03-W2B9P4",
        teacherNotes: "Uso de li en listas."
      }
    ]
  },
  G04: {
    routeName: "Ruta cajas y selectores",
    challenges: [
      {
        group: "G04",
        challengeId: "G04-P01",
        title: "Clase o id",
        statement: "Si quiero repetir el mismo estilo en varios elementos, ¿uso class o id?",
        acceptedAnswers: ["class", "clase", "atributo class"],
        hints: ["Un id debe ser único en la página.", "Las clases se pueden repetir."],
        successMessage: "Correcto. Id a: Pizarra entre pabellón nuevo y pabellón de educación física. Cuando encontréis el código físico, verificadlo aquí.",
        unlockedLocation: "Pizarra entre pabellón nuevo y pabellón de educación física",
        locationCode: "G04-A8K3D7",
        teacherNotes: "Diferencia básica entre class e id."
      },
      {
        group: "G04",
        challengeId: "G04-P02",
        title: "Margen exterior",
        statement: "¿Qué propiedad CSS controla el espacio exterior de una caja?",
        acceptedAnswers: ["margin", "margin:", "propiedad margin", "margen"],
        hints: ["Está fuera del borde.", "No es padding."],
        successMessage: "Correcto. Id a: Cerca de la puerta que da al pabellón deportivo. Cuando encontréis el código físico, verificadlo aquí.",
        unlockedLocation: "Cerca de la puerta que da al pabellón deportivo",
        locationCode: "G04-P4X2M5",
        teacherNotes: "Concepto de margin."
      },
      {
        group: "G04",
        challengeId: "G04-P03",
        title: "Relleno interior",
        statement: "¿Qué propiedad CSS controla el espacio interior entre el contenido y el borde?",
        acceptedAnswers: ["padding", "padding:", "propiedad padding", "relleno"],
        hints: ["Está dentro del borde.", "No es margin."],
        successMessage: "Correcto. Id a: Basura al lado de árbol cortado. Cuando encontréis el código físico, verificadlo aquí.",
        unlockedLocation: "Basura al lado de árbol cortado",
        locationCode: "G04-N2M5Q9",
        teacherNotes: "Concepto de padding."
      },
      {
        group: "G04",
        challengeId: "G04-P04",
        title: "Borde CSS",
        statement: "¿Qué propiedad CSS añade o modifica el borde de una caja?",
        acceptedAnswers: ["border", "border:", "propiedad border", "borde"],
        hints: ["Puede indicar grosor, tipo y color.", "Ejemplo: border: 1px solid black;"],
        successMessage: "Correcto. Id a: Valla del huerto. Cuando encontréis el código físico, verificadlo aquí.",
        unlockedLocation: "Valla del huerto",
        locationCode: "G04-V1Q6L9",
        teacherNotes: "Propiedad border."
      },
      {
        group: "G04",
        challengeId: "G04-P05",
        title: "Display básico",
        statement: "¿Qué propiedad CSS permite cambiar cómo se muestra un elemento, por ejemplo block, inline o flex?",
        acceptedAnswers: ["display", "display:", "propiedad display"],
        hints: ["Tiene valores como block y flex.", "No es position."],
        successMessage: "Correcto. Id a: Escaleras salida pequeña. Cuando encontréis el código físico, verificadlo aquí.",
        unlockedLocation: "Escaleras salida pequeña",
        locationCode: "G04-H7T9C3",
        teacherNotes: "Propiedad display."
      },
      {
        group: "G04",
        challengeId: "G04-P06",
        title: "Flexbox básico",
        statement: "Escribe la línea CSS básica para activar flexbox en una caja.",
        acceptedAnswers: ["display:flex", "display: flex", "display: flex;", "display flex"],
        hints: ["Usa la propiedad display.", "El valor es flex."],
        successMessage: "Correcto. Id a: Cuadro eléctrico mesas sin pintar. Cuando encontréis el código físico, verificadlo aquí.",
        unlockedLocation: "Cuadro eléctrico mesas sin pintar",
        locationCode: "G04-R6B1X8",
        teacherNotes: "Inicio básico de flexbox."
      }
    ]
  },
  G05: {
    routeName: "Ruta errores comunes",
    challenges: [
      {
        group: "G05",
        challengeId: "G05-P01",
        title: "Cierre de etiqueta",
        statement: "Corrige el error escribiendo la etiqueta de cierre que falta: <p>Hola mundo",
        acceptedAnswers: ["</p>", "p", "/p", "cierre p"],
        hints: ["Los párrafos se cierran.", "La etiqueta de cierre lleva una barra."],
        successMessage: "Correcto. Id a: Detrás pizarras cerca de la fuente. Cuando encontréis el código físico, verificadlo aquí.",
        unlockedLocation: "Detrás pizarras cerca de la fuente",
        locationCode: "G05-L6B2R8",
        teacherNotes: "Error común de cierre de etiqueta p."
      },
      {
        group: "G05",
        challengeId: "G05-P02",
        title: "Cierre de título",
        statement: "Corrige el cierre de este título: <h1>Mi página</h2>. ¿Cuál debe ser la etiqueta de cierre?",
        acceptedAnswers: ["</h1>", "h1", "/h1", "cierre h1"],
        hints: ["La apertura y el cierre deben tener el mismo número.", "Abre con h1, por tanto cierra con h1."],
        successMessage: "Correcto. Id a: Canasta cerca del pabellón nuevo. Cuando encontréis el código físico, verificadlo aquí.",
        unlockedLocation: "Canasta cerca del pabellón nuevo",
        locationCode: "G05-X3M7Q5",
        teacherNotes: "Coherencia entre etiqueta de apertura y cierre."
      },
      {
        group: "G05",
        challengeId: "G05-P03",
        title: "Error CSS",
        statement: "Corrige la propiedad mal escrita: backgroud-color: yellow;",
        acceptedAnswers: ["background-color", "background-color:", "background-color: yellow", "background-color: yellow;"],
        hints: ["Falta una letra n.", "La propiedad empieza por background."],
        successMessage: "Correcto. Id a: Basura al salir del pabellón viejo al recreo. Cuando encontréis el código físico, verificadlo aquí.",
        unlockedLocation: "Basura al salir del pabellón viejo al recreo",
        locationCode: "G05-D9V4K1",
        teacherNotes: "Error común de sintaxis en background-color."
      },
      {
        group: "G05",
        challengeId: "G05-P04",
        title: "Dos puntos en CSS",
        statement: "En CSS, ¿qué signo separa una propiedad de su valor?",
        acceptedAnswers: [":", "dos puntos", "signo dos puntos"],
        hints: ["Ejemplo: color: red;", "No es el punto y coma final."],
        successMessage: "Correcto. Id a: Ventana entrada pabellón nuevo. Cuando encontréis el código físico, verificadlo aquí.",
        unlockedLocation: "Ventana entrada pabellón nuevo",
        locationCode: "G05-T8C1P6",
        teacherNotes: "Sintaxis propiedad: valor."
      },
      {
        group: "G05",
        challengeId: "G05-P05",
        title: "Punto y coma CSS",
        statement: "En CSS, ¿qué signo se suele escribir al final de una declaración?",
        acceptedAnswers: [";", "punto y coma", "signo punto y coma"],
        hints: ["Ejemplo: color: blue;", "No son dos puntos."],
        successMessage: "Correcto. Id a: Puerta pequeña trasera pabellón educación física. Cuando encontréis el código físico, verificadlo aquí.",
        unlockedLocation: "Puerta pequeña trasera pabellón educación física",
        locationCode: "G05-Q4N9A7",
        teacherNotes: "Uso del punto y coma en declaraciones CSS."
      },
      {
        group: "G05",
        challengeId: "G05-P06",
        title: "HTML, head y body",
        statement: "¿Qué etiqueta engloba normalmente todo el documento HTML?",
        acceptedAnswers: ["html", "<html>", "etiqueta html"],
        hints: ["Dentro suelen estar head y body.", "Tiene el mismo nombre que el lenguaje."],
        successMessage: "Correcto. Id a: Detrás mangueras cerca del huerto. Cuando encontréis el código físico, verificadlo aquí.",
        unlockedLocation: "Detrás mangueras cerca del huerto",
        locationCode: "G05-W8K2H5",
        teacherNotes: "Estructura básica con html, head y body."
      }
    ]
  }
};
