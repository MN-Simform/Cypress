/// <reference types = "Cypress" />

describe('Virtual DOM', () => {
    beforeEach(() => {
        cy.visit('https://www.lambdatest.com/selenium-playground/virtual-dom');
    });

    it('should verify the time zones are displayed', () => {
        cy.contains('h2', 'Current Time:').should('be.visible');
        cy.contains('h2', 'Current Time in USA:').should('be.visible');
        cy.contains('h2', 'Current Time in Korea:').should('be.visible');
    });

    it('should check the time updates dynamically', () => {
        cy.contains('h2', 'Current Time:').invoke('text').then((initialTime) => {
            cy.wait(2000);
            cy.contains('h2', 'Current Time:').invoke('text').should((updatedTime) => {
                expect(updatedTime).not.to.eq(initialTime);
            });
        });

        cy.contains('h2', 'Current Time in USA:').invoke('text').then((initialUSATime) => {
            cy.wait(2000);
            cy.contains('h2', 'Current Time in USA:').invoke('text').should((updatedUSATime) => {
                expect(updatedUSATime).not.to.eq(initialUSATime);
            });
        });

        cy.contains('h2', 'Current Time in Korea:').invoke('text').then((initialKoreaTime) => {
            cy.wait(2000);
            cy.contains('h2', 'Current Time in Korea:').invoke('text').should((updatedKoreaTime) => {
                expect(updatedKoreaTime).not.to.eq(initialKoreaTime);
            });
        });
    });
});

