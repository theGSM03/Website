document.addEventListener("DOMContentLoaded", function() {
    const images = [
        { src: 'images/PerroReal.jpeg', isReal: true },
        { src: 'images/Perro1.jpg', isReal: false },
        { src: 'images/Perro2.jpg', isReal: false },
        { src: 'images/Perro3.jpg', isReal: false }
    ];

    // Desordenar las imágenes
    images.sort(() => Math.random() - 0.5);

    // Obtener el área del juego
    const gameArea = document.getElementById('game-area');

    // Crear elementos de imagen y agregarlos al área del juego
    images.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = image.src;
        imgElement.classList.add('game-image');
        imgElement.addEventListener('click', function () {
            if (image.isReal) {
                alert('¡Correcto! Esta es la imagen real.');
            } else {
                alert('Incorrecto. Esta es una imagen generada por IA.');
            }
        });
        gameArea.appendChild(imgElement);
    });
});
