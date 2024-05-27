/// <reference types = "Cypress" /> 

describe('Shadow Dom Demo', () => {
    
    beforeEach(() => {
        cy.visit('https://www.lambdatest.com/selenium-playground/shadow-dom');
    })

    it('Ex1', () => {
        // cy.get('#shadow_host input[type=text]').shadow().type('nimit');
        cy.get('#shadow_host').shadow().find('input[type=text]').type('nimit');
        cy.get('#shadow_host',{includeShadowDom: true}).shadow().find('input[type=email').type('nimit@gmail.com');
    })

    it('Submit', () => {
        // cy.get('button').click();
        cy.get('shadow-signup-form').shadow().find('button').click();
    })
})