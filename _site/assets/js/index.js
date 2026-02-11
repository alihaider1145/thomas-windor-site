const navLinks = document.querySelectorAll('.nav-link');
const currentUrl = window.location.href;

navLinks.forEach((link) => {
  if (link.href === currentUrl) {
    link.classList.add('highlighted-text');
    link.setAttribute('aria-current', 'page');
  }
});
