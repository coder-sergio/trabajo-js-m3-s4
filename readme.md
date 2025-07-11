# Formulario Interactivo con Almacenamiento Web

Este proyecto demuestra el uso de `localStorage` y `sessionStorage` para almacenar y gestionar datos del usuario en el navegador.

##  Descripción

Aplicación web simple que:
1. Permite guardar nombre y edad del usuario en `localStorage`
2. Muestra los datos almacenados
3. Incluye un contador de interacciones por sesión usando `sessionStorage`
4. Permite limpiar todos los datos almacenados

## Tecnologías utilizadas
- HTML5
- JavaScript (Web Storage API)

##  Estructura del código

### HTML (`index.html`)
- Formulario con campos para nombre y edad
- Botones para guardar y limpiar datos
- Áreas para mostrar datos y contador de interacciones

### JavaScript (`script.js`)
#### Funciones principales:
1. **`displayData()`**  
   Muestra los datos almacenados en `localStorage` o un mensaje si no hay datos.

2. **`updateInteractionCount()`**  
   Incrementa el contador de interacciones en `sessionStorage`.

3. **`updateInteractionDisplay()`**  
   Muestra el número actual de interacciones.

#### Eventos:
- **`window.onload`**: Al cargar la página muestra datos existentes
- **`saveButton` click**: Valida y guarda los datos del formulario
- **`clearButton` click**: Limpia todo el `localStorage`

## Almacenamiento utilizado
| Tipo               | Clave                 | Descripción                          |
|--------------------|-----------------------|--------------------------------------|
| `localStorage`     | `userName`            | Nombre del usuario                   |
| `localStorage`     | `userAge`             | Edad del usuario                     |
| `sessionStorage`   | `interactionCount`    | Contador de interacciones en sesión  |

## Validaciones
- Nombre no puede estar vacío
- Edad debe ser un número válido
- Se limpian espacios en blanco (`trim()`)

##  Cómo usar
1. Abre el archivo `index.html` en tu navegador
2. Completa el formulario
3. Usa los botones para guardar/limpiar datos
4. Observa cómo persisten los datos al recargar (localStorage)
5. El contador se reinicia al cerrar la pestaña (sessionStorage)

##  Notas
- Los datos en `localStorage` persisten incluso después de cerrar el navegador
- El contador en `sessionStorage` solo dura durante la sesión actual
- Se usa `parseInt()` para asegurar que la edad sea numérica