const logoCarousels = document.querySelectorAll('.logo-carousel-wrapper');

logoCarousels.forEach((carousel) => {
  const items = Array.from(carousel.children);
  items.forEach((item) => {
    const clone = item.cloneNode(true);
    carousel.appendChild(clone);
  });
});
