/// <reference types = "Cypress" />

describe('Drop Down Demo', () => {

    beforeEach(() => {
        cy.visit('https://www.lambdatest.com/selenium-playground/jquery-dropdown-search-demo');
    })

    it('Dropdown', () => {
        cy.get('#country').select('India', {force: true});
    })

    it('Select Through Typing in TextField', () => {
        cy.get('.select2-selection.select2-selection--single').eq(0).click()
        cy.get('.select2-dropdown>.select2-search').type('Ind{enter}')
    })

    it('Select Through Iterating', () => {
        cy.get('.select2-selection.select2-selection--single').eq(0).click()
        cy.get('.select2-results ul li').each(el => {
            if(el.text() === 'India'){
                cy.wrap(el).click();
            }
        })
    })

    it('Select Multiple Value and Verify it', () => {
        cy.get('.select2-search__field').click();
        cy.get('.select2-results ul li').each(el => {
            if(el.text() === 'Alaska'){
                cy.wrap(el).click();
            }
        })
        cy.get('.select2-search__field').type('Cal{enter}');
        cy.get('.select2-selection__choice').should('have.length',2);
        cy.get('.select2-selection__choice').each((el, index) => {
            cy.wrap(el).should('contain', el.text())
        })
    })

    it('Checking and Selecting Disabled Dropdown List', () => {
        // cy.get('#select2-7b0l-container').click();
        cy.get(".select2-selection__rendered[title$='Puerto Rico']").click();
        cy.get('.select2-dropdown>.select2-search>.select2-search__field').type('U')
        cy.get('.select2-results__options li').each(el => {
            cy.log(el.text())
            if(el.text().includes('United States')){
                cy.log(el.text());
                // cy.wrap(el).should('to.be.disabled')
                cy.wrap(el).should('have.attr', 'aria-disabled', 'true');
            }
        })
    })

    it('Select Category Options', () => {
        cy.get('select[name=files]').select('Java');
        cy.get('select[name=files]').should('contain', 'Java');
    })
})