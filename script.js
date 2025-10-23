document.addEventListener('DOMContentLoaded', () => {
    // === AÑO ACTUAL EN EL FOOTER ===
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // === CÓDIGO PARA MODO OSCURO ===
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    // Verifica que toggleIcon exista antes de usar querySelector
    const toggleIcon = themeToggle ? themeToggle.querySelector('i') : null; 

    // Función para aplicar el tema
    function applyTheme(theme) {
        // Verifica si body y toggleIcon son válidos
        if (!body || !toggleIcon) {
            console.error("Error: body o toggleIcon no encontrado en el DOM.");
            return; 
        }

        if (theme === 'dark') {
            body.classList.add('dark-mode');
            toggleIcon.classList.remove('fa-moon');
            toggleIcon.classList.add('fa-sun');
        } else {
            body.classList.remove('dark-mode');
            toggleIcon.classList.remove('fa-sun');
            toggleIcon.classList.add('fa-moon');
        }
    }

    // 1. Cargar la preferencia guardada al iniciar la página
    const savedTheme = localStorage.getItem('theme') || 'light'; // 'light' es el default
    applyTheme(savedTheme);

    // 2. Agregar el evento de clic al botón (solo si existe)
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            let newTheme;
            if (body.classList.contains('dark-mode')) {
                newTheme = 'light';
            } else {
                newTheme = 'dark';
            }
            
            // Aplicar el nuevo tema
            applyTheme(newTheme);
            
            // Guardar la preferencia en localStorage
            localStorage.setItem('theme', newTheme);
        });
    }

    // === OTRO CÓDIGO JS QUE NECESITES PUEDE IR AQUÍ ===
    // Por ejemplo, para un menú hamburguesa en móvil, etc.
});