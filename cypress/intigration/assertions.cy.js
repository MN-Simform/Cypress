/// <reference types = "Cypress" />

describe('Assertions Demo', () => {

    beforeEach(() => {
        cy.visit('https://example.cypress.io/commands/assertions')
    })

    describe('Implicit Assertions', () => {

        it('should()', () => {
            cy.get('.assertion-table').find('tbody tr:last').should('have.class', 'success')
                .find('td').first()
                .should('have.text', 'Column content')
                .should('have.html', 'Column content')
                .should('contain', 'Column content')
                .should('match', 'td')
                .invoke('text')
                .should('match', /Column content/i)
        })

        it('and()', () => {
            cy.get('.assertions-link').scrollIntoView()
                .should('have.attr', 'href')
                .and('include', 'cypress.io')
        })

    })

    describe('Explicit Assertions', () => {

        it('Demo1', () => {
            cy.get('.assertions-p').find('p')
                .should(($p) => {
                    let texts = $p.map((i, el) => Cypress.$(el).text())
                    texts = texts.get()
                    expect(texts).to.have.length(3)
                    expect(texts, 'has expected text in each paragraph').to.deep.eq([
                        'Some text from first p',
                        'More text from second p',
                        'And even more text from third p',
                    ])
                })
        })
    })
})