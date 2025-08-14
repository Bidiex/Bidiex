const menuBtn = document.getElementById('navbar__menu-btn');
const closeBtn = document.getElementById('navbar__close-btn');
const navBarContent = document.getElementById('navbar-content');
const navBarLinks = document.querySelectorAll('.navbar__link a');
const invioLogo = document.getElementById('invio-logo');
const invioLogoBlanco = document.getElementById('invio-logo--blanco');

navBarLinks.forEach(link => {
  link.addEventListener("click", () => {
    navBarContent.classList.add('oculto');
    closeBtn.classList.add('oculto');
    menuBtn.classList.remove('oculto');
  })
});

menuBtn.addEventListener("click", () => {

  navBarContent.classList.remove('oculto');
  closeBtn.classList.remove('oculto');
  menuBtn.classList.add('oculto');
});

closeBtn.addEventListener("click", () => {

  navBarContent.classList.add('oculto');
  closeBtn.classList.add('oculto');
  menuBtn.classList.remove('oculto');
});

