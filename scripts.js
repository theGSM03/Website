function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-theme');

    // Guardar el tema actual en localStorage
    if (body.classList.contains('dark-theme')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
}

// Aplicar el tema guardado en localStorage al cargar la página
window.onload = function() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme && savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
    }
}
