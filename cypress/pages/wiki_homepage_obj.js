class HomePage {
    wikipediaHeader() { 
        return cy.get('h1.central-textlogo-wrapper')
    };

    langunageLinks() {
        return cy.get('div.central-featured-lang');
    }

    searchBox() {
        return cy.get('input#searchInput');
    }

    searchButton() {
        return cy.get('button.pure-button');
    }
}

export default HomePage