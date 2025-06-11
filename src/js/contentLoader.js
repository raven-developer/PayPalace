document.addEventListener('DOMContentLoaded', function () {
  // ADD CSS FOR ACTIVE
  const navObserver = new MutationObserver(() => {
    const linksLoaded = document.querySelectorAll('.nav-link-item a[data-page]').length > 0;
    if (linksLoaded) {
      setActive();
      navObserver.disconnect(); // Stop observing once it's set
    }
  });

  navObserver.observe(document.body, {
    childList: true,
    subtree: true,
  });
});

// FUNCTION BELOW
function setActive() {
  const currentPage = window.location.pathname.split('/').filter(Boolean).pop().replace('.html', '');
  const links = document.querySelectorAll('.nav-link-item a[data-page]');
  links.forEach((link) => {
    const listItem = link.closest('.nav-link-item');
    if (!listItem) return;

    if (link.dataset.page === currentPage) {
      if (window.matchMedia('(min-width: 768px)').matches) {
        listItem.style.cssText = 'border-bottom: 1px solid #2a2f3c;';
      } else {
        listItem.style.cssText = 'border-bottom: 1px solid #e7ebf4;';
      }
    } else {
      listItem.style.cssText = '';
    }
  });
}

// MOBILE
function forMobile() {
  const openBtn = document.getElementById('menu-open');
  const closeBtn = document.getElementById('menu-close');
  const navLinks = document.getElementById('nav-links');
  const navLogo = document.getElementById('nav-logo');
  const navWrap = document.getElementById('nav-wrapper');

  openBtn.addEventListener('click', () => {
    navWrap.style.outline = '1px solid red';
  });
  closeBtn.addEventListener('click', () => {});
}
