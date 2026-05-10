# Rutas de pistas HTML/CSS

Web estática para una actividad por grupos de 1º de Bachillerato. Cada grupo entra con `G01`, `G02`, `G03`, `G04` o `G05`, resuelve pruebas básicas de HTML/CSS, desbloquea una ubicación física y verifica el código encontrado allí.

## Probar la web

Abre `index.html` con doble clic. La aplicación funciona sin servidor y guarda el progreso en `localStorage`.

También puedes usar un servidor local:

```bash
python -m http.server 8000
```

Después abre `http://localhost:8000`.

## Desplegar en GitHub Pages

1. Sube `index.html`, `style.css`, `app.js` y `challenges.js` a la raíz del repositorio.
2. En GitHub, entra en `Settings` > `Pages`.
3. Elige `Deploy from a branch`.
4. Selecciona la rama principal y la carpeta raíz.
5. Guarda y espera a que GitHub publique la URL.

No subas `teacher-key.md` si quieres ocultar la clave al alumnado.

## Editar preguntas

Las pruebas están en `challenges.js`. Cada prueba tiene esta forma:

```js
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
}
```

Mantén `challengeId` único y conserva 6 pruebas por grupo si quieres que el resumen final siga el formato previsto.

## Editar respuestas aceptadas

Añade variantes en `acceptedAnswers`. La corrección ignora mayúsculas/minúsculas, tildes, espacios múltiples y varios signos no esenciales.

Ejemplos:

- Para una etiqueta de párrafo: `["p", "<p>", "etiqueta p"]`
- Para una propiedad CSS: `["color", "color:", "propiedad color"]`
- Para una clase CSS: `[".caja", "punto caja", "selector .caja"]`

## Editar ubicaciones y códigos

Cambia `unlockedLocation`, `locationCode` y el texto de `successMessage` en cada prueba. La ubicación debe aparecer dentro del mensaje para que el texto visto por el alumnado sea claro.

Ejemplo:

```js
successMessage: "Correcto. Id a: Mesa ajedrez. Cuando encontréis el código físico, verificadlo aquí.",
unlockedLocation: "Mesa ajedrez",
locationCode: "G01-Z2C7N5"
```

Reparte las ubicaciones por grupo para evitar que todos vayan al mismo sitio a la vez. El resumen final aparece cuando el grupo ha resuelto todas las preguntas y ha verificado todos sus códigos.

## Modo profesor

Escribe `PROFESOR` como código de grupo. El modo profesor muestra:

- Grupo.
- Prueba.
- Pregunta.
- Respuestas aceptadas.
- Ubicación desbloqueada.
- Código de ubicación.
- Notas del profesor.
- Herramienta para generar ubicaciones y códigos de ejemplo.
- Herramienta para probar la normalización de respuestas.
- Botón para borrar `localStorage`.

## Progreso guardado

La web guarda en `localStorage`:

- Código de grupo.
- Pruebas desbloqueadas.
- Pruebas resueltas.
- Códigos verificados.
- Pistas usadas.
- Ubicaciones desbloqueadas.
- Fecha/hora de inicio.
- Fecha/hora de finalización.

Si se recarga la página, el navegador recuerda el progreso del grupo.

## Seguridad

Una web estática no puede ocultar completamente preguntas, respuestas, ubicaciones ni rutas si el alumnado inspecciona el código fuente.

Esta web es adecuada para una actividad educativa, no para una evaluación segura. Para una evaluación con seguridad real haría falta un backend con validación en servidor.

## Consejos de uso

- Prueba los cinco grupos antes de la actividad.
- Cambia las ubicaciones inventadas por lugares reales del centro.
- Conserva `teacher-key.md` en privado.
- Explica que las pistas usadas aparecen en el código final.
- Pide a cada grupo que copie el resumen final o exporte el JSON al terminar.
