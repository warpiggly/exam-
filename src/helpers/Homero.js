// Configuración de animaciones
export const animationConfig = {
        duration: 2000,
        gusanoDelay: 500,
        tostadoraDelay: 800,
        jesusDelay: 1000
};

// Función para animar elementos
export const animateElement = (element, delay = 0) => {
        setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
        }, delay);
};

// Array de frases aleatorias de Homero
export const homeroPhrases = [
        "¡D'oh!",
        "Mmm... donas",
        "¡Estúpido Flanders!",
        "Todo lo que he hecho en mi vida es perder el tiempo viendo televisión",
        "La cerveza: la causa y la solución de todos los problemas de la vida"
];

// Función para obtener una frase aleatoria
export const getRandomPhrase = () => {
        const randomIndex = Math.floor(Math.random() * homeroPhrases.length);
        return homeroPhrases[randomIndex];
};

// Función para manejar el movimiento de los GIFs
export const handleGifHover = (gifElement) => {
        gifElement.style.transform = `rotate(${Math.random() * 20 - 10}deg)`;
        setTimeout(() => {
                gifElement.style.transform = 'rotate(0deg)';
        }, 500);
};

// Función para inicializar las animaciones
export const initializeAnimations = () => {
        const elements = document.querySelectorAll('.container img');
        elements.forEach((element, index) => {
                // Configuración inicial
                element.style.opacity = '0';
                element.style.transform = 'translateY(20px)';
                element.style.transition = 'all 0.5s ease-out';

                // Animar con delay progresivo
                animateElement(element, index * 200);

                // Añadir evento hover
                element.addEventListener('mouseenter', () => handleGifHover(element));
        });
};