const toggleButton = document.getElementById('toggle-theme');
const body = document.body;

// Verificar si el modo oscuro o claro está guardado en localStorage
if (localStorage.getItem('theme') === 'light') {
    body.setAttribute('data-theme', 'light');
    toggleButton.textContent = 'Modo Oscuro';  // Cambiar texto del botón
} else {
    body.setAttribute('data-theme', 'dark');  // Modo oscuro por defecto
    toggleButton.textContent = 'Modo Claro';  // Cambiar texto del botón
}

// Agregar un evento al botón para alternar entre los modos
toggleButton.addEventListener('click', () => {
    if (body.getAttribute('data-theme') === 'dark') {
        body.setAttribute('data-theme', 'light');
        toggleButton.textContent = 'Modo Oscuro';  // Cambiar texto del botón
        localStorage.setItem('theme', 'light');  // Guardar la preferencia
    } else {
        body.setAttribute('data-theme', 'dark');
        toggleButton.textContent = 'Modo Claro';  // Cambiar texto del botón
        localStorage.setItem('theme', 'dark');  // Guardar la preferencia
    }
});
