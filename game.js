document.addEventListener("DOMContentLoaded", function () {
    // Define the images
    const images = [
        { src: 'images/PerroReal.jpeg', isReal: true },
        { src: 'images/Perro1.jpg', isReal: false },
        { src: 'images/Perro2.jpg', isReal: false },
        { src: 'images/Perro3.jpg', isReal: false }
    ];

    // Shuffle the images array
    images.sort(() => Math.random() - 0.5);

    // Get the game area
    const gameArea = document.getElementById('game-area');

    // Create image elements and append to game area
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
