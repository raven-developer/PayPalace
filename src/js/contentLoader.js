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
      listItem.style.color = `#005cff`;
      listItem.style.borderBottom = '1px solid #005cff';
    } else {
      listItem.style.color = '';
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

function limitInput(inputElement, maxChars, maxWords = null) {
  inputElement.addEventListener('input', () => {
    let content = inputElement.value;

    // Word limit (if specified)
    if (maxWords !== null) {
      const words = content.trim().split(/\s+/).filter(Boolean);
      if (words.length > maxWords) {
        content = words.slice(0, maxWords).join(' ');
      }
    }

    // Character limit
    if (content.length > maxChars) {
      content = content.slice(0, maxChars);
    }

    inputElement.value = content;
  });
}

const fname = document.getElementById('name');
const email = document.getElementById('email');
const subject = document.getElementById('subject');
const text_area = document.getElementById('text_area');

limitInput(fname, 50);
limitInput(email, 254);
limitInput(subject, 128);
limitInput(text_area, 500, 120);

const logoCarousels = document.querySelectorAll('.logo-carousel-wrapper');

logoCarousels.forEach((carousel) => {
  const items = Array.from(carousel.children);
  items.forEach((item) => {
    const clone = item.cloneNode(true);
    carousel.appendChild(clone);
  });
});
