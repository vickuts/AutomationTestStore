export function searchExistingProduct(productName) {
    cy.get('#filter_keyword')
        .type(productName)
        .closest('form')
        .submit();

    cy.get('h1.productname').should('contain', productName);
}

export function productSearch(productName) {
    searchExistingProduct('i');
    let found = true;
    do {
        cy.get('.col-md-3.col-sm-6.col-xs-12 .prdocutname').each((el) => {
            if (el.text() === productName) {
                cy.wrap(el).click();
                found = false;
                return false;
            }
        })
        cy.get('.pagination li').contains('>').click();
    } while (found)
}

export function searchProduct(productName) { //ck One Gift Set
    cy.get('#filter_keyword')
        .type('i')
        .closest('form')
        .submit();

    cy.get(`ul.pagination a`).then(pages => {
        return pages.length
    }).then(pageCount => {
        for (let i = 0; i < pageCount; i++) {
            cy.location().then(location => {
                if (!location.search.includes('product/product')) {
                    cy.get('body').then(body => {
                        if (body.find(`a.prdocutname[title="${productName}"]`).length > 0) { //cy.get(`a.prdocutname[title="${productName}"]`).should('exist')
                            cy.get(`a.prdocutname[title="${productName}"]`).click();
                        } else {
                            cy.get(`ul.pagination a`).contains('>').click();
                        }
                    })
                }
            })
        }
    })
}

export function searchProductWithRecursion(productName) {

    cy.get('body').then(body => {
        if (body.find(`a.prdocutname[title="${productName}"]`).length > 0) {
            cy.get(`a.prdocutname[title="${productName}"]`).click();
        } else {
            cy.get(`ul.pagination a`).contains('>').click();
            searchProductWithRecursion(productName)
        }
    })
}