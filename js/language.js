// Function to change the language of the page

let currentLang = 'es';

function updateContent() {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[currentLang][key]) {
            element.textContent = translations[currentLang][key];
        }
    });

    // Update image alts
    document.querySelectorAll('[data-i18n-alt]').forEach(element => {
        const key = element.getAttribute('data-i18n-alt');
        if (translations[currentLang][key]) {
            element.alt = translations[currentLang][key];
        }
    });
}

function changeLanguage() {
    currentLang = currentLang === 'es' ? 'en' : 'es';
    document.documentElement.lang = currentLang;
    const buttonText = currentLang === 'es' ? 'ENGLISH' : 'ESPAÑOL';
    document.querySelector('.language-text').textContent = buttonText;
    updateContent();
    localStorage.setItem('preferredLanguage', currentLang);
}

// Event for language change button
document.getElementById('languageToggle').addEventListener('click', changeLanguage);

// Initialize content on page load
document.addEventListener('DOMContentLoaded', () => {
    // Load preferred language if it exists
    const savedLanguage = localStorage.getItem('preferredLanguage');
    if (savedLanguage) {
        currentLang = savedLanguage;
        document.documentElement.lang = currentLang;
        if (currentLang === 'en') {
            document.querySelector('.language-text').textContent = 'ESPAÑOL';
        }
    }

    // Load initial content
    updateContent();
});