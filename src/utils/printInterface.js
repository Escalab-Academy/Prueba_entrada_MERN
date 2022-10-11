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

export const createContainer = (className) => {
    // It creates a container and that have a variant section
    const section = document.createElement('section');
    section.className = className;

    return section;
};
