/// <reference types = "Cypress" />

describe('Scroll Demo', () => {

    beforeEach(() => {
        cy.visit('https://example.cypress.io/commands/actions')
    })

    describe('Scroll Into View', () => {

        it('Horizontal Scroll', () => {
            cy.get('#scroll-horizontal button').should('not.be.visible')
            cy.get('#scroll-horizontal button').scrollIntoView().should('be.visible')
        })

        it('Vertical Scroll', () => {
            cy.get('#scroll-vertical button').should('not.be.visible')
            cy.get('#scroll-vertical button').scrollIntoView().should('be.visible')
        })

        it('Sroll Both', () => {
            cy.get('#scroll-both button').scrollIntoView()
            cy.get('#scroll-both button').should('be.visible')
        })
    })

    describe('Scroll To', () => {
        it('Scroll To', () => {
            cy.scrollTo('bottom')
            cy.get('#scrollable-horizontal').scrollTo('right')
            cy.get('#scrollable-vertical').scrollTo(250, 250)
            cy.get('#scrollable-both').scrollTo('75%', '25%')
            cy.get('#scrollable-vertical').scrollTo('center', { easing: 'linear' })
            cy.get('#scrollable-both').scrollTo('center', { duration: 2000 })
        })
    })
})