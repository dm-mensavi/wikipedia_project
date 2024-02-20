// article-details.js

document.addEventListener("DOMContentLoaded", function () {
	const articleDetails = document.getElementById("articleDetails");

	// Retrieve URL parameters
	const params = new URLSearchParams(window.location.search);
	const title = params.get("title");
	const content = params.get("content");

	// Display the details of the article
	if (title && content) {
		const articleElement = document.createElement("article");
		articleElement.innerHTML = `<h2>${decodeURIComponent(
			title
		)}</h2><p>${decodeURIComponent(
			content
		)}</p><br></h2><p>${decodeURIComponent(
			content
		)}</p><br></h2><p>${decodeURIComponent(content)}</p>
    <button id="editButton" >Edit</button>`;
		articleDetails.appendChild(articleElement);
	}
});
