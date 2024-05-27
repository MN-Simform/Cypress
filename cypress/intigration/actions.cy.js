/// <reference types = "Cypress" />

describe('Actions', () => {

    const email = 'nimit@gmail.com'
    const name = 'Nimit'

    beforeEach(() => {
        cy.visit('https://example.cypress.io/commands/actions')
    })

    describe('Example of type()', () => {
        it('type()', () => {
            cy.get('.action-email').type('nimit@gmail.com');
            cy.get('.action-email').should('have.value', 'nimit@gmail.com');
        })

        it('Typing Special Chars', () => {
            //typing special chars
            cy.get('.action-email').type('{leftarrow}{rightarrow}{uparrow}{downarrow}{del}{selectall}{backspace}');
        })

        it('Passing Value Throguh Var', () => {
            cy.get('.action-email').type(email);
            cy.get('.action-email').should('have.value', email);
        })

        it('Delaying 0.1 Sec Before Each Keypress', () => {
            cy.get('.action-email').type(email, { delay: 100 });
            cy.get('.action-email').should('have.value', email);
        })
    })

    describe('Checking Disabled TextField', () => {
        it('Typing in Disabled Field', () => {
            cy.get('.action-disabled').type(email, { force: true });
            cy.get('.action-disabled').should('have.value', email);
        })
    })

    describe('Example of focus()', () => {
        it('focus()', () => {
            cy.get('.action-focus').type('nimit');
            cy.get('.action-focus').should('have.class', 'focus')
                .prev().should('have.attr', 'style', 'color: orange;');
        })
    })

    describe('Example of blur()', () => {
        it('blur()', () => {
            cy.get('.action-blur').type('nimit')
            cy.get('.action-blur').blur()
            cy.get('.action-blur').should('have.class', 'error')
                .prev().should('have.attr', 'style', 'color: red;')
        })
    })

    describe('Example of clear()', () => {
        it('clear()', () => {
            cy.get('.action-clear').type(name)
            cy.get('.action-clear').should('have.value', name)
            cy.get('.action-clear').clear()
            cy.get('.action-clear').should('have.value', '')
        })
    })

    describe('Example of submit()', () => {
        it('submit()', () => {
            cy.get('.action-form')
                .find('[type="text"]').type(name)
            cy.get('.action-form').submit()
            cy.get('.action-form').next().should('contain', 'Your form has been submitted!')
        })
    })

    describe('Example of click()', () => {
        it('click()', () => {
            cy.get('#action-canvas').click()

            cy.get('#action-canvas').click('topLeft')
            cy.get('#action-canvas').click('top')
            cy.get('#action-canvas').click('topRight')
            cy.get('#action-canvas').click('left')
            cy.get('#action-canvas').click('right')
            cy.get('#action-canvas').click('bottomLeft')
            cy.get('#action-canvas').click('bottom')
            cy.get('#action-canvas').click('bottomRight')
        })

        it('Clicking Through Coords', () => {
            cy.get('#action-canvas')
            cy.get('#action-canvas').click(80, 75)
            cy.get('#action-canvas').click(170, 75)
            cy.get('#action-canvas').click(80, 165)
            cy.get('#action-canvas').click(100, 185)
            cy.get('#action-canvas').click(125, 190)
            cy.get('#action-canvas').click(150, 185)
            cy.get('#action-canvas').click(170, 165)
        })

        it('Clicking Multiple Elements', () => {
            cy.get('.action-labels>.label').click({ multiple: true })
        })
    })

    describe('Example of dbclick()', () => {
        it('dbclick()', () => {
            cy.get('.action-div').dblclick()
            cy.get('.action-div').should('not.be.visible')
            cy.get('.action-input-hidden').should('be.visible')
        })
    })

    describe('Example of rightclick()', () => {
        it('rightclick()', () => {
            cy.get('.rightclick-action-div').rightclick()
            cy.get('.rightclick-action-div').should('not.be.visible')
            cy.get('.rightclick-action-input-hidden').should('be.visible')
        })
    })
})