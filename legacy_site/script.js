/**
 * Project Kororā - Interactive Background
 * Handles the creation and animation of the starry background effect.
 */

// Initialize background when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    createStarryBackground();

    // Example: Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

/**
 * Creates the interactive starry background effect.
 * Generates a field of animated stars with randomized properties.
 */
function createStarryBackground() {
    const TOTAL_STARS = 150; // Optimized count for performance
    
    for (let i = 0; i < TOTAL_STARS; i++) {
        createStar();
    }
}

/**
 * Creates a single star element with randomized properties.
 * Each star is positioned randomly and has a unique animation delay.
 */
function createStar() {
    const star = document.createElement('div');
    star.className = 'star';

    // Set random size between 1-3 pixels for varied star field
    const size = Math.random() * 2 + 1;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;

    // Use percentage-based positioning for responsive layout
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;

    // Randomize animation timing for natural effect
    star.style.animationDelay = `${Math.random() * 4}s`;

    document.body.appendChild(star);
} 