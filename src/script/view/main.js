import '../component/meal-list.js';
import '../component/search-item.js';
import DataSource from '../data/data-source.js';

const main = () => {
    const searchElement = document.querySelector("search-item");
    const mealListElement = document.querySelector("meal-List");

    const onButtonSearchClicked = () => {
        DataSource.searchMeal(searchElement.value)
            .then(renderResult)
            .catch(fallbackResult)
    };

    const renderResult = results => {
        mealListElement.meals = results;
    };

    const fallbackResult = message => {
        mealListElement.renderError(message);
    };

    searchElement.clickEvent = onButtonSearchClicked;
};

export default main;