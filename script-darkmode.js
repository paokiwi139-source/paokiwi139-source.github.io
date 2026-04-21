const toggleDarkMode = () => {
    document.body.classList.toggle('dark-mode');
};

document.addEventListener('DOMContentLoaded', () => {
    const button = document.createElement('button');
    button.innerText = 'Toggle Dark Mode';
    button.addEventListener('click', toggleDarkMode);
    document.body.appendChild(button);
});