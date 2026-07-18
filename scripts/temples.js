// temples.js

// ----- Footer: dynamic year and last-modified date -----
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;

// ----- Hamburger navigation toggle -----
const hamburger = document.getElementById('hamburger');
const primaryNav = document.getElementById('primary-nav');

hamburger.addEventListener('click', () => {
  const isOpen = primaryNav.classList.toggle('open');
  hamburger.classList.toggle('open', isOpen);
  hamburger.setAttribute('aria-expanded', isOpen);
  hamburger.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
});
