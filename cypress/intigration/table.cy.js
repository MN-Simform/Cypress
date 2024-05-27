/// <reference types = "Cypress" />

describe('Table Data', () => {

    beforeEach(() => {
        cy.visit('https://www.lambdatest.com/selenium-playground/table-search-filter-demo')
    })

    it('Filtering Data', () => {
        cy.get('#task-table-filter').type('Dev');
        cy.get('#task-table tr').filter(':visible').should('have.length', 2);
        cy.get('#task-table tr td:nth-child(2)').eq(0).should('contain', 'Development');
        cy.get('#task-table tr td:nth-child(2)').each((el, index) => {
            if (el.text().includes('Development')) {
                cy.get('#task-table tr td:nth-child(2)').eq(index).next().next().then(status => {
                    const statusText = status.text();
                    expect(statusText).to.eql('completed')
                })
            }
        })
    })

    it('Finding Failed Status Throgh Iterating Table Cells', () => {
        cy.get('#task-table tr td:nth-child(4)').each((el) => {
                if (el.text().includes('failed')) {
                    cy.get('#task-table tr td:nth-child(2)').should('contain', 'JavaScript');
                }
        })
    })

    it('Searching Through Username', () => {
        cy.get('button.btn-filter').click();
        cy.get('thead>.filters>th>input[placeholder="Username"]').type('akdn')
        cy.get('.input-section table tr').filter(':visible').should('have.length', 2)
    })
})