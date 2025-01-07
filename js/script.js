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


// Generate subtitle with Typewriter
const subtitle = document.getElementById('subtitle');

// Texts for Typewriter in both languages
const texts = {
    es: [
        '< Desarrollador Web /> && < Analista de Datos />',
        'Apasionado por el aprendizaje continuo'
    ],
    en: [
        '< Web Developer /> && < Data Analyst />',
        'Passionate about continuous learning'
    ]
};

// Function to get the current language from <html lang="">
function getLanguage() {
    return document.documentElement.lang || 'es'; // Default to 'es' if no lang attribute
}

// Function to start the Typewriter
function startTypewriter() {
    const currentLanguage = getLanguage();
    const languageTexts = texts[currentLanguage] || texts['es']; // Fallback to Spanish

    // Clear the existing Typewriter instance
    if (subtitle.typewriterInstance) {
        subtitle.typewriterInstance.stop();
    }

    // Create a new Typewriter instance
    const typewriter = new Typewriter(subtitle, {
        loop: true,
        delay: 75,
    });

    // Add texts to the Typewriter
    languageTexts.forEach((text, index) => {
        typewriter.typeString(text).pauseFor(200);
        if (index < languageTexts.length - 1) {
            typewriter.deleteAll().pauseFor(200);
        }
    });

    typewriter.start();
    subtitle.typewriterInstance = typewriter; // Store the instance for later control
}

// Start Typewriter with the current language
startTypewriter();

// Optional: Detect language changes dynamically
const observer = new MutationObserver(() => {
    startTypewriter(); // Restart Typewriter when lang attribute changes
});
observer.observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
