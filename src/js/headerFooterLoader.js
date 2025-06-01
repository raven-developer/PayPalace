document.addEventListener('DOMContentLoaded', function () {
  // Load the content from the JSON file
  fetch('../components/header.html')
    .then((response) => {
      if (response.ok) {
        return response.text();
      } else {
        throw new Error('Failed to load header.');
      }
    })
    .then((data) => {
      document.getElementById('global-header').innerHTML = data;
    })
    .catch((error) => {
      console.error('Error loading header:', error);
    });

  fetch('../components/footer.html')
    .then((response) => {
      if (response.ok) {
        return response.text();
      } else {
        throw new Error('Failed to load footer.');
      }
    })
    .then((data) => {
      document.getElementById('global-footer').innerHTML = data;
    })
    .catch((error) => {
      console.error('Error loading footer:', error);
    });
});
