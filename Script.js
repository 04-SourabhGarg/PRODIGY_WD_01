const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

// Toggle mobile menu
mobileMenuButton.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});

// Close mobile menu when a link is clicked
mobileMenu.querySelectorAll('a').forEach(link =>
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
  })
);

// Add background when scrolled
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.style.backgroundColor = 'rgba(17, 24, 39, 0.95)';
  } else {
    navbar.style.backgroundColor = 'rgba(31, 41, 55, 0.95)';
  }
});