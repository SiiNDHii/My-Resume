// Smooth scroll animation for nav links
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        window.scrollTo({
            top: targetSection.offsetTop - 20,
            behavior: 'smooth'
        });
    });
});

// Example: alert when the page loads
window.addEventListener('load', () => {
    console.log("Welcome to Jahanzaib Khan's Resume Website!");
});
