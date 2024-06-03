/// <reference types = "Cypress" />

describe('Hover Demo', () => {

    beforeEach(() => {
        cy.visit('https://stqatools.com/demo/MouseHover.php')
    })

    it('Hovering on Element', () => {
        cy.get('.dropdown-content').invoke('show').click();
        cy.contains('Link 1').click();
        cy.get('.modal-content').should('contain', 'You click on Dropdown hover')
    })
})