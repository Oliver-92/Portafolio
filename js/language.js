let currentLang = 'es';

function updateContent() {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[currentLang][key]) {
            element.textContent = translations[currentLang][key];
        }
    });

    // Actualizar los alt de las imágenes
    document.querySelectorAll('[data-i18n-alt]').forEach(element => {
        const key = element.getAttribute('data-i18n-alt');
        if (translations[currentLang][key]) {
            element.alt = translations[currentLang][key];
        }
    });
}

function changeLanguage() {
    // Cambiar el idioma
    currentLang = currentLang === 'es' ? 'en' : 'es';
    
    // Actualizar el atributo lang del HTML
    document.documentElement.lang = currentLang;
    
    // Actualizar el texto del botón
    const buttonText = currentLang === 'es' ? 'ENGLISH' : 'ESPAÑOL';
    document.querySelector('.language-text').textContent = buttonText;

    // Actualizar el contenido
    updateContent();

    // Guardar la preferencia del usuario
    localStorage.setItem('preferredLanguage', currentLang);
}

// Evento para el botón de cambio de idioma
document.getElementById('languageToggle').addEventListener('click', changeLanguage);

// Inicializar el contenido al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    // Cargar el idioma preferido si existe
    const savedLanguage = localStorage.getItem('preferredLanguage');
    if (savedLanguage) {
        currentLang = savedLanguage;
        document.documentElement.lang = currentLang;
        if (currentLang === 'en') {
            document.querySelector('.language-text').textContent = 'ESPAÑOL';
        }
    }
    
    // Cargar el contenido inicial
    updateContent();
});