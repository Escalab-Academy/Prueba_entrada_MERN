//Principal Function to get the data from the API

export const getDataAll = async () => {
    const res = await fetch('https://restcountries.com/v3.1/all');
    const data = await res.json();

    const countriesMapped = data.map((element) => {
        return {
            names: {
                common: element.name.common,
                official: element.name.official
            },
            flag: element.flags.svg,
            population: element.population,
            region: element.region,
            capital: element.capital
        };
    });

    return countriesMapped;
};

export const getDataSearch = (name) => {
    return fetch(`https://restcountries.com/v3.1/name/${name}`)
        .then((res) => res.json())
        .catch((err) => err);
};

export const getDataFilter = (region) => {
    return fetch(`https://restcountries.com/v3.1/region/${region}`)
        .then((res) => res.json())
        .catch((err) => err);
};
