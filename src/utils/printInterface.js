//Import nodes
import { Loader } from './nodes.js';

// Principal function to make a country card
export const CountryCard = (props) => {
    const { capital, flag, names, population, region } = props;

    return `
        <div class="card">
            <div class="blob"></div>
            <img 
                src="${flag}"
                alt=${names.common} 
                class="img"
            >
            <h2>${names.common}<span>${region}</span></h2>
            <div class="infoCountry">
                <div class="info">
                    <img class="icon" src="./public/assets/population.png" alt="">
                    <p>${population}</p>
                </div>
                <div class="info">
                    <img class="icon" src="./public/assets/region.png" alt="">
                    <p>${capital}</p>
                </div>
            </div>
        </div>
    `;
};

const detailsTemplate = (props) => {
    console.log(props);

    const {} = props;

    return `

    `;
};

export const createContainer = (className) => {
    // It creates a container and that have a variant section
    const section = document.createElement('section');
    section.className = className;

    return section;
};

export const printOnTarget = (data, target) => {
    // Map all region countries as a card for each one
    const cards = data.map((element) => CountryCard(element));

    // Place to create the section and join all cards inside the section
    const container = createContainer('contain__cards');
    container.innerHTML = cards.join('');

    // Joining the section on DOM
    target.appendChild(container);
};

export const printDetails = (data, target) => {
    const template = detailsTemplate(data);

    // Place to create the section and join all cards inside the section
    const container = createContainer('details_country');
    container.innerHTML = template;

    // Joining the section on DOM
    target.appendChild(container);
};

export const showLoader = (show) => {
    if (show) {
        Loader.classList.remove('hidden');
    } else {
        Loader.classList.add('hidden');
    }
};
