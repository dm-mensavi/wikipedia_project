document.addEventListener('DOMContentLoaded', function () {
  const newEntryForm = document.getElementById('newEntryForm');
  const entryList = document.getElementById('entryList');

  newEntryForm.addEventListener('submit', function (event) {
    event.preventDefault();

    // Get values from the form
    const entryTitle = document.getElementById('entryTitle').value;
    const entryContent = document.getElementById('entryContent').value;

    // Create a new entry object
    const newEntry = {
      title: entryTitle,
      content: entryContent,
    };

    // Add the new entry to the global array "articles"
    articles.unshift(newEntry);

    // Update the entry list on the home page
    loadEntries(articles);

    // Display a prompt that a new article has been added
    alert('New article added successfully!');

    // Reset the form
    newEntryForm.reset();
  });
});
