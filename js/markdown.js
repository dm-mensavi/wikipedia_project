function convertMarkdownToHTML() {
	const markdownInput = document.getElementById("markdownInput").value;
	const htmlOutput = document.getElementById("htmlOutput");

	// Use the marked library to convert Markdown to HTML
	const htmlContent = marked.parse(markdownInput);

	// Display the HTML content
	htmlOutput.innerHTML = htmlContent;
}
