// home.js

document.addEventListener('DOMContentLoaded', function () {
  const randomEntries = document.getElementById('randomEntries');

  // Sample articles
  const articles = [
    { title: 'History of Wikipedia', content: 'Wikipedia, founded in 2001, is a free online encyclopedia that anyone can edit. It has become one of the largest and most popular reference websites on the internet, providing information on a wide range of topics.' },
    { title: 'Web Development Technologies', content: 'Web development involves the creation of websites and web applications. HTML, CSS, and JavaScript are essential technologies in this field. HTML structures content, CSS styles it, and JavaScript adds interactivity to web pages.' },
    { title: 'Space Exploration', content: 'Space exploration is the investigation and study of outer space using astronomy and space technologies. It involves the exploration of celestial bodies such as planets, moons, and stars, as well as understanding the broader cosmos.' },
    { title: 'Artificial Intelligence', content: 'Artificial Intelligence (AI) refers to the development of computer systems that can perform tasks that typically require human intelligence. It encompasses machine learning, natural language processing, and computer vision, leading to advancements in automation and problem-solving.' },
    { title: 'Healthy Eating Habits', content: 'Maintaining a balanced and nutritious diet is crucial for overall health and well-being. Incorporating a variety of fruits, vegetables, whole grains, and lean proteins can provide essential nutrients that support the body\'s functions.' },
    { title: 'Ancient Civilizations', content: 'The study of ancient civilizations offers insights into the development of human societies. From the majestic pyramids of Egypt to the sophisticated city-states of Mesopotamia, exploring ancient cultures provides a deeper understanding of our shared history.' },
    { title: 'Environmental Conservation', content: 'Environmental conservation involves efforts to protect and preserve the natural world. Initiatives include reducing pollution, conserving biodiversity, and promoting sustainable practices to ensure the health of ecosystems and the well-being of future generations.' },
    { title: 'Famous Literature Works', content: 'Exploring timeless literary classics reveals the depth of human creativity and storytelling. Works such as Shakespeare\'s plays, Dickens\' novels, and Austen\'s prose continue to captivate readers, shaping cultural understanding and appreciation for literature.' },
    // Add more sample articles as needed
];


  // Function to add articles to the page
  function addArticlesToPage() {
    articles.forEach((article, index) => {
        const articleElement = document.createElement('article');
        articleElement.innerHTML = `<h2>${article.title}</h2><p>${article.content}</p><a class="read-more" href="../pages/details.html?title=${encodeURIComponent(article.title)}&content=${encodeURIComponent(article.content)}">Read More</a>`;
        randomEntries.appendChild(articleElement);
    });
}

  // Call the function to add sample articles
  addArticlesToPage();
});
