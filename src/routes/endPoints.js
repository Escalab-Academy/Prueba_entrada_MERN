//Import fetch Data
import {
    getDataAll,
    getDataFilter,
    getDataSearch
} from '../utils/fetchData.js';

//Function to load the Home "/"
export const loadHome = async () => {
    const countries = await getDataAll();

    console.log(countries[0]);
};

export const loadSearch = async (Dynamic) => {
    const country = await getDataSearch(Dynamic);

    console.log(country);
};

export const loadFilter = async (Dynamic) => {
    const country = await getDataFilter(Dynamic);

    console.log(country);
};
