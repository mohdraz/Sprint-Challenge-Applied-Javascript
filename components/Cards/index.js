// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const cardContainer = document.querySelector('.cards-container');

function createArticle(articleInfo) {
    // create components 
    const article = document.createElement('div');
    const headline = document.createElement('div');
    const author = document.createElement('div');
    const imgContainer = document.createElement('div');
    const img = document.createElement('img');
    const spanEl = document.createElement('span');

    // create structure 
    article.appendChild(headline);
    article.appendChild(author);
    author.appendChild(imgContainer);
    imgContainer.appendChild(img);
    author.appendChild(spanEl);

    // create styles 
    article.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imgContainer.classList.add('img-container');

    // create content 
    headline.textContent = articleInfo.headline;
    img.src = articleInfo.authorPhoto;
    spanEl.textContent = articleInfo.authorName;

    return article;

}
axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then( (dataSet) => {
    // console.log(dataSet);
    const articleSet = dataSet.data.articles;
    const topics = Object.keys(articleSet);
    // console.log(topics.length);

    for (let i = 0; i < topics.length; i++) {
        // console.log(topics[i]);
        const articleData = articleSet[topics[i]];
        articleData.forEach( element => {
            console.log(element.headline);
            const newArticle = createArticle(element);
            cardContainer.appendChild(newArticle);
        });
    }
})
.catch( (error) => {console.log(error);})