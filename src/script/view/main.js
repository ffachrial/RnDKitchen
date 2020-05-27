import '../component/meal-list.js';
import '../component/search-item.js';
import DataSource from '../data/data-source.js';

const main = () => {
    const searchElement = document.querySelector("search-item");
    const mealListElement = document.querySelector("meal-List");

    const onButtonSearchClicked = async () => {
        try{
            const result = await DataSource.searchMeal(searchElement.value);
            renderResult(result);
        } catch (message) {
            fallbackResult(message)
        }
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