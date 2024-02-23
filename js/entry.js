// entry.js

document.addEventListener('DOMContentLoaded', function () {
  const newEntryForm = document.getElementById('newEntryForm');
  const entryList = document.getElementById('entryList');

  newEntryForm.addEventListener('submit', function (event) {
      event.preventDefault();

      // Get values from the form
      const entryTitle = document.getElementById('entryTitle').value;
      const entryContent = document.getElementById('entryContent').value;

      // Create a new entry element
      const newEntry = document.createElement('article');
      newEntry.innerHTML = `<h2>${entryTitle}</h2><p>${entryContent}</p>`;

      // Add the new entry to the entry list
      entryList.insertBefore(newEntry, entryList.firstChild);

      // Reset the form
      newEntryForm.reset();
  });
});
