//Principal Function to get the data from the API

export const getDataAll = async () => {
    const res = await fetch('https://restcountries.com/v3.1/all');
    const data = await res.json();

    const countriesMapped = data.map((element) => {
        return {
            names: element.name,
            flag: element.flags.svg,
            population: element.population,
            region: element.region,
            capital: element.capital
        };
    });

    return countriesMapped;
};
