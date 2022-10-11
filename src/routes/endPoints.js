//Import fetch Data
import { getDataAll } from '../utils/fetchData.js';

//Function to load the Home "/"
export const loadHome = async () => {
    const countries = await getDataAll();

    console.log(countries[0]);
};
