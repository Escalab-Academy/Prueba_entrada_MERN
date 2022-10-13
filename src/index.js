//Import hash handler controller
import { onHashChangeHandler } from './routes/index.js';

//Import nodes
import { regions, inputSearch, searchBtn } from './utils/nodes.js';

const onLoadFunction = async () => {
    location.hash = '_home';
};

const onFilterFunction = (region) => {
    location.hash = `_filter_${region}`;
};

const onSearchFunction = (value) => {
    if (value.length == 0) {
        location.hash = '_home';
        return;
    }

    const newValue = value.toLowerCase();
    const withoutSpaces = newValue.split(' ').join('_');

    location.hash = `_search_${withoutSpaces}`;
};

//Principal event to catch the data from the API when that start
window.addEventListener('load', onLoadFunction);

//Event to know when the app change her Endpoints
window.addEventListener('hashchange', () => onHashChangeHandler(location.hash));

//Events to filter
regions.forEach((btn) => {
    btn.addEventListener('click', (e) =>
        onFilterFunction(e.target.textContent)
    );
});

//Events of search
searchBtn.addEventListener('click', () => onSearchFunction(inputSearch.value));
