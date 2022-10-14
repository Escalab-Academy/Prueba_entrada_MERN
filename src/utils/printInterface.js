//Import nodes
import { Loader } from './nodes.js';

const contentCard = (props) => {
    const { capital, flag, names, population, region } = props;

    return `
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
    `;
};

// Principal function to make a country card
export const CountryCard = (props) => {
    //Props needed for this component
    const {
        names: { common }
    } = props;

    //Creation the content of the card
    const content = contentCard(props);

    //Creation of a content card
    const divCard = document.createElement('div');
    divCard.classList.add('card');
    divCard.innerHTML = content;

    const newName = common.toLowerCase().split(' ').join('_');

    divCard.addEventListener(
        'click',
        () => (location.hash = `_details_${newName}`)
    );

    return divCard;
};

const detailsTemplate = (props) => {
    console.log(props);

    const { capital, flags, altSpellings, borders, coatOfArms, continents, languages, population, timezones } = props;

    return `
        <h1 class="titleDetails">DETAILS</h1>
        <div class="containDetails">
            <div class="colum colum1">
                    <img src="${flags.png}" class="imageFlagDetails"/>
                    <div class="boxText">
                        <p class="text">Name: ${altSpellings[1]}</p>
                        <p class="text">Capital: ${capital[0]}</p>
                    </div>
                </div>
                <div class="colum colum2">
                    <img src="${coatOfArms.png}" class="imageEscudoDetails"/>
                    <div class="boxText">
                        <p class="text">Lenguages: ${Object.values(languages).map((e) => e)}</p>
                        <p class="text">Borders: ${borders}</p>
                    </div>
                </div>
                <div class="colum colum3">
                    <div class="boxText">
                        <p class="text">Region: ${continents[0]}</p>
                        <p class="text">Population: ${population}</p>
                        <p class="text">Time Zone: ${timezones}</p>
                    </div>
                </div>
            </div>
        </div>
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

    container.append(...cards);

    // Joining the section on DOM
    target.appendChild(container);
};

export const printDetails = (data, target) => {
    const template = Array.isArray(data) ? detailsTemplate(data[0]) : detailsTemplate(data);
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
