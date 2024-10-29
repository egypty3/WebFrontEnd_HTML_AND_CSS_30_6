let nav = document.querySelector('nav');

let mobilenav = document.querySelector('nav.mobile-nav');
let menuIcon = document.querySelector('.menu-icon');
let closeIcon = document.querySelector('.close-icon');
let mobileMenuContainer = document.querySelector('.mobile-menu-container');


window.addEventListener('scroll', 
  function() {
    if (window.scrollY > 60) {
      nav.classList.add('scrolled');
      mobilenav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
      mobilenav.classList.remove('scrolled');
    }   
  }
);

menuIcon.addEventListener('click', function() {
  mobileMenuContainer.classList.add('active');
});

closeIcon.addEventListener('click', function() {
  mobileMenuContainer.classList.remove('active');
});