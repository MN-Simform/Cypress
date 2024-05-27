/// <reference types = "Cypress" />


describe('Testing Checkbox', () => {

    beforeEach(() => {
        cy.visit('https://www.lambdatest.com/selenium-playground/checkbox-demo')
    })

    it('Checking Checkbox', () => {
        cy.get('#isAgeSelected').check();
        cy.get('#isAgeSelected').should('be.checked');
    })

    it('Uncheking Checkbox', () => {
        cy.get('#isAgeSelected').uncheck();
        cy.get('#isAgeSelected').should('not.be.checked');
    })

    it('Checking Disabled Checkbox', () => {
        cy.contains('Option 3').prev().should('be.disabled');
        cy.contains('Option 3').prev().check({ force: true }).should('be.checked')
    })

    it('Checking Multiple Checkbox', () => {
        cy.get('.cb-element').each(($el) => {
            cy.wrap($el).click();
        })
    })
    
    it('Checking Multiple Checkbox Using multiple:true', () => {
        cy.get('.cb-element').click({multiple: true})
    })

    it('Clicking on Check All Button and Verify Checkbox is Checked', () => {
        cy.get('input[type=button]').click();
        cy.get('.cb-element').each(el => {
            cy.wrap(el).should('be.checked')
        })
    })

    it('Clicking on Uncheck All Button and Verify All Checkbox is Unchecked', () => {
        cy.get('input[type=button]').click().wait(1000).click();
        cy.get('.cb-element').each(el => {
            cy.wrap(el).should('not.be.checked');
        })
    })
}) 