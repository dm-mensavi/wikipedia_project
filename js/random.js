// random.js
const articles = [
  { title: 'History of Wikipedia', content: 'Wikipedia, founded in 2001, is a free online encyclopedia that anyone can edit. It has become one of the largest and most popular reference websites on the internet, providing information on a wide range of topics.' },
  { title: 'Web Development Technologies', content: 'Web development involves the creation of websites and web applications. HTML, CSS, and JavaScript are essential technologies in this field. HTML structures content, CSS styles it, and JavaScript adds interactivity to web pages.' },
  { title: 'Space Exploration', content: 'Space exploration is the investigation and study of outer space using astronomy and space technologies. It involves the exploration of celestial bodies such as planets, moons, and stars, as well as understanding the broader cosmos.' },
  { title: 'Artificial Intelligence', content: 'Artificial Intelligence (AI) refers to the development of computer systems that can perform tasks that typically require human intelligence. It encompasses machine learning, natural language processing, and computer vision, leading to advancements in automation and problem-solving.' },
  { title: 'Healthy Eating Habits', content: 'Maintaining a balanced and nutritious diet is crucial for overall health and well-being. Incorporating a variety of fruits, vegetables, whole grains, and lean proteins can provide essential nutrients that support the body\'s functions.' },
  { title: 'Ancient Civilizations', content: 'The study of ancient civilizations offers insights into the development of human societies. From the majestic pyramids of Egypt to the sophisticated city-states of Mesopotamia, exploring ancient cultures provides a deeper understanding of our shared history.' },
  { title: 'Environmental Conservation', content: 'Environmental conservation involves efforts to protect and preserve the natural world. Initiatives include reducing pollution, conserving biodiversity, and promoting sustainable practices to ensure the health of ecosystems and the well-being of future generations.' },
  { title: 'Famous Literature Works', content: 'Exploring timeless literary classics reveals the depth of human creativity and storytelling. Works such as Shakespeare\'s plays, Dickens\' novels, and Austen\'s prose continue to captivate readers, shaping cultural understanding and appreciation for literature.' },
];


document.addEventListener('DOMContentLoaded', function () {
  const randomArticlesContainer = document.getElementById('randomArticles');
  
  // Assuming you have a global variable named 'articles' with your article data
  const entries = articles;

  const getRandomArticle = () => {
      const randomIndex = Math.floor(Math.random() * entries.length);
      return entries[randomIndex];
  };

  const displayRandomArticles = () => {
      for (let i = 0; i < 3; i++) { // Display 3 random articles
          const randomArticle = getRandomArticle();

          // Create elements to display article
          const articleDiv = document.createElement('div');
          articleDiv.classList.add('entry'); // Apply the entry class for styling

          const titleElement = document.createElement('h3');
          titleElement.textContent = randomArticle.title;

          const contentElement = document.createElement('p');
          contentElement.textContent = randomArticle.content;

          const readMoreLink = document.createElement('a');
          readMoreLink.href = `../pages/details.html?title=${encodeURIComponent(randomArticle.title)}&content=${encodeURIComponent(randomArticle.content)}`;
          readMoreLink.textContent = 'Read More';

          // Append elements to the article div
          articleDiv.appendChild(titleElement);
          articleDiv.appendChild(contentElement);
          articleDiv.appendChild(readMoreLink);

          // Append the article div to the container
          randomArticlesContainer.appendChild(articleDiv);
      }
  };

  displayRandomArticles();
});
