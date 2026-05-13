# Clave del profesor - Redes, VLSM/FLSM y Bash

No subas este archivo a una versión pública si quieres ocultar soluciones, ubicaciones y códigos físicos al alumnado.

## Tabla 1: Grupos

| Grupo | Número de pruebas | Ruta de ubicaciones |
|---|---:|---|
| G01 | 6 | Debajo de la escala de incendios pabellón viejo → Papelera de plástico detrás pabellón nuevo → Debajo de primera pizarra frente a las pistas de fútbol → Mesa ajedrez → Banco de piedra cerca de la fuente → Árboles detrás de mesa sin pintar |
| G02 | 6 | Portería sin red cerca pabellón deportivo → Escalera de incendios pabellón nuevo → Mesa amarillo y negra → Salida al parking derecha → Papelera marrón cerca de la escalera de incendios pabellón viejo → Pizarra cerca de la salida del pabellón viejo |
| G03 | 6 | Caja metálica al lado del huerto → Ventana de audiovisuales → Basura gris cerca de la puerta pabellón nuevo → Canasta cerca del pabellón deportivo → Pizarra detrás del pabellón nuevo → Valla con la iglesia |
| G04 | 6 | Pizarra entre pabellón nuevo y pabellón de educación física → Cerca de la puerta que da al pabellón deportivo → Basura al lado de árbol cortado → Valla del huerto → Escaleras salida pequeña → Cuadro eléctrico mesas sin pintar |
| G05 | 6 | Detrás pizarras cerca de la fuente → Canasta cerca del pabellón nuevo → Basura al salir del pabellón viejo al recreo → Ventana entrada pabellón nuevo → Puerta pequeña trasera pabellón educación física → Detrás mangueras cerca del huerto |

## Tabla 2: Pruebas y soluciones

