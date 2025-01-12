// Function to toggle between light and dark mode
const toggleButton = document.getElementById('toggle-theme');
const body = document.body;

// Check if dark or light mode is saved in localStorage
if (localStorage.getItem('theme') === 'light') {
    body.setAttribute('data-theme', 'light');
    toggleButton.textContent = 'DARK MODE';
} else {
    body.setAttribute('data-theme', 'dark');
    toggleButton.textContent = 'LIGHT MODE';
}

// Add an event to the button to switch between modes
toggleButton.addEventListener('click', () => {
    if (body.getAttribute('data-theme') === 'dark') {
        body.setAttribute('data-theme', 'light');
        toggleButton.textContent = 'DARK MODE';
        localStorage.setItem('theme', 'light');
    } else {
        body.setAttribute('data-theme', 'dark');
        toggleButton.textContent = 'LIGHT MODE';
        localStorage.setItem('theme', 'dark');
    }
});