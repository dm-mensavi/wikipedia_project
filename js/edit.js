document.addEventListener("DOMContentLoaded", function () {
  // Retrieve URL parameters
  const params = new URLSearchParams(window.location.search);
  const title = params.get("title");
  const content = params.get("content");

  // Display the edit form
  if (title && content) {
    const editForm = document.getElementById("editForm");
    editForm.innerHTML = `
      <form id="editEntryForm">
        <label for="editEntryTitle">Heading:</label><br>
        <input type="text" id="editEntryTitle" name="editEntryTitle" value="${decodeURIComponent(
          title
        )}" required><br>

        <label for="editEntryContent">Content:</label><br>
        <textarea id="editEntryContent" name="editEntryContent" rows="4" required>${decodeURIComponent(
          content
        )}</textarea><br>

        <button type="button" onclick="cancelEdit()">Cancel</button>
        <button type="button" onclick="saveChanges('${encodeURIComponent(
          title
        )}', '${encodeURIComponent(content)}')">Save</button>
      </form>
    `;
  }
});

function cancelEdit() {
  // Redirect back to the article details page
  window.history.back();
}

function saveChanges(oldTitle, oldContent) {
  // Retrieve updated values
  const newTitle = document.getElementById("editEntryTitle").value;
  const newContent = document.getElementById("editEntryContent").value;

  updateArticle(oldTitle, oldContent, newTitle, newContent);

  // Redirect back to the updated article details page
  window.location.href = `/pages/details.html?title=${encodeURIComponent(
    newTitle
  )}&content=${encodeURIComponent(newContent)}`;
}

function updateArticle(oldTitle, oldContent, newTitle, newContent) {
  const index = articles.findIndex(
    (article) => article.title === decodeURIComponent(oldTitle)
  );
  if (index !== -1) {
    articles[index].title = decodeURIComponent(newTitle);
    articles[index].content = decodeURIComponent(newContent);
  }
}