| Grupo | Prueba | Pregunta resumida | Respuestas aceptadas | Ubicación desbloqueada | Código de ubicación | Notas del profesor |
|---|---|---|---|---|---|---|
| G01 | G01-P01 · Nueva máscara FLSM | Tienes la red 192.168.10.0/24 y quieres dividirla en 4 subredes iguales con FLSM. ¿Qué prefijo CIDR tendrá cada subred? | /26; 26; prefijo /26; cidr /26; 255.255.255.192 | Debajo de la escala de incendios pabellón viejo | G01-K7M2Q9 | FLSM: /24 dividido en 4 subredes iguales. |
| G01 | G01-P02 · Primera dirección utilizable | En la subred 192.168.10.64/26, ¿cuál es la primera dirección IP utilizable para un host? | 192.168.10.65; 192 168 10 65 | Papelera de plástico detrás pabellón nuevo | G01-H8P4W2 | Direccionamiento: primera IP utilizable. |
| G01 | G01-P03 · Dirección de broadcast | En la subred 192.168.10.128/26, ¿cuál es la dirección de broadcast? | 192.168.10.191; 192 168 10 191 | Debajo de primera pizarra frente a las pistas de fútbol | G01-R4X8T1 | Direccionamiento: broadcast de una subred /26. |
| G01 | G01-P04 · VLSM para 30 hosts | Con VLSM, ¿cuál es el prefijo más pequeño que permite al menos 30 hosts utilizables? | /27; 27; prefijo /27; cidr /27; 255.255.255.224 | Mesa ajedrez | G01-Z2C7N5 | VLSM: cálculo de prefijo mínimo. |
| G01 | G01-P05 · Variable en Bash | Escribe la asignación correcta en Bash para guardar el texto Ana en una variable llamada nombre. | nombre=Ana; nombre="Ana"; nombre='Ana' | Banco de piedra cerca de la fuente | G01-Q6D1L7 | Bash: asignación de variables. |
| G01 | G01-P06 · Inicio de bucle for | Completa el inicio de un bucle Bash para recorrer 1 2 3: ____ echo $i; done | for i in 1 2 3; do; for i in 1 2 3 do; for i in 1 2 3;do | Árboles detrás de mesa sin pintar | G01-B9L3V6 | Bash: bucle for básico. |
| G02 | G02-P01 · FLSM en 8 subredes | Tienes la red 10.0.0.0/24 y quieres dividirla en 8 subredes iguales. ¿Qué prefijo tendrá cada subred? | /27; 27; prefijo /27; cidr /27; 255.255.255.224 | Portería sin red cerca pabellón deportivo | G02-F6P1A8 | FLSM: división en 8 subredes. |
| G02 | G02-P02 · Primera IP de una subred | En la subred 10.0.0.96/27, ¿cuál es la primera dirección utilizable? | 10.0.0.97; 10 0 0 97 | Escalera de incendios pabellón nuevo | G02-X8R2K7 | Direccionamiento: primera IP utilizable en /27. |
| G02 | G02-P03 · Broadcast de /27 | En la subred 10.0.0.160/27, ¿cuál es la dirección de broadcast? | 10.0.0.191; 10 0 0 191 | Mesa amarillo y negra | G02-M3D9Q4 | Direccionamiento: broadcast en /27. |
| G02 | G02-P04 · VLSM para 50 hosts | Con VLSM, ¿qué prefijo necesitas como mínimo para una subred con 50 hosts utilizables? | /26; 26; prefijo /26; cidr /26; 255.255.255.192 | Salida al parking derecha | G02-T5V6B1 | VLSM: hosts necesarios y prefijo mínimo. |
| G02 | G02-P05 · Operador mayor que | En Bash, ¿qué operador se usa en una condición numérica para comprobar “mayor que”? | -gt; gt; operador -gt | Papelera marrón cerca de la escalera de incendios pabellón viejo | G02-N9C3L7 | Bash: condicional numérico. |
| G02 | G02-P06 · Cierre de if | ¿Qué palabra cierra una estructura if en Bash? | fi | Pizarra cerca de la salida del pabellón viejo | G02-W4K8R2 | Bash: cierre de condicional if. |
| G03 | G03-P01 · Orden en VLSM | En VLSM tienes subredes de 100, 50 y 20 hosts. ¿En qué orden conviene asignarlas? | 100,50,20; 100 50 20; 100-50-20; de mayor a menor; mayor a menor | Caja metálica al lado del huerto | G03-Q9H4M2 | VLSM: orden de asignación. |
| G03 | G03-P02 · Siguiente subred VLSM | En 172.16.0.0/24 ya has asignado 172.16.0.0/25 para 100 hosts. ¿Cuál sería la siguiente red disponible para una subred de 50 hosts? | 172.16.0.128/26; 172.16.0.128; 172 16 0 128/26; 172 16 0 128 | Ventana de audiovisuales | G03-L3D7X5 | VLSM: siguiente red disponible. |
| G03 | G03-P03 · Broadcast de subred VLSM | ¿Cuál es el broadcast de la subred 172.16.0.128/26? | 172.16.0.191; 172 16 0 191 | Basura gris cerca de la puerta pabellón nuevo | G03-C7L1X8 | Direccionamiento: broadcast de /26. |
| G03 | G03-P04 · Subredes para 14 hosts | Si divides una red /24 en subredes que permitan 14 hosts utilizables cada una, ¿cuántas subredes /28 puedes obtener? | 16; 16 subredes | Canasta cerca del pabellón deportivo | G03-N5R6T3 | FLSM: número de subredes posibles. |
| G03 | G03-P05 · Mostrar variable | En Bash, si existe una variable llamada nombre, ¿qué comando muestra su valor por pantalla? | echo $nombre; echo ${nombre}; echo "$nombre" | Pizarra detrás del pabellón nuevo | G03-A6K8V1 | Bash: expansión de variables. |
| G03 | G03-P06 · Condición con else | En Bash, ¿qué palabra se usa para la rama alternativa de un if cuando la condición no se cumple? | else | Valla con la iglesia | G03-W2B9P4 | Bash: rama else. |
| G04 | G04-P01 · FLSM con 6 subredes | Necesitas al menos 6 subredes iguales a partir de 192.168.20.0/24. ¿Qué prefijo FLSM debes usar? | /27; 27; prefijo /27; cidr /27; 255.255.255.224 | Pizarra entre pabellón nuevo y pabellón de educación física | G04-A8K3D7 | FLSM: mínimo número de subredes. |
| G04 | G04-P02 · Hosts en /27 | ¿Cuántos hosts utilizables tiene una subred /27? | 30; 30 hosts; treinta | Cerca de la puerta que da al pabellón deportivo | G04-P4X2M5 | FLSM: hosts utilizables por subred. |
| G04 | G04-P03 · Dirección de red | ¿Cuál es la dirección de red de la IP 192.168.20.77/27? | 192.168.20.64; 192 168 20 64 | Basura al lado de árbol cortado | G04-N2M5Q9 | Direccionamiento: dirección de red. |
| G04 | G04-P04 · Broadcast del bloque | ¿Cuál es el broadcast de la subred 192.168.20.64/27? | 192.168.20.95; 192 168 20 95 | Valla del huerto | G04-V1Q6L9 | Direccionamiento: broadcast. |
| G04 | G04-P05 · Cerrar bucle Bash | Completa el final del bucle Bash: for archivo in *.txt; do echo "$archivo"; ____ | done | Escaleras salida pequeña | G04-H7T9C3 | Bash: cierre de bucles. |
| G04 | G04-P06 · Comparar textos en Bash | Dentro de [ ], ¿qué operador puedes usar en Bash para comprobar si dos cadenas son iguales? | =; ==; igual; operador =; operador == | Cuadro eléctrico mesas sin pintar | G04-R6B1X8 | Bash: comparación de cadenas. |
| G05 | G05-P01 · VLSM para 60 hosts | Con VLSM, ¿qué prefijo mínimo necesitas para una subred de 60 hosts utilizables? | /26; 26; prefijo /26; cidr /26; 255.255.255.192 | Detrás pizarras cerca de la fuente | G05-L6B2R8 | VLSM: prefijo para 60 hosts. |
| G05 | G05-P02 · Siguiente red tras /26 | En 192.168.50.0/24, si la primera subred asignada es 192.168.50.0/26, ¿cuál es la siguiente dirección de red disponible? | 192.168.50.64; 192.168.50.64/27; 192 168 50 64; 192 168 50 64/27 | Canasta cerca del pabellón nuevo | G05-X3M7Q5 | VLSM: siguiente red disponible. |
| G05 | G05-P03 · Broadcast de /27 | ¿Cuál es el broadcast de 192.168.50.64/27? | 192.168.50.95; 192 168 50 95 | Basura al salir del pabellón viejo al recreo | G05-D9V4K1 | Direccionamiento: broadcast de /27. |
| G05 | G05-P04 · Primera utilizable en /28 | ¿Cuál es la primera IP utilizable de la subred 192.168.50.96/28? | 192.168.50.97; 192 168 50 97 | Ventana entrada pabellón nuevo | G05-T8C1P6 | Direccionamiento: primera IP utilizable. |
| G05 | G05-P05 · Rango en bucle for | En Bash, ¿cómo se escribe el rango de números del 1 al 5 para usarlo en un for? | {1..5}; 1..5; for i in {1..5} | Puerta pequeña trasera pabellón educación física | G05-Q4N9A7 | Bash: rango con expansión de llaves. |
| G05 | G05-P06 · Comprobar archivo | En Bash, dentro de [ ], ¿qué operador comprueba si existe un archivo regular? | -f; f; operador -f | Detrás mangueras cerca del huerto | G05-W8K2H5 | Bash: condición sobre archivos. |

