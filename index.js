// Selecciona los elementos necesarios
const carousel = document.querySelector('.carousel');
const slides = document.querySelectorAll('.carousel-slide');
const prevButton = document.querySelector('.carousel-btn.prev');
const nextButton = document.querySelector('.carousel-btn.next');

// Índice actual del carrusel
let currentIndex = 0;

// Función para actualizar la posición del carrusel
function updateCarousel() {
    const offset = -currentIndex * 100;
    carousel.style.transform = `translateX(${offset}%)`;
}

// Evento para el botón "Siguiente"
nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length; // Avanza y reinicia al llegar al final
    updateCarousel();
});

// Evento para el botón "Anterior"
prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length; // Retrocede y reinicia al llegar al inicio
    updateCarousel();
});