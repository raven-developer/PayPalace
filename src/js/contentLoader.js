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
  const currentPage = document.body.getAttribute('data-page');

  const links = document.querySelectorAll('.nav-link-item a[data-page]');
  links.forEach((link) => {
    const listItem = link.closest('.nav-link-item');
    if (!listItem) return;

    const isActive = link.dataset.page === currentPage;
    const isDesktop = window.matchMedia('(min-width: 769px)').matches;

    if (isActive) {
      listItem.style.borderBottom = `1px solid ${isDesktop ? '#2a2f3c' : '#e7ebf4'}`;
    } else {
      listItem.style.borderBottom = '';
    }
  });
}

// MOBILE
function forMobile() {
  const openBtn = document.getElementById('menu-open');
  const closeBtn = document.getElementById('menu-close');
  const navLinks = document.getElementById('nav-links');
  const navLogo = document.getElementById('nav-logo');
  const navItems = document.querySelector('.nav-link-wrapper');
  const main = document.getElementById('main-content');
  const header = document.querySelector('header .section-wrapper');

  function openMenu() {
    navLinks.classList.add('is_open');
    openBtn.style.display = 'none';
    closeBtn.style.display = '';
    navLogo.classList.add('white-filter');
    navItems.classList.add('open');
  }

  function closeMenu() {
    navLinks.classList.remove('is_open');
    openBtn.style.display = '';
    closeBtn.style.display = 'none';
    navLogo.classList.remove('white-filter');
    navItems.classList.remove('open');
  }

  closeMenu();

  openBtn.addEventListener('click', () => {
    openMenu();
  });
  closeBtn.addEventListener('click', () => {
    closeMenu();
  });
}

// STICKY

window.addEventListener('scroll', () => {
  const mainNav = document.getElementById('global-header');
  const onScroll = window.onScroll || document.documentElement.scrollTop;
  if (onScroll > 20) {
    mainNav.classList.add('is_fixed');
  } else {
    mainNav.classList.remove('is_fixed');
  }
});
