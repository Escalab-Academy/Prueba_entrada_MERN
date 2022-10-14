//Principal Function to get the data from the API

const transformData = (country) => {
    return {
        names: {
            common: country.name.common,
            official: country.name.official
        },
        flag: country.flags.svg,
        population: country.population,
        region: country.region,
        capital: country.capital
    };
};

export const getDataAll = async () => {
    const res = await fetch('https://restcountries.com/v3.1/all');
    const data = await res.json();

    const countriesMapped = data.map((element) => transformData(element));

    return countriesMapped;
};

export const getDataSearch = async (name) => {
    const res = await fetch(`https://restcountries.com/v3.1/name/${name}`);
    const data = await res.json();

    // If the search have some incorrect it will return a boolean
    if (data.status == 404) {
        return false;
    }

    const countriesMapped = data.map((element) => transformData(element));

    return countriesMapped;
};

export const getDataFilter = async (region) => {
    const res = await fetch(`https://restcountries.com/v3.1/region/${region}`);
    const data = await res.json();

    const countriesMapped = data.map((element) => transformData(element));

    return countriesMapped;
};

export const getDataDetails = async (name) => {
    const res = await fetch(`https://restcountries.com/v3.1/name/${name}`);
    const data = await res.json();

    // If the search have some incorrect it will return a boolean
    if (data.status == 404) {
        return false;
    }

    return data;
};
