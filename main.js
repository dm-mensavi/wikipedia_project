// main.js

const Entries = [
  { title: 'Random Entry 1', content: 'This is the content of Random Entry 1.' },
  { title: 'Random Entry 2', content: 'This is the content of Random Entry 2.' },
  { title: 'Random Entry 3', content: 'This is the content of Random Entry 3.' },
  // Add more random entries as needed
];

document.addEventListener('DOMContentLoaded', function () {
  const randomEntriesContainer = document.getElementById('randomEntries');

  // Display random entries on the home page
  Entries.forEach(entry => {
      const entryElement = document.createElement('div');
      entryElement.innerHTML = `<h3>${entry.title}</h3><p>${entry.content}</p>`;
      randomEntriesContainer.appendChild(entryElement);
  });
});

function addNewEntry(title, content) {
  const newEntry = { title, content };
  Entries.push(newEntry);

  const entryElement = document.createElement('div');
  entryElement.innerHTML = `<h3>${newEntry.title}</h3><p>${newEntry.content}</p>`;
  randomEntriesContainer.appendChild(entryElement);
}

// Handle form submission
newEntryForm.addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent the default form submission behavior

  const title = document.getElementById('entryTitle').value;
  const content = document.getElementById('entryContent').value;

  if (title && content) {
      addNewEntry(title, content);

      // Clear the form after submitting
      newEntryForm.reset();
  }
});