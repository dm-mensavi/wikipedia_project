// entry.js

document.addEventListener('DOMContentLoaded', function () {
  const newEntryForm = document.getElementById('newEntryForm');

  // Handle form submission
  newEntryForm.addEventListener('submit', function (event) {
      event.preventDefault(); // Prevent the default form submission behavior

      const title = encodeURIComponent(document.getElementById('entryTitle').value);
      const content = encodeURIComponent(document.getElementById('entryContent').value);

      if (title && content) {
          // Redirect to the home page with URL parameters
          window.location.href = `../index.html?title=${title}&content=${content}`;
      }
  });
});
