const toggleMenu = document.querySelector('.toggle-menu');
const menu = document.querySelector('.menu');

toggleMenu.addEventListener('click', function() {
  let open = JSON.parse(toggleMenu.getAttribute('aria-expanded'));
  toggleMenu.setAttribute('aria-expanded', !open);
  menu.hidden = !menu.hidden;
});