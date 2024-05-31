// script.js

// Example: Smooth scrolling to a frame when clicked
document.querySelectorAll('.frame').forEach(frame => {
    frame.addEventListener('click', () => {
        frame.scrollIntoView({ behavior: 'smooth' });
    });
});
