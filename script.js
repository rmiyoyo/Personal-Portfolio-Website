const handleClick = () => {
  const mobileNavMenu = document.querySelector('#mobile-nav-menu');
  const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay');
  mobileNavMenu.classList.toggle('mobile-menu-inactive');
  mobileNavMenu.classList.toggle('mobile-menu');
  document.body.classList.toggle('menu-active');
  mobileMenuOverlay.classList.toggle('mobile-menu-overlay-active');
};

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('#svg-menu').addEventListener('click', handleClick);
  document.querySelectorAll('.mobile-link, .disabled-button').forEach((button) => button.addEventListener('click', handleClick));
});
