// datos almacenados al cargar la pagina
window.onload = () => {
    displayData();
    updateInteractionDisplay();
};

// Evento para guardar datos
document.getElementById('saveButton').addEventListener('click', () => {
    const nameInput = document.getElementById('name');
    const ageInput = document.getElementById('age');

    const name = nameInput.value.trim();
    const age = parseInt(ageInput.value.trim());

    if (name && !isNaN(age)) {
        localStorage.setItem('userName', name);
        localStorage.setItem('userAge', age);
        displayData();
    } else {
        alert("Por favor, ingresa un nombre valido y su edad.");
    }

    updateInteractionCount();
    updateInteractionDisplay();
});

// Evento para limpiar datos
document.getElementById('clearButton').addEventListener('click', () => {
    localStorage.clear();
    displayData();
});

// Mostrar datos en pantalla
function displayData() {
    const name = localStorage.getItem('userName');
    const age = localStorage.getItem('userAge');
    const output = document.getElementById('output');

    if (name && age) {
        output.textContent = `Hola ${name}, tienes ${age} años.`;
    } else {
        output.textContent = "No hay datos almacenados.";
    }
}

// Inicializar contador en Session Storage
if (!sessionStorage.getItem('interactionCount')) {
    sessionStorage.setItem('interactionCount', 0);
}

// Actualizar el contador
function updateInteractionCount() {
    let count = parseInt(sessionStorage.getItem('interactionCount'));
    count++;
    sessionStorage.setItem('interactionCount', count);
}

// Mostrar el contador
function updateInteractionDisplay() {
    const count = sessionStorage.getItem('interactionCount');
    document.getElementById('interactionCount').textContent = 
        `Interacciones en esta sesion: ${count}`;
}