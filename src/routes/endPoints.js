// Import of DOM route
import { Root } from '../utils/nodes.js';

// Import fetch Data
import {
    getDataAll,
    getDataFilter,
    getDataSearch,
    getDataDetails
} from '../utils/fetchData.js';

// Import of section creator
import { printOnTarget, printDetails } from '../utils/printInterface.js';

//Function to clear the Root
export const ClearRoot = () => {
    Root.innerHTML = '';
    return true;
};

//Function to load the Home "/"
export const loadHome = async () => {
    //First we clear the root where the cotent is going to be painted
    ClearRoot();

    // Get the data from the API
    const countries = await getDataAll();

    // This function is going to print the data in an especific place
    printOnTarget(countries, Root);
};

export const loadSearch = async (Dynamic) => {
    // First we clear the root where content is going to be painted
    ClearRoot();

    // Get the data from the API
    const country = await getDataSearch(Dynamic);

    if (!country) {
        console.error('some errors here');
        location.hash = '_home';
        return;
    }

    // This function is going to print the data in an especific place
    printOnTarget(country, Root);
};

export const loadFilter = async (Dynamic) => {
    // First we clear the root where the cotent is going to be painted
    ClearRoot();

    // Get the data from the API
    const country = await getDataFilter(Dynamic);

    // This function is going to print the data in an especific place
    printOnTarget(country, Root);
};

export const loadDetails = async (Dynamic) => {
    // First we clear the root where the cotent is going to be painted
    ClearRoot();

    // Get the country from the API
    const country = await getDataDetails(Dynamic);

    // This function is going to print the data in an especific place
    printDetails(country, Root);
};
