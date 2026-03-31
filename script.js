const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const scrollToTopButton = document.getElementById('scrollToTop');

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}


// when we click on hamburger icon its close 

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}


// Atlasa bultiņu

// Klausās uz lapas ritināšanas notikumu
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollToTopButton.style.display = 'block'; // Parāda bultiņu
  } else {
    scrollToTopButton.style.display = 'none'; // Paslēpj bultiņu
  }
});

// Uzklikšķinot uz bultiņas, uzslīd uz augšu
scrollToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // Plūdena animācija
  });
});
