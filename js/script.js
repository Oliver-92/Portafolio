// Generate subtitle with Typewriter
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


// Navbar opaque when scrolling
window.addEventListener('scroll', function () {
    const navbar = document.getElementById('navbar');
    const scrollPosition = window.scrollY;

    if (scrollPosition > 50) {
        navbar.classList.add('navbar-opaque');
        navbar.classList.remove('navbar-transparent');
    } else {
        navbar.classList.add('navbar-transparent');
        navbar.classList.remove('navbar-opaque');
    }
});


// Switch between sections
document.getElementById('developer-btn').addEventListener('click', function () {
    document.getElementById('developer').style.display = 'flex';
    document.getElementById('data-analyst').style.display = 'none';
});

document.getElementById('data-analyst-btn').addEventListener('click', function () {
    document.getElementById('developer').style.display = 'none';
    document.getElementById('data-analyst').style.display = 'flex';
});
