const logoCarousels = document.querySelectorAll('.logo-carousel-wrapper');

logoCarousels.forEach((carousel) => {
  const items = Array.from(carousel.children);
  items.forEach((item) => {
    const clone = item.cloneNode(true);
    carousel.appendChild(clone);
  });
});
/*
// FOR NAVIGATION
document.addEventListener('DOMContentLoaded', function () {
  const menuOpen = document.getElementById('open');
  const menuClose = document.getElementById('close');
  const logo = document.querySelectorAll('.nav-logo.site-logo');

  if (menuOpen) {
    menuOpen.style.cssText = 'border: 1px solid red';
    console.log(menuOpen);
  } else {
    console.warn('menuOpen element not found');
  }

  if (menuClose) {
    menuClose.style.cssText = 'border: 1px solid red';
    console.log(menuClose);
  } else {
    console.warn('menuClose element not found');
  }

  if (logo) {
    console.log(logo);
    logo.style.cssText = 'border: 1px solid red';
  } else {
    console.warn('logo element not found');
  }
});
*/
