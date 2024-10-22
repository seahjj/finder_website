window.onload = function() {
    const textElement = document.getElementById('text-7');
    
    // Remove the blinking cursor after 3 seconds
    setTimeout(() => {
        textElement.style.borderRight = "none";
    }, 3000);
    
    // Trigger the fade-out effect after 3 seconds
    setTimeout(() => {
        textElement.classList.add('fade-out');
    }, 3000);
};
