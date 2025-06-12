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
      if (window.matchMedia('(min-width: 769px)').matches) {
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
  const navItems = document.querySelector('.nav-link-wrapper');
  const main = document.getElementById('main-content');
  const header = document.querySelector('header .section-wrapper');
  let onScrollY = 0;

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
    onScrollY = window.scrollY;
    main.classList.add('no-scroll');
    main.style.position = 'fixed';
    main.style.marginTop = '104px';
    main.style.top = `-${onScrollY}px`;
    main.style.left = '0';
    main.style.width = '100%';

    openMenu();
  });
  closeBtn.addEventListener('click', () => {
    main.classList.remove('no-scroll');

    main.style.position = '';
    main.style.marginTop = '';
    main.style.top = '';
    main.style.left = '';
    main.style.width = '';

    window.scrollTo(0, onScrollY);
    onScrollY = 0;

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
