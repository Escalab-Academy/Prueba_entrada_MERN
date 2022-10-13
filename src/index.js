//Import hash handler controller
import { onHashChangeHandler } from './routes/index.js';

//Import nodes
import { regions } from './utils/nodes.js';

const onLoadFunction = async () => {
    location.hash = '_home';
};

const onFilterFunction = (region) => {
    location.hash = `_filter_${region}`;
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
