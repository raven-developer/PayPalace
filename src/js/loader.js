const dataPage = document.body.getAttribute('data-page');

async function loadHeader() {
  const response = await fetch('../components/header.html');
  if (!response.ok) throw new Error('Failed to load header.');
  const html = await response.text();
  document.getElementById('global-header').innerHTML = html;
}

async function loadFooter() {
  const response = await fetch('../components/footer.html');
  if (!response.ok) throw new Error('Failed to load footer.');
  const html = await response.text();
  document.getElementById('global-footer').innerHTML = html;
}

document.addEventListener('DOMContentLoaded', async function () {
  try {
    await loadHeader();
    await loadFooter();
    forMobile();
  } catch (error) {
    console.error('Error loading components:', error);
  }
});
