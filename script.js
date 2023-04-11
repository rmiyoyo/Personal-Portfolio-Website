// script.js
document.addEventListener('DOMContentLoaded', function() {
    const hamburgerIcon = document.querySelector('.svg-menu');
    const mobileMenu = document.getElementById('nav-menu');
  
    hamburgerIcon.addEventListener('click', function() {
      mobileMenu.classList.toggle('mobileMenu');
    });
  });
  