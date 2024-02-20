// home.js

document.addEventListener('DOMContentLoaded', function () {

  const randomEntriesContainer = document.getElementById('randomEntries');

  // Example: Add dynamic content
  const dynamicContent = document.createElement('div');
  dynamicContent.textContent = 'You are on the home page!';
  randomEntriesContainer.appendChild(dynamicContent);

  const entryList = document.getElementById('entryList');

  // Retrieve URL parameters
  const params = new URLSearchParams(window.location.search);
  const storedTitle = params.get('title');
  const storedContent = params.get('content');

  // Display the new entry on the home page
  if (storedTitle && storedContent) {
      const newEntry = document.createElement('li');
      newEntry.innerHTML = `<h3>${params}</h3>`;
      entryList.appendChild(newEntry);
  }
});
