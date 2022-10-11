// Principal function to make a country card
const CountryCard = () => {
    return `
        <div class="card">
            <div class="blob"></div>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Colombia.svg/2560px-Flag_of_Colombia.svg.png"
                alt="" class="img">
            <h2>Country<span>Region</span></h2>
            <div class="infoCountry">
                <div class="info">
                    <img class="icon" src="./public/assets/population.png" alt="">
                    <p>25</p>
                </div>
                <div class="info">
                    <img class="icon" src="./public/assets/region.png" alt="">
                    <p>capital</p>
                </div>
            </div>
        </div>
    `;
};

const CreateContainerCard = () => {
    return `
    <section class="contain__cards">
    </section>
    `;
}
