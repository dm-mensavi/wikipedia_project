document.addEventListener("DOMContentLoaded", function () {
	loadEntries(articles);

	// Search button click event
	const searchButton = document.getElementById("searchButton");
	searchButton.addEventListener("click", handleSearch);
});

function loadEntries(entries) {
	const entriesContainer = document.getElementById("Entries");
	entriesContainer.innerHTML = ""; // Clear previous entries

	entries.forEach((article, index) => {
		const articleElement = document.createElement("article");
		const highlightedTitle = highlightSearchKeywords(article.title);
		const highlightedContent = highlightSearchKeywords(article.content);

		articleElement.innerHTML = `<h2>${highlightedTitle}</h2><p>${highlightedContent}</p><a class="read-more" href="../pages/details.html?title=${encodeURIComponent(
			article.title
		)}&content=${encodeURIComponent(article.content)}">Read More</a>`;
		Entries.appendChild(articleElement);
	});
}

function handleSearch() {
	const searchInput = document
		.getElementById("searchInput")
		.value.toLowerCase();
	const filteredEntries = articles.filter(
		(entry) =>
			entry.title.toLowerCase().includes(searchInput) ||
			entry.content.toLowerCase().includes(searchInput)
	);

	loadEntries(filteredEntries);
}

function highlightSearchKeywords(text) {
	const searchInput = document
		.getElementById("searchInput")
		.value.toLowerCase();
	const regex = new RegExp(`(${searchInput})`, "ig");
	return text.replace(regex, '<span class="highlight">$1</span>');
}
