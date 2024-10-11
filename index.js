document.getElementById('developer-btn').addEventListener('click', function() {
    document.getElementById('developer').style.display = 'flex';  // Muestra la sección de Desarrollador Web
    document.getElementById('data-analyst').style.display = 'none';  // Oculta la sección de Analista de Datos
});

document.getElementById('data-analyst-btn').addEventListener('click', function() {
    document.getElementById('developer').style.display = 'none';  // Oculta la sección de Desarrollador Web
    document.getElementById('data-analyst').style.display = 'flex';  // Muestra la sección de Analista de Datos
});
