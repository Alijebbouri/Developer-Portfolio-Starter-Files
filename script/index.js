const hamburger = document.querySelector('#hamburger');
const navLinks = document.querySelector('#navLinks');

hamburger.addEventListener('click', function () {
  navLinks.classList.toggle('active');
});