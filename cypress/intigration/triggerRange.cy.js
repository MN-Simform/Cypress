/// <reference types = "Cypress" />

describe('Range', () => {

    beforeEach(() => {
        cy.visit('https://example.cypress.io/commands/actions')
    })

    it('Demo', () => {
        cy.get('.trigger-input-range').scrollIntoView().invoke('val', 25)
        cy.get('.trigger-input-range').trigger('change')
        cy.get('.trigger-input-range').get('input[type=range]').siblings('p').should('have.text', '25')
    })
})