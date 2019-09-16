// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {

    // create elements
    const header = document.createElement('div');
    const spanDate = document.createElement('span');
    const heading = document.createElement('h1');
    const spanTemp = document.createElement('span');

    // create structure
    header.appendChild(spanDate);
    header.appendChild(heading);
    header.appendChild(spanTemp);

    // create styles
    header.classList.add('header');
    spanDate.classList.add('date');
    spanTemp.classList.add('temp');

    // create data
    spanDate.textContent = 'September 15, 2019';
    heading.textContent = 'Lamda Times';
    spanTemp.textContent = '98°';

    return header;

}

const headerComponent = document.querySelector('.header-container');
headerComponent.appendChild(Header());

