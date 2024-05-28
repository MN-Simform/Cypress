/// <reference types = "Cypress" />

describe('Traversing Demo', () => {

    beforeEach(() => {
        cy.visit('https://example.cypress.io/commands/traversal');
    })

    it('childeren()', () => {
        // To get children of DOM element
        cy.get('.traversal-breadcrumb').children('.active').should('contain', 'Data')
    })

    it('closet()', () => {
        // To get the closest ancestor DOM element
        cy.get('.traversal-badge').closest('ul').should('have.class', 'list-group')
    })

    it('eq()', () => {
        //Get specific index of DOM element
        cy.get('ul[class$=traversal-list]>li').eq(0).should('contain', 'tabby')
    })

    it('filter()', () => {
        // To get DOM elements that match a specific selector
        cy.get('.traversal-nav>li').filter('.active').should('contain', 'About')
    })

    it('find()', () => {
        // To get descendant DOM elements of the selector
        cy.get('.pagination').find('li').should('have.length', 7).and('contain.html', 'a');
    }),

        it('first()', () => {
            // To get the first DOM element within elements
            cy.get('.traversal-table tbody tr td').first().should('contain', 1);
            cy.get('.traversal-table tbody tr').first().find('td').should('have.length', 3);
        })

    it('last()', () => {
        // To get the last DOM element within elements
        cy.get('div[class$=traversal-buttons]>.btn').last().should('have.value', 'Submit');
    })

    it('next() / prev()', () => {
        // To get the next sibling DOM element within elements
        // prev() similar to next(), get previous sibling
        cy.get('.traversal-ul').contains('apples').next().should('contain', 'oranges')
        cy.get('.traversal-ul').contains('oranges').prev().should('contain', 'apples')

    })

    it('nextAll() / prevAll()', () => {
        // To get all of the next sibling DOM elements within elements
        // prevAll() similar to nextAll()
        cy.get('.traversal-next-all').contains('apples').nextAll().should('have.length', 4)
        cy.get('.traversal-next-all').contains('grapes').prevAll().should('have.length', 4)
    })

    it('nextUntil() / prevUntil()', () => {
        // To get all of the next sibling DOM elements within elements until another element
        //prevUntil() similar to nextUntil()
        cy.get('#veggies').nextUntil('#nuts').should('have.length', 3)
        cy.get('#veggies').prevUntil('#fruits').should('have.length', 3)
    })

    it('not()', () => {
        // To remove DOM element(s) from the set of elements
        cy.get('.traversal-disabled .btn').not('[disabled]').should('not.contain', 'Disabled')
    })

    it('parent()', () => {
        // To get parent DOM element of elements
        cy.get('.traversal-mark').parent().should('contain', 'Morbi leo risus')
    })
})