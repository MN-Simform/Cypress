/// <reference types = "Cypress" />

describe('Alerts Demo', () => {

    beforeEach(() => {
        cy.visit('https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo')
    })

    it('Alert', () => {
        cy.get('div p button').eq(0).click();
        cy.on('window:alert', (txt) => {
            expect(txt).to.eq('I am an alert box!')
        })
    })

    it('Confirm True', () => {
        cy.get('div p button').eq(1).click();
        cy.on('window:confirm', (txt) => {
            expect(txt).to.contain('Press a button!')
            return true;
        })
        cy.get('#confirm-demo').should('be.visible')
        cy.get('#confirm-demo').should('contain', 'You pressed OK!');
    })

    it('Confirm False', () => {
        cy.get('div p button').eq(1).click();
        cy.on('window:confirm', (txt) => {
            expect(txt).to.contain('Press a button!')
            return false;
        })
        cy.get('#confirm-demo').should('be.visible')
        cy.get('#confirm-demo').should('contain', 'You pressed Cancel!');
    })

    it('Prompt', () => {
        cy.window().then((win) => {
            cy.stub(win, 'prompt').returns('Nimit');
            cy.get('div p button').eq(2).click();
        })
        cy.get('#prompt-demo').should('be.visible')
        cy.get('#prompt-demo').should('contain.text', "You have entered 'Nimit' !")
    })
})