## Tabla 3: Ubicaciones y códigos

| Código | Ubicación | Grupo | Prueba asociada | Texto que verá el alumnado al acertar |
|---|---|---|---|---|
| G01-K7M2Q9 | Debajo de la escala de incendios pabellón viejo | G01 | G01-P01 | Correcto. Id a: Debajo de la escala de incendios pabellón viejo. Cuando encontréis el código físico, verificadlo aquí. |
| G01-H8P4W2 | Papelera de plástico detrás pabellón nuevo | G01 | G01-P02 | Correcto. Id a: Papelera de plástico detrás pabellón nuevo. Cuando encontréis el código físico, verificadlo aquí. |
| G01-R4X8T1 | Debajo de primera pizarra frente a las pistas de fútbol | G01 | G01-P03 | Correcto. Id a: Debajo de primera pizarra frente a las pistas de fútbol. Cuando encontréis el código físico, verificadlo aquí. |
| G01-Z2C7N5 | Mesa ajedrez | G01 | G01-P04 | Correcto. Id a: Mesa ajedrez. Cuando encontréis el código físico, verificadlo aquí. |
| G01-Q6D1L7 | Banco de piedra cerca de la fuente | G01 | G01-P05 | Correcto. Id a: Banco de piedra cerca de la fuente. Cuando encontréis el código físico, verificadlo aquí. |
| G01-B9L3V6 | Árboles detrás de mesa sin pintar | G01 | G01-P06 | Correcto. Id a: Árboles detrás de mesa sin pintar. Cuando encontréis el código físico, verificadlo aquí. |
| G02-F6P1A8 | Portería sin red cerca pabellón deportivo | G02 | G02-P01 | Correcto. Id a: Portería sin red cerca pabellón deportivo. Cuando encontréis el código físico, verificadlo aquí. |
| G02-X8R2K7 | Escalera de incendios pabellón nuevo | G02 | G02-P02 | Correcto. Id a: Escalera de incendios pabellón nuevo. Cuando encontréis el código físico, verificadlo aquí. |
| G02-M3D9Q4 | Mesa amarillo y negra | G02 | G02-P03 | Correcto. Id a: Mesa amarillo y negra. Cuando encontréis el código físico, verificadlo aquí. |
| G02-T5V6B1 | Salida al parking derecha | G02 | G02-P04 | Correcto. Id a: Salida al parking derecha. Cuando encontréis el código físico, verificadlo aquí. |
| G02-N9C3L7 | Papelera marrón cerca de la escalera de incendios pabellón viejo | G02 | G02-P05 | Correcto. Id a: Papelera marrón cerca de la escalera de incendios pabellón viejo. Cuando encontréis el código físico, verificadlo aquí. |
| G02-W4K8R2 | Pizarra cerca de la salida del pabellón viejo | G02 | G02-P06 | Correcto. Id a: Pizarra cerca de la salida del pabellón viejo. Cuando encontréis el código físico, verificadlo aquí. |
| G03-Q9H4M2 | Caja metálica al lado del huerto | G03 | G03-P01 | Correcto. Id a: Caja metálica al lado del huerto. Cuando encontréis el código físico, verificadlo aquí. |
| G03-L3D7X5 | Ventana de audiovisuales | G03 | G03-P02 | Correcto. Id a: Ventana de audiovisuales. Cuando encontréis el código físico, verificadlo aquí. |
| G03-C7L1X8 | Basura gris cerca de la puerta pabellón nuevo | G03 | G03-P03 | Correcto. Id a: Basura gris cerca de la puerta pabellón nuevo. Cuando encontréis el código físico, verificadlo aquí. |
| G03-N5R6T3 | Canasta cerca del pabellón deportivo | G03 | G03-P04 | Correcto. Id a: Canasta cerca del pabellón deportivo. Cuando encontréis el código físico, verificadlo aquí. |
| G03-A6K8V1 | Pizarra detrás del pabellón nuevo | G03 | G03-P05 | Correcto. Id a: Pizarra detrás del pabellón nuevo. Cuando encontréis el código físico, verificadlo aquí. |
| G03-W2B9P4 | Valla con la iglesia | G03 | G03-P06 | Correcto. Id a: Valla con la iglesia. Cuando encontréis el código físico, verificadlo aquí. |
| G04-A8K3D7 | Pizarra entre pabellón nuevo y pabellón de educación física | G04 | G04-P01 | Correcto. Id a: Pizarra entre pabellón nuevo y pabellón de educación física. Cuando encontréis el código físico, verificadlo aquí. |
| G04-P4X2M5 | Cerca de la puerta que da al pabellón deportivo | G04 | G04-P02 | Correcto. Id a: Cerca de la puerta que da al pabellón deportivo. Cuando encontréis el código físico, verificadlo aquí. |
| G04-N2M5Q9 | Basura al lado de árbol cortado | G04 | G04-P03 | Correcto. Id a: Basura al lado de árbol cortado. Cuando encontréis el código físico, verificadlo aquí. |
| G04-V1Q6L9 | Valla del huerto | G04 | G04-P04 | Correcto. Id a: Valla del huerto. Cuando encontréis el código físico, verificadlo aquí. |
| G04-H7T9C3 | Escaleras salida pequeña | G04 | G04-P05 | Correcto. Id a: Escaleras salida pequeña. Cuando encontréis el código físico, verificadlo aquí. |
| G04-R6B1X8 | Cuadro eléctrico mesas sin pintar | G04 | G04-P06 | Correcto. Id a: Cuadro eléctrico mesas sin pintar. Cuando encontréis el código físico, verificadlo aquí. |
| G05-L6B2R8 | Detrás pizarras cerca de la fuente | G05 | G05-P01 | Correcto. Id a: Detrás pizarras cerca de la fuente. Cuando encontréis el código físico, verificadlo aquí. |
| G05-X3M7Q5 | Canasta cerca del pabellón nuevo | G05 | G05-P02 | Correcto. Id a: Canasta cerca del pabellón nuevo. Cuando encontréis el código físico, verificadlo aquí. |
| G05-D9V4K1 | Basura al salir del pabellón viejo al recreo | G05 | G05-P03 | Correcto. Id a: Basura al salir del pabellón viejo al recreo. Cuando encontréis el código físico, verificadlo aquí. |
| G05-T8C1P6 | Ventana entrada pabellón nuevo | G05 | G05-P04 | Correcto. Id a: Ventana entrada pabellón nuevo. Cuando encontréis el código físico, verificadlo aquí. |
| G05-Q4N9A7 | Puerta pequeña trasera pabellón educación física | G05 | G05-P05 | Correcto. Id a: Puerta pequeña trasera pabellón educación física. Cuando encontréis el código físico, verificadlo aquí. |
| G05-W8K2H5 | Detrás mangueras cerca del huerto | G05 | G05-P06 | Correcto. Id a: Detrás mangueras cerca del huerto. Cuando encontréis el código físico, verificadlo aquí. |
