//Import of DOM route
import { Root } from '../utils/nodes.js';

//Import fetch Data
import {
    getDataAll,
    getDataFilter,
    getDataSearch
} from '../utils/fetchData.js';

//Import of section creator
import { createContainer, CountryCard } from '../utils/printInterface.js';

//Function to load the Home "/"
export const loadHome = async () => {
    const countries = await getDataAll();

    // Map al countries as a card for each one
    const cards = countries.map((element) => CountryCard(element));

    // Place to create the section and join all cards inside the section
    const container = createContainer('contain__cards');
    container.innerHTML = cards.join('');

    // Joining the section on DOM
    Root.appendChild(container);
};

export const loadSearch = async (Dynamic) => {
    const country = await getDataSearch(Dynamic);

    console.log(country);
};

export const loadFilter = async (Dynamic) => {
    const country = await getDataFilter(Dynamic);

    console.log(country);
};
