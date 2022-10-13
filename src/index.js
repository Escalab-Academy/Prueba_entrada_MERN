//Import hash handler controller
import { onHashChangeHandler } from './routes/index.js';

const onLoadFunction = async () => {
    location.hash = '_home';
};

//Principal event to catch the data from the API when that start
window.addEventListener('load', onLoadFunction);

//Event to know when the app change her Endpoints
window.addEventListener('hashchange', () => onHashChangeHandler(location.hash));
