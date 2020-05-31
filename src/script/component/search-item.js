class SearchItem extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }
    
    connectedCallback() {
        this.render();
    }
    
    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }
    
    get value() {
        return this.shadowDOM.querySelector("#searchElement").value;
    }
    
    render() {
        this.shadowDOM.innerHTML = `
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
            <style>
                .container-local {
                    display: flex;
                    flex-flow: row wrap;
                    align-items: center;
                }

                .container-local > input {
                    vertical-align: middle;
                    margin: 5px 10px 5px 0;
                    width: 70%;
                }
            </style>
            <div class="container-local">
                <input class="form-control mr-sm-2" type="search" placeholder="Search Recipe" id="searchElement" aria-label="Search">
                <button class="btn btn-outline-secondary my-2 my-sm-0" id="searchButtonElement" type="submit">Search</button>
            </div>        
        `;
        
        this.shadowDOM.querySelector("#searchButtonElement").addEventListener("click", this._clickEvent);
    }
}

customElements.define("search-item", SearchItem);