class MealItem extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }
    
    set meal(meal) {
        this._meal = meal;
        this.render();
    }
    
    render() {
        this.shadowDOM.innerHTML = `
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
            <style>
                * {
                    margin: 0;
                    paddng: 0;
                    box-sizing: border-box;
                }
                
                :host {
                    display: block;
                    margin-bottom: 18px;
                    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                    border-radius: 10px;
                    overflow: hidden;
                }
            </style>
            <div class="container">
                <div class="row">
                    <div class="col">
                        <img class="img-fluid" src="${this._meal.strMealThumb} " alt="Meal Thumb">
                    </div>
                    <div class="col">
                        <div class="row">
                            <div class="col">
                                <h2>${this._meal.strMeal}</h2>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-4">
                                <ul class="list-unstyled">
                                    <li>${this._meal.strMeasure1}</li>
                                    <li>${this._meal.strMeasure2}</li>
                                    <li>${this._meal.strMeasure3}</li>
                                    <li>${this._meal.strMeasure4}</li>
                                    <li>${this._meal.strMeasure5}</li>
                                    <li>${this._meal.strMeasure6}</li>
                                    <li>${this._meal.strMeasure7}</li>
                                    <li>${this._meal.strMeasure8}</li>
                                    <li>${this._meal.strMeasure9}</li>
                                    <li>${this._meal.strMeasure10}</li>
                                    <li>${this._meal.strMeasure11}</li>
                                    <li>${this._meal.strMeasure12}</li>
                                    <li>${this._meal.strMeasure13}</li>
                                    <li>${this._meal.strMeasure14}</li>
                                    <li>${this._meal.strMeasure15}</li>
                                    <li>${this._meal.strMeasure16}</li>
                                    <li>${this._meal.strMeasure17}</li>
                                    <li>${this._meal.strMeasure18}</li>
                                    <li>${this._meal.strMeasure19}</li>
                                    <li>${this._meal.strMeasure20}</li>
                                </ul>
                            </div>
                            <div class="col">
                                <ul class="list-unstyled">
                                    <li>${this._meal.strIngredient1}</li>
                                    <li>${this._meal.strIngredient2}</li>
                                    <li>${this._meal.strIngredient3}</li>
                                    <li>${this._meal.strIngredient4}</li>
                                    <li>${this._meal.strIngredient5}</li>
                                    <li>${this._meal.strIngredient6}</li>
                                    <li>${this._meal.strIngredient7}</li>
                                    <li>${this._meal.strIngredient8}</li>
                                    <li>${this._meal.strIngredient9}</li>
                                    <li>${this._meal.strIngredient10}</li>
                                    <li>${this._meal.strIngredient11}</li>
                                    <li>${this._meal.strIngredient12}</li>
                                    <li>${this._meal.strIngredient13}</li>
                                    <li>${this._meal.strIngredient14}</li>
                                    <li>${this._meal.strIngredient15}</li>
                                    <li>${this._meal.strIngredient16}</li>
                                    <li>${this._meal.strIngredient17}</li>
                                    <li>${this._meal.strIngredient18}</li>
                                    <li>${this._meal.strIngredient19}</li>
                                    <li>${this._meal.strIngredient20}</li>
                                </ul>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col>
                                <div class="meal-info">
                                    <p>${this._meal.strInstructions}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("meal-item", MealItem);