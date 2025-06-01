document.addEventListener('DOMContentLoaded', function () {
  // Load the content from the JSON file
  function setActiveMenuItem() {
    const currentPage = window.location.pathname.split('/').filter(Boolean).pop().replace('.html', '');

    const links = document.querySelectorAll('.nav-link-item a[data-page]');

    links.forEach((link) => {
      const listItem = link.closest('.nav-link-item');
      if (!listItem) return;

      if (link.dataset.page === currentPage) {
        listItem.style.cssText = 'border-bottom: 1px solid #2a2f3c;';
      } else {
        listItem.style.cssText = '';
      }
    });
  }

  // Observe for changes in the nav container
  const navObserver = new MutationObserver(() => {
    const linksLoaded = document.querySelectorAll('.nav-link-item a[data-page]').length > 0;
    if (linksLoaded) {
      setActiveMenuItem();
      navObserver.disconnect(); // Stop observing once it's set
    }
  });

  // Start observing the entire body or specific nav container
  navObserver.observe(document.body, {
    childList: true,
    subtree: true,
  });
});
