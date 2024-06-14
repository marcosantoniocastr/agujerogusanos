// script.js

document.addEventListener("DOMContentLoaded", function() {
    // Obtener el contenedor del video
    const videoContainer = document.getElementById('video-container');

    // Función para insertar el video
    function insertVideo() {
        const videoElement = document.createElement('video');
        videoElement.setAttribute('controls', true);
        videoElement.setAttribute('play', true);
        videoElement.setAttribute('loop', true);
        videoElement.setAttribute('muted', true);
        videoElement.style.width = '100%';
        videoElement.style.height = 'auto';
        videoElement.style.borderRadius = '10px';
        videoElement.style.boxShadow = '0px 0px 10px rgba(0, 0, 0, 0.3)';
        
        const sourceElement = document.createElement('source');
        sourceElement.setAttribute('src', 'catenoide.mp4');
        sourceElement.setAttribute('type', 'video/mp4');
        
        videoElement.appendChild(sourceElement);
        videoContainer.appendChild(videoElement);
    }

    // Llamar a la función para insertar el video
    insertVideo();
});
