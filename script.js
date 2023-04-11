const handleClick = () => {
  const mobileNavMenu = document.querySelector('#mobile-nav-menu');
  mobileNavMenu.classList.toggle('mobile-menu-inactive');
  mobileNavMenu.classList.toggle('mobile-menu');
};

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('#svg-menu').addEventListener('click', handleClick);
  document.querySelectorAll('.mobile-link, .disabled-button').forEach((button) => button.addEventListener('click', handleClick));
});
