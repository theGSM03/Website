document.addEventListener("DOMContentLoaded", function() {
    const gameArea = document.getElementById("game-area");
    
    // Ejemplo de imágenes (puedes sustituirlas por tus propias imágenes)
    const images = [
        { src: "real_image.jpg", real: true },
        { src: "fake_image1.jpg", real: false },
        { src: "fake_image2.jpg", real: false },
        { src: "fake_image3.jpg", real: false }
    ];

    // Desordenar las imágenes
    images.sort(() => Math.random() - 0.5);

    // Crear elementos img y agregarlos al game-area
    images.forEach((image, index) => {
        const imgElement = document.createElement("img");
        imgElement.src = image.src;
        imgElement.dataset.real = image.real;
        imgElement.style.width = "200px"; // Ajusta el tamaño de las imágenes según tu preferencia
        imgElement.style.margin = "10px";
        imgElement.style.cursor = "pointer";

        imgElement.addEventListener("click", function() {
            if (image.real) {
                alert("¡Correcto! Has encontrado la imagen real.");
                // Aquí puedes agregar lógica para avanzar al siguiente nivel
            } else {
                alert("Incorrecto, inténtalo de nuevo.");
            }
        });

        gameArea.appendChild(imgElement);
    });
});
