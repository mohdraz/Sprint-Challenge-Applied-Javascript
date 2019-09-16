// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const tabComponent = document.querySelector('.tabs .topics');
function createTab(topic) {

    // create Element
    const tabEl = document.createElement('div');

    // set content 
    tabEl.textContent = topic;

    // create styles 
    tabEl.classList.add('tab');

    return tabEl;

}
axios.get('https://lambda-times-backend.herokuapp.com/topics')
.then( (dataSet) => {
    // console.log(dataSet);
    dataSet.data.topics.forEach( (element) => {
        const newTab = createTab(element);
        tabComponent.appendChild(newTab);
    });
})
.catch( (error) => {
    console.log(error);
})