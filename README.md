# Rutas de pistas - Redes y Bash

Web estática para una actividad por grupos. Los alumnos introducen su código de grupo, resuelven pruebas de forma secuencial y desbloquean una ubicación física. Al llegar a esa ubicación encuentran un código físico que deben verificar en la web.

## Grupos disponibles

- G01
- G02
- G03
- G04
- G05

Cada grupo tiene 6 pruebas. Inicialmente solo aparece la primera. Cuando se resuelve una prueba, se desbloquea la siguiente. Las pruebas posteriores no se muestran hasta que corresponda.


## Desbloqueo secuencial

La actividad está configurada para que el alumnado no pueda abrir todas las pruebas desde el principio.

Funcionamiento:

1. Al entrar con G01, G02, G03, G04 o G05, solo aparece la prueba 1.
2. Al resolver la prueba 1, aparece la prueba 2.
3. Al resolver la prueba 2, aparece la prueba 3.
4. El proceso continúa hasta la prueba 6.

La verificación del código físico encontrado en la ubicación no bloquea la aparición de la siguiente pregunta. La siguiente pregunta se desbloquea al resolver correctamente la pregunta anterior.

## Contenidos de las pruebas

Las preguntas se han cambiado a:

- FLSM: división de redes en subredes iguales.
- VLSM: elección de prefijos según número de hosts.
- Direccionamiento IPv4: primera IP utilizable, dirección de red y broadcast.
- Bash: variables, bucles `for`, condicionales `if`, operadores y pruebas básicas.

## Cómo probar localmente

Abre `index.html` en el navegador. También puedes lanzar un servidor local desde la carpeta del proyecto:

```bash
python3 -m http.server 8000
```

Después entra en:

```text
http://localhost:8000
```

## Cómo editar preguntas

Edita `challenges.js`.

Cada prueba tiene esta estructura:

```js
{
  group: "G01",
  challengeId: "G01-P01",
  title: "Nueva máscara FLSM",
  statement: "Pregunta que verá el alumnado",
  acceptedAnswers: ["/26", "26", "255.255.255.192"],
  hints: ["Pista 1", "Pista 2"],
  successMessage: "Correcto. Id a: ...",
  unlockedLocation: "Ubicación física",
  locationCode: "G01-K7M2Q9",
  teacherNotes: "Nota interna"
}
```

## Cómo editar respuestas aceptadas

Añade variantes en `acceptedAnswers`.

La corrección normaliza:

- mayúsculas y minúsculas;
- tildes;
- espacios múltiples;
- parte de la puntuación;
- los signos `<` y `>`.

Para direcciones IP, conviene incluir la dirección con puntos y también una variante con espacios si quieres máxima tolerancia.

Ejemplo:

```js
acceptedAnswers: ["192.168.10.65", "192 168 10 65"]
```

## Cómo editar ubicaciones y códigos físicos

En cada prueba cambia:

```js
unlockedLocation: "Mesa ajedrez",
locationCode: "G01-Z2C7N5",
successMessage: "Correcto. Id a: Mesa ajedrez. Cuando encontréis el código físico, verificadlo aquí."
```

El código físico debe coincidir exactamente con el cartel que pongas en la ubicación.

## Modo profesor

Escribe `PROFESOR` como código de grupo.

El modo profesor muestra:

- grupos;
- preguntas;
- respuestas aceptadas;
- ubicaciones;
- códigos físicos;
- notas del profesor;
- herramienta para probar normalización.

## Archivo `teacher-key.md`

Contiene la clave completa de la actividad.

No subas `teacher-key.md` a GitHub Pages si quieres ocultar soluciones, ubicaciones y códigos físicos.

## Despliegue en GitHub Pages

1. Sube estos archivos al repositorio.
2. En GitHub, entra en `Settings`.
3. Abre `Pages`.
4. En `Build and deployment`, selecciona la rama principal.
5. Guarda la configuración.
6. Abre la URL pública que genera GitHub Pages.

## Limitación de seguridad

Esta app es estática. Todo lo que hay en `challenges.js` puede inspeccionarse desde el navegador.

Es válida para una actividad educativa y cooperativa. No es válida como evaluación segura si el alumnado puede inspeccionar el código fuente.
