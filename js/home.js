// home.js

document.addEventListener('DOMContentLoaded', function () {
  const Entries = document.getElementById('Entries');
  
  // Function to add articles to the page
  function addArticlesToPage() {
    articles.forEach((article, index) => {
        const articleElement = document.createElement('article');
        articleElement.innerHTML = `<h2>${article.title}</h2><p>${article.content}</p><a class="read-more" href="../pages/details.html?title=${encodeURIComponent(article.title)}&content=${encodeURIComponent(article.content)}">Read More</a>`;
        Entries.appendChild(articleElement);
    });
}

  // Call the function to add sample articles
  addArticlesToPage();
});
