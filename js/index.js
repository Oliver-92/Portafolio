const subtitle = document.getElementById('subtitle');

const typewriter = new Typewriter(subtitle, {
    loop: true,
    delay: 75,
});

typewriter
    .typeString('< Desarrollador Web /> && < Analista de Datos />')
    .pauseFor(200)
    .deleteAll()
    .typeString('Apasionado por el aprendizaje continuo')
    .pauseFor(200)
    .start();


// Función para alternar entre secciones
document.getElementById('developer-btn').addEventListener('click', function () {
    document.getElementById('developer').style.display = 'flex';  // Muestra la sección de Desarrollador Web
    document.getElementById('data-analyst').style.display = 'none';  // Oculta la sección de Analista de Datos
});

document.getElementById('data-analyst-btn').addEventListener('click', function () {
    document.getElementById('developer').style.display = 'none';  // Oculta la sección de Desarrollador Web
    document.getElementById('data-analyst').style.display = 'flex';  // Muestra la sección de Analista de Datos
});
