const toggleButton = document.querySelector('.nav_toggle');
const navLinks = document.querySelector('.nav_links');
const navLinksItems = document.querySelectorAll('.nav_links li');

toggleButton.addEventListener('click', () => {
    navLinks.classList.toggle('show'); // Agrega o quita la clase 'show'
});

// Ocultar los enlaces después de hacer clic en uno de ellos
navLinksItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('show'); // Oculta los enlaces
    });
});
