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


const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if(entry.isIntersecting){
      entry.target.classList.add("show");  
      observer.unobserve(entry.target);
    }
  });
},{
  threshold: 0.15
});

const benefitCards =  document.querySelectorAll('.benefit__card, .service-card, .cta-section');
benefitCards.forEach(el => observer.observe(el));

const navbarWrapper = document.querySelector('.wrapper-navbar');
const navbarToggle = document.querySelector('.navbar__toggle');
const navbarMenuBtn = document.querySelector('#navbar__menu-btn');

window.addEventListener('scroll', () => {
  const isMobile = window.innerWidth < 768; // ajusta el breakpoint si es necesario

  if (window.scrollY > 10) {
    navbarWrapper.classList.add('scrolled');
    navbarToggle.classList.add('scrolled');
    navbarMenuBtn.classList.add('scrolled');
    closeBtn.classList.add('scrolled');

    if (isMobile) {
      invioLogo.classList.add('oculto');
      invioLogoBlanco.classList.remove('oculto');
    }
  } else {
    navbarWrapper.classList.remove('scrolled');
    navbarToggle.classList.remove('scrolled');
    navbarMenuBtn.classList.remove('scrolled');
    closeBtn.classList.remove('scrolled');

    if (isMobile) {
      invioLogo.classList.remove('oculto');
      invioLogoBlanco.classList.add('oculto');
    }
  }
});
