// Inicialización de particles.js
document.addEventListener('DOMContentLoaded', function () {
    // Configuración de particles.js
    particlesJS('particles-js', {
        "particles": {
            "number": {
                "value": 80,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#3498db"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                }
            },
            "opacity": {
                "value": 0.5,
                "random": false
            },
            "size": {
                "value": 3,
                "random": true
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#2c3e50",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 2,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 140,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "push": {
                    "particles_nb": 4
                }
            }
        },
        "retina_detect": true
    });

    // Actualiza el año actual en el footer
    const updateCurrentYear = () => {
        const yearElement = document.getElementById('current-year');
        if (yearElement) {
            yearElement.textContent = new Date().getFullYear();
        }
    };
    updateCurrentYear();

    // Función para animar elementos cuando son visibles en el viewport
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.animated');
        const screenHeight = window.innerHeight;
        const visibilityOffset = 100; // Margen de visibilidad

        elements.forEach(element => {
            const position = element.getBoundingClientRect().top;

            if (position < screenHeight - visibilityOffset) {
                element.classList.add('fade-in');
            }
        });
    };

    // Debounce para optimizar el evento de scroll
    const debounce = (func, wait = 20) => {
        let timeout;
        return (...args) => {
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(this, args), wait);
        };
    };

    // Ejecuta la animación al hacer scroll
    window.addEventListener('scroll', debounce(animateOnScroll));

    // Ejecuta la animación al cargar la página
    animateOnScroll();
});