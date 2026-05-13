/*
  Datos de rutas y pruebas.

  Aviso de seguridad: en una web estática no se pueden ocultar completamente
  respuestas, ubicaciones ni rutas. Este archivo se descarga en el navegador.
  Es adecuado para una actividad educativa, no para una evaluación segura.
*/

window.TREASURE_ROUTES = {
  "G01": {
    "routeName": "Redes y Bash · Ruta 1",
    "challenges": [
      {
        "group": "G01",
        "challengeId": "G01-P01",
        "title": "Nueva máscara FLSM",
        "statement": "Tienes la red 192.168.10.0/24 y quieres dividirla en 4 subredes iguales con FLSM. ¿Qué prefijo CIDR tendrá cada subred?",
        "acceptedAnswers": [
          "/26",
          "26",
          "prefijo /26",
          "cidr /26",
          "255.255.255.192"
        ],
        "hints": [
          "4 subredes necesitan tomar 2 bits de la parte de hosts.",
          "/24 + 2 = /26."
        ],
        "successMessage": "Correcto. Id a: Debajo de la escalera de incendios pabellón viejo. Cuando encontréis el código físico, verificadlo aquí.",
        "unlockedLocation": "Debajo de la escalera de incendios pabellón viejo",
        "locationCode": "G01-K7M2Q9",
        "teacherNotes": "FLSM: /24 dividido en 4 subredes iguales."
      },
      {
        "group": "G01",
        "challengeId": "G01-P02",
        "title": "Primera dirección utilizable",
        "statement": "En la subred 192.168.10.64/26, ¿cuál es la primera dirección IP utilizable para un host?",
        "acceptedAnswers": [
          "192.168.10.65",
          "192 168 10 65"
        ],
        "hints": [
          "La primera dirección de la subred es la dirección de red.",
          "La primera utilizable es una más que la dirección de red."
        ],
        "successMessage": "Correcto. Id a: Papelera de plástico detrás pabellón nuevo. Cuando encontréis el código físico, verificadlo aquí.",
        "unlockedLocation": "Papelera de plástico detrás pabellón nuevo",
        "locationCode": "G01-H8P4W2",
        "teacherNotes": "Direccionamiento: primera IP utilizable."
      },
      {
        "group": "G01",
        "challengeId": "G01-P03",
        "title": "Dirección de broadcast",
        "statement": "En la subred 192.168.10.128/26, ¿cuál es la dirección de broadcast?",
        "acceptedAnswers": [
          "192.168.10.191",
          "192 168 10 191"
        ],
        "hints": [
          "Un /26 tiene bloques de 64 direcciones.",
          "El bloque va de .128 a .191."
        ],
        "successMessage": "Correcto. Id a: Debajo de la primera pizarra frente a las pistas de fútbol. Cuando encontréis el código físico, verificadlo aquí.",
        "unlockedLocation": "Debajo de la primera pizarra frente a las pistas de fútbol",
        "locationCode": "G01-R4X8T1",
        "teacherNotes": "Direccionamiento: broadcast de una subred /26."
      },
      {
        "group": "G01",
        "challengeId": "G01-P04",
        "title": "VLSM para 30 hosts",
        "statement": "Con VLSM, ¿cuál es el prefijo más pequeño que permite al menos 30 hosts utilizables?",
        "acceptedAnswers": [
          "/27",
          "27",
          "prefijo /27",
          "cidr /27",
          "255.255.255.224"
        ],
        "hints": [
          "Recuerda restar red y broadcast.",
          "2^5 = 32 direcciones; 32 - 2 = 30 hosts."
        ],
        "successMessage": "Correcto. Id a: Mesa ajedrez. Cuando encontréis el código físico, verificadlo aquí.",
        "unlockedLocation": "Mesa ajedrez",
        "locationCode": "G01-Z2C7N5",
        "teacherNotes": "VLSM: cálculo de prefijo mínimo."
      },
      {
        "group": "G01",
        "challengeId": "G01-P05",
        "title": "Variable en Bash",
        "statement": "Escribe la asignación correcta en Bash para guardar el texto Ana en una variable llamada nombre.",
        "acceptedAnswers": [
          "nombre=Ana",
          "nombre=\"Ana\"",
          "nombre='Ana'"
        ],
        "hints": [
          "No debe haber espacios alrededor del signo igual.",
          "Formato: variable=valor."
        ],
        "successMessage": "Correcto. Id a: Banco de piedra cerca de la fuente. Cuando encontréis el código físico, verificadlo aquí.",
        "unlockedLocation": "Banco de piedra cerca de la fuente",
        "locationCode": "G01-Q6D1L7",
        "teacherNotes": "Bash: asignación de variables."
      },
      {
        "group": "G01",
        "challengeId": "G01-P06",
        "title": "Inicio de bucle for",
        "statement": "Completa el inicio de un bucle Bash para recorrer 1 2 3: ____ echo $i; done",
        "acceptedAnswers": [
          "for i in 1 2 3; do",
          "for i in 1 2 3 do",
          "for i in 1 2 3;do"
        ],
        "hints": [
          "Empieza por for.",
          "Antes del cuerpo aparece do."
        ],
        "successMessage": "Correcto. Id a: Árboles detrás de mesa sin pintar. Cuando encontréis el código físico, verificadlo aquí.",
        "unlockedLocation": "Árboles detrás de mesa sin pintar",
        "locationCode": "G01-B9L3V6",
        "teacherNotes": "Bash: bucle for básico."
      }
    ]
  },
  "G02": {
    "routeName": "Redes y Bash · Ruta 2",
    "challenges": [
      {
        "group": "G02",
        "challengeId": "G02-P01",
        "title": "FLSM en 8 subredes",
        "statement": "Tienes la red 10.0.0.0/24 y quieres dividirla en 8 subredes iguales. ¿Qué prefijo tendrá cada subred?",
        "acceptedAnswers": [
          "/27",
          "27",
          "prefijo /27",
          "cidr /27",
          "255.255.255.224"
        ],
        "hints": [
          "8 subredes implican tomar 3 bits.",
          "/24 + 3 = /27."
        ],
        "successMessage": "Correcto. Id a: Portería sin red cerca pabellón deportivo. Cuando encontréis el código físico, verificadlo aquí.",
        "unlockedLocation": "Portería sin red cerca pabellón deportivo",
        "locationCode": "G02-F6P1A8",
        "teacherNotes": "FLSM: división en 8 subredes."
      },
      {
        "group": "G02",
        "challengeId": "G02-P02",
        "title": "Primera IP de una subred",
        "statement": "En la subred 10.0.0.96/27, ¿cuál es la primera dirección utilizable?",
        "acceptedAnswers": [
          "10.0.0.97",
          "10 0 0 97"
        ],
        "hints": [
          "La dirección .96 identifica la red.",
          "La primera utilizable es la siguiente."
        ],
        "successMessage": "Correcto. Id a: Escalera de incendios pabellón nuevo. Cuando encontréis el código físico, verificadlo aquí.",
        "unlockedLocation": "Escalera de incendios pabellón nuevo",
        "locationCode": "G02-X8R2K7",
        "teacherNotes": "Direccionamiento: primera IP utilizable en /27."
      },
      {
        "group": "G02",
        "challengeId": "G02-P03",
        "title": "Broadcast de /27",
        "statement": "En la subred 10.0.0.160/27, ¿cuál es la dirección de broadcast?",
        "acceptedAnswers": [
          "10.0.0.191",
          "10 0 0 191"
        ],
        "hints": [
          "Un /27 tiene bloques de 32 direcciones.",
          "El bloque va de .160 a .191."
        ],
        "successMessage": "Correcto. Id a: Mesa amarillo y negra. Cuando encontréis el código físico, verificadlo aquí.",
        "unlockedLocation": "Mesa amarillo y negra",
        "locationCode": "G02-M3D9Q4",
        "teacherNotes": "Direccionamiento: broadcast en /27."
      },
      {
        "group": "G02",
        "challengeId": "G02-P04",
        "title": "VLSM para 50 hosts",
        "statement": "Con VLSM, ¿qué prefijo necesitas como mínimo para una subred con 50 hosts utilizables?",
        "acceptedAnswers": [
          "/26",
          "26",
          "prefijo /26",
          "cidr /26",
          "255.255.255.192"
        ],
        "hints": [
          "2^5 - 2 = 30, no basta.",
          "2^6 - 2 = 62, sí basta."
        ],
        "successMessage": "Correcto. Id a: Salida al parking derecha. Cuando encontréis el código físico, verificadlo aquí.",
        "unlockedLocation": "Salida al parking derecha",
        "locationCode": "G02-T5V6B1",
        "teacherNotes": "VLSM: hosts necesarios y prefijo mínimo."
      },
      {
        "group": "G02",
        "challengeId": "G02-P05",
        "title": "Operador mayor que",
        "statement": "En Bash, ¿qué operador se usa en una condición numérica para comprobar “mayor que”?",
        "acceptedAnswers": [
          "-gt",
          "gt",
          "operador -gt"
        ],
        "hints": [
          "Se usa dentro de corchetes.",
          "Ejemplo: [ \"$n\" -gt 10 ]."
        ],
        "successMessage": "Correcto. Id a: Papelera marrón cerca de la escalera de incendios del pabellón viejo. Cuando encontréis el código físico, verificadlo aquí.",
        "unlockedLocation": "Papelera marrón cerca de la escalera de incendios del pabellón viejo",
        "locationCode": "G02-N9C3L7",
        "teacherNotes": "Bash: condicional numérico."
      },
      {
        "group": "G02",
        "challengeId": "G02-P06",
        "title": "Cierre de if",
        "statement": "¿Qué palabra cierra una estructura if en Bash?",
        "acceptedAnswers": [
          "fi"
        ],
        "hints": [
          "Es if escrito al revés.",
          "Se coloca al final del condicional."
        ],
        "successMessage": "Correcto. Id a: Pizarra cerca de la salida del pabellón viejo. Cuando encontréis el código físico, verificadlo aquí.",
        "unlockedLocation": "Pizarra cerca de la salida del pabellón viejo",
        "locationCode": "G02-W4K8R2",
        "teacherNotes": "Bash: cierre de condicional if."
      }
    ]
  },
  "G03": {
    "routeName": "Redes y Bash · Ruta 3",
    "challenges": [
      {
        "group": "G03",
        "challengeId": "G03-P01",
        "title": "Orden en VLSM",
        "statement": "En VLSM tienes subredes de 100, 50 y 20 hosts. ¿En qué orden conviene asignarlas?",
        "acceptedAnswers": [
          "100,50,20",
          "100 50 20",
          "100-50-20",
          "de mayor a menor",
          "mayor a menor"
        ],
        "hints": [
          "VLSM se planifica desde la subred más grande.",
          "Así se evita fragmentar el espacio de direcciones."
        ],
        "successMessage": "Correcto. Id a: Caja metálica al lado del huerto. Cuando encontréis el código físico, verificadlo aquí.",
        "unlockedLocation": "Caja metálica al lado del huerto",
        "locationCode": "G03-Q9H4M2",
        "teacherNotes": "VLSM: orden de asignación."
      },
      {
        "group": "G03",
        "challengeId": "G03-P02",
        "title": "Siguiente subred VLSM",
        "statement": "En 172.16.0.0/24 ya has asignado 172.16.0.0/25 para 100 hosts. ¿Cuál sería la siguiente red disponible para una subred de 50 hosts?",
        "acceptedAnswers": [
          "172.16.0.128/26",
          "172.16.0.128",
          "172 16 0 128/26",
          "172 16 0 128"
        ],
        "hints": [
          "Un /25 ocupa de .0 a .127.",
          "La siguiente red empieza en .128."
        ],
        "successMessage": "Correcto. Id a: Ventana de audiovisuales. Cuando encontréis el código físico, verificadlo aquí.",
        "unlockedLocation": "Ventana de audiovisuales",
        "locationCode": "G03-L3D7X5",
        "teacherNotes": "VLSM: siguiente red disponible."
      },
      {
        "group": "G03",
        "challengeId": "G03-P03",
        "title": "Broadcast de subred VLSM",
        "statement": "¿Cuál es el broadcast de la subred 172.16.0.128/26?",
        "acceptedAnswers": [
          "172.16.0.191",
          "172 16 0 191"
        ],
        "hints": [
          "Un /26 tiene 64 direcciones.",
          "El rango es .128 a .191."
        ],
        "successMessage": "Correcto. Id a: Basura gris cerca de la puerta pabellón nuevo. Cuando encontréis el código físico, verificadlo aquí.",
        "unlockedLocation": "Basura gris cerca de la puerta pabellón nuevo",
        "locationCode": "G03-C7L1X8",
        "teacherNotes": "Direccionamiento: broadcast de /26."
      },
      {
        "group": "G03",
        "challengeId": "G03-P04",
        "title": "Subredes para 14 hosts",
        "statement": "Si divides una red /24 en subredes que permitan 14 hosts utilizables cada una, ¿cuántas subredes /28 puedes obtener?",
        "acceptedAnswers": [
          "16",
          "16 subredes"
        ],
        "hints": [
          "Un /28 deja 4 bits para hosts.",
          "De /24 a /28 hay 4 bits para subred: 2^4."
        ],
        "successMessage": "Correcto. Id a: Canasta cerca del pabellón deportivo. Cuando encontréis el código físico, verificadlo aquí.",
        "unlockedLocation": "Canasta cerca del pabellón deportivo",
        "locationCode": "G03-N5R6T3",
        "teacherNotes": "FLSM: número de subredes posibles."
      },
      {
        "group": "G03",
        "challengeId": "G03-P05",
        "title": "Mostrar variable",
        "statement": "En Bash, si existe una variable llamada nombre, ¿qué comando muestra su valor por pantalla?",
        "acceptedAnswers": [
          "echo $nombre",
          "echo ${nombre}",
          "echo \"$nombre\"",
        ],
        "hints": [
          "Se usa echo.",
          "Para leer el valor se antepone $."
        ],
        "successMessage": "Correcto. Id a: Pizarra detrás del pabellón nuevo. Cuando encontréis el código físico, verificadlo aquí.",
        "unlockedLocation": "Segunda pizarra detrás del pabellón deportivo.",
        "locationCode": "G03-A6K8V1",
        "teacherNotes": "Bash: expansión de variables."
      },
      {
        "group": "G03",
        "challengeId": "G03-P06",
        "title": "Condición con else",
        "statement": "En Bash, ¿qué palabra se usa para la rama alternativa de un if cuando la condición no se cumple?",
        "acceptedAnswers": [
          "else"
        ],
        "hints": [
          "Va después de then.",
          "Antes del cierre fi."
        ],
        "successMessage": "Correcto. Id a: Valla con la iglesia. Cuando encontréis el código físico, verificadlo aquí.",
        "unlockedLocation": "Valla con la iglesia",
        "locationCode": "G03-W2B9P4",
        "teacherNotes": "Bash: rama else."
      }
    ]
  },
  "G04": {
    "routeName": "Redes y Bash · Ruta 4",
    "challenges": [
      {
        "group": "G04",
        "challengeId": "G04-P01",
        "title": "FLSM con 6 subredes",
        "statement": "Necesitas al menos 6 subredes iguales a partir de 192.168.20.0/24. ¿Qué prefijo FLSM debes usar?",
        "acceptedAnswers": [
          "/27",
          "27",
          "prefijo /27",
          "cidr /27",
          "255.255.255.224"
        ],
        "hints": [
          "Con 2 bits solo hay 4 subredes.",
          "Con 3 bits hay 8 subredes: /24 + 3."
        ],
        "successMessage": "Correcto. Id a: Pizarra entre pabellón nuevo y pabellón de educación física. Cuando encontréis el código físico, verificadlo aquí.",
        "unlockedLocation": "Pizarra entre pabellón nuevo y pabellón de educación física",
        "locationCode": "G04-A8K3D7",
        "teacherNotes": "FLSM: mínimo número de subredes."
      },
      {
        "group": "G04",
        "challengeId": "G04-P02",
        "title": "Hosts en /27",
        "statement": "¿Cuántos hosts utilizables tiene una subred /27?",
        "acceptedAnswers": [
          "30",
          "30 hosts",
          "treinta"
        ],
        "hints": [
          "Un /27 tiene 32 direcciones totales.",
          "Hay que restar red y broadcast."
        ],
        "successMessage": "Correcto. Id a: Cerca de la puerta que da al pabellón deportivo. Cuando encontréis el código físico, verificadlo aquí.",
        "unlockedLocation": "Cerca de la puerta que da al pabellón deportivo",
        "locationCode": "G04-P4X2M5",
        "teacherNotes": "FLSM: hosts utilizables por subred."
      },
      {
        "group": "G04",
        "challengeId": "G04-P03",
        "title": "Dirección de red",
        "statement": "¿Cuál es la dirección de red de la IP 192.168.20.77/27?",
        "acceptedAnswers": [
          "192.168.20.64",
          "192 168 20 64"
        ],
        "hints": [
          "Un /27 avanza en bloques de 32.",
          "El 77 cae en el bloque .64 a .95."
        ],
        "successMessage": "Correcto. Id a: Basura al lado de árbol cortado. Cuando encontréis el código físico, verificadlo aquí.",
        "unlockedLocation": "Basura al lado de árbol cortado",
        "locationCode": "G04-N2M5Q9",
        "teacherNotes": "Direccionamiento: dirección de red."
      },
      {
        "group": "G04",
        "challengeId": "G04-P04",
        "title": "Broadcast del bloque",
        "statement": "¿Cuál es el broadcast de la subred 192.168.20.64/27?",
        "acceptedAnswers": [
          "192.168.20.95",
          "192 168 20 95"
        ],
        "hints": [
          "El bloque /27 empieza en .64.",
          "Un bloque de 32 direcciones termina en .95."
        ],
        "successMessage": "Correcto. Id a: Valla del huerto. Cuando encontréis el código físico, verificadlo aquí.",
        "unlockedLocation": "Valla del huerto",
        "locationCode": "G04-V1Q6L9",
        "teacherNotes": "Direccionamiento: broadcast."
      },
      {
        "group": "G04",
        "challengeId": "G04-P05",
        "title": "Cerrar bucle Bash",
        "statement": "Completa el final del bucle Bash: for archivo in *.txt; do echo \"$archivo\"; ____",
        "acceptedAnswers": [
          "done"
        ],
        "hints": [
          "Todos los bucles terminan con esta palabra.",
          "También cierra while y until."
        ],
        "successMessage": "Correcto. Id a: Escaleras salida pequeña. Cuando encontréis el código físico, verificadlo aquí.",
        "unlockedLocation": "Escaleras salida pequeña",
        "locationCode": "G04-H7T9C3",
        "teacherNotes": "Bash: cierre de bucles."
      },
      {
        "group": "G04",
        "challengeId": "G04-P06",
        "title": "Comparar textos en Bash",
        "statement": "Dentro de [ ], ¿qué operador puedes usar en Bash para comprobar si dos cadenas son iguales?",
        "acceptedAnswers": [
          "=",
          "==",
          "igual",
          "operador =",
          "operador =="
        ],
        "hints": [
          "No es -eq, porque -eq es numérico.",
          "Para texto se usa = o ==."
        ],
        "successMessage": "Correcto. Id a: Cuadro eléctrico cerca de la mesa sin pintar. Cuando encontréis el código físico, verificadlo aquí.",
        "unlockedLocation": "Cuadro eléctrico cerca de la mesa sin pintar",
        "locationCode": "G04-R6B1X8",
        "teacherNotes": "Bash: comparación de cadenas."
      }
    ]
  },
  "G05": {
    "routeName": "Redes y Bash · Ruta 5",
    "challenges": [
      {
        "group": "G05",
        "challengeId": "G05-P01",
        "title": "VLSM para 60 hosts",
        "statement": "Con VLSM, ¿qué prefijo mínimo necesitas para una subred de 60 hosts utilizables?",
        "acceptedAnswers": [
          "/26",
          "26",
          "prefijo /26",
          "cidr /26",
          "255.255.255.192"
        ],
        "hints": [
          "2^5 - 2 = 30, no basta.",
          "2^6 - 2 = 62, sí basta."
        ],
        "successMessage": "Correcto. Id a: Detrás de las pizarras cerca de la fuente. Cuando encontréis el código físico, verificadlo aquí.",
        "unlockedLocation": "Detrás de las pizarras cerca de la fuente",
        "locationCode": "G05-L6B2R8",
        "teacherNotes": "VLSM: prefijo para 60 hosts."
      },
      {
        "group": "G05",
        "challengeId": "G05-P02",
        "title": "Siguiente red tras /26",
        "statement": "En 192.168.50.0/24, si la primera subred asignada es 192.168.50.0/26, ¿cuál es la siguiente dirección de red disponible?",
        "acceptedAnswers": [
          "192.168.50.64",
          "192.168.50.64/27",
          "192 168 50 64",
          "192 168 50 64/27"
        ],
        "hints": [
          "Un /26 tiene bloques de 64 direcciones.",
          "Después de .0/26 viene .64."
        ],
        "successMessage": "Correcto. Id a: Canasta cerca del pabellón nuevo. Cuando encontréis el código físico, verificadlo aquí.",
        "unlockedLocation": "Canasta cerca del pabellón nuevo",
        "locationCode": "G05-X3M7Q5",
        "teacherNotes": "VLSM: siguiente red disponible."
      },
      {
        "group": "G05",
        "challengeId": "G05-P03",
        "title": "Broadcast de /27",
        "statement": "¿Cuál es el broadcast de 192.168.50.64/27?",
        "acceptedAnswers": [
          "192.168.50.95",
          "192 168 50 95"
        ],
        "hints": [
          "Un /27 tiene 32 direcciones.",
          "El rango va de .64 a .95."
        ],
        "successMessage": "Correcto. Id a: Basura al salir del pabellón viejo al recreo. Cuando encontréis el código físico, verificadlo aquí.",
        "unlockedLocation": "Basura al salir del pabellón viejo al recreo",
        "locationCode": "G05-D9V4K1",
        "teacherNotes": "Direccionamiento: broadcast de /27."
      },
      {
        "group": "G05",
        "challengeId": "G05-P04",
        "title": "Primera utilizable en /28",
        "statement": "¿Cuál es la primera IP utilizable de la subred 192.168.50.96/28?",
        "acceptedAnswers": [
          "192.168.50.97",
          "192 168 50 97"
        ],
        "hints": [
          "La dirección .96 es la red.",
          "La primera utilizable es una más."
        ],
        "successMessage": "Correcto. Id a: Ventana entrada pabellón nuevo. Cuando encontréis el código físico, verificadlo aquí.",
        "unlockedLocation": "Ventana entrada pabellón nuevo",
        "locationCode": "G05-T8C1P6",
        "teacherNotes": "Direccionamiento: primera IP utilizable."
      },
      {
        "group": "G05",
        "challengeId": "G05-P05",
        "title": "Rango en bucle for",
        "statement": "En Bash, ¿cómo se escribe el rango de números del 1 al 5 para usarlo en un for?",
        "acceptedAnswers": [
          "{1..5}",
          "1..5",
          "for i in {1..5}"
        ],
        "hints": [
          "Va entre llaves.",
          "Tiene dos puntos entre el inicio y el final."
        ],
        "successMessage": "Correcto. Id a: Puerta pequeña trasera pabellón educación física. Cuando encontréis el código físico, verificadlo aquí.",
        "unlockedLocation": "Puerta pequeña trasera pabellón educación física",
        "locationCode": "G05-Q4N9A7",
        "teacherNotes": "Bash: rango con expansión de llaves."
      },
      {
        "group": "G05",
        "challengeId": "G05-P06",
        "title": "Comprobar archivo",
        "statement": "En Bash, dentro de [ ], ¿qué operador comprueba si existe un archivo regular?",
        "acceptedAnswers": [
          "-f",
          "f",
          "operador -f"
        ],
        "hints": [
          "Ejemplo: [ -f archivo.txt ].",
          "No comprueba directorios; para eso existe -d."
        ],
        "successMessage": "Correcto. Id a: Detrás mangueras cerca del huerto. Cuando encontréis el código físico, verificadlo aquí.",
        "unlockedLocation": "Detrás mangueras cerca del huerto",
        "locationCode": "G05-W8K2H5",
        "teacherNotes": "Bash: condición sobre archivos."
      }
    ]
  }
};
