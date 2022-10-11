//View changer
import { loadHome } from './endPoints.js';

//Function to know where is the app actually
export const onHashChangeHandler = async (hash) => {
    const [, endPoint, DynamicData] = hash.split('_');
    console.log(endPoint, DynamicData);

    switch (endPoint) {
        case 'home':
            await loadHome();
            break;

        case 'search':
            await loadHome();
            break;

        case 'filter':
            await loadHome();
            break;

        default:
            await loadHome();
            break;
    }
};
