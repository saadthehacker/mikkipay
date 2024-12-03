// Get the button element
const button = document.querySelectorAll("button");

// Add mouseover event to increase the button size
button.addEventListener('mouseover', () => {
    button.style.transform = 'scale(1.4)'; // Increase size by 20%
    button.style.transition = 'transform 0.3s ease'; // Smooth transition
});

// Add mouseout event to reset the button size
button.addEventListener('mouseout', () => {
    button.style.transform = 'scale(1)'; // Reset size
});
