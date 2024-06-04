/// <reference types = "Cypress" />

describe('Frame Demo', () => {

    beforeEach(() => {
        cy.visit('https://www.globalsqa.com/demo-site/draganddrop/');
    })

    it('Draging Image to Trash Section', () => {
        // cy.get('.newtabs').click();
        // cy.frameLoaded('.demo-frame:visible')
        // cy.iframe('iframe:eq(0)').find('#gallery li').eq(0).trigger('mousedown', { which: 1 }).trigger('mousemove')
        // cy.iframe('iframe:eq(0)').find('#trash').trigger('mousemove').trigger('mouseup', { force: true });

        cy.get('.newtabs').contains('Photo Manager').click();
        cy.get('.resp-tab-content-active .demo-frame').its('0.contentDocument.body').as('frameDemo')
        cy.get('@frameDemo').find('#gallery li').eq(0).trigger('mousedown', { which: 1 }).trigger('mousemove')
        cy.get('@frameDemo').find('#trash').trigger('mousemove').trigger('mouseup', { force: true });
    })

    it('Dragging Every Image to Trash', () => {
        // cy.frameLoaded('.demo-frame:visible')
        // cy.iframe('iframe:eq(0)').find('#gallery li:visible').each(el => {
        //     cy.log(el)
        //     cy.wrap(el).trigger('mousedown', { which: 1 }).trigger('mousemove')
        //     cy.iframe('iframe:eq(0)').find('#trash').trigger('mousemove').trigger('mouseup', { force: true });
        // })
        // cy.iframe('iframe:eq(0)').find('#trash ul li').should('have.length', 4)

        cy.get('.newtabs').contains('Photo Manager').click();
        cy.get('.resp-tab-content-active .demo-frame').its('0.contentDocument.body').as('frameDemo')
        cy.get('@frameDemo').find('#gallery li').each(el => {
            cy.wrap(el).trigger('mousedown', { which: 1 }).trigger('mousemove')
            cy.get('@frameDemo').find('#trash').trigger('mousemove').trigger('mouseup', { force: true });
        })
        cy.get('@frameDemo').find('#trash ul li').should('have.length', 4)
    })

    it('Dragging Every Image from Trash to Image Gallery', () => {
        // cy.frameLoaded('.demo-frame:visible')
        // cy.iframe('iframe:eq(0)').find('#gallery li:visible').each(el => {
        //     cy.wrap(el).trigger('mousedown', { which: 1 }).trigger('mousemove')
        //     cy.iframe('iframe:eq(0)').find('#trash').trigger('mousemove').trigger('mouseup', { force: true });
        // })
        // cy.wait(500)
        // cy.iframe('iframe:eq(0)').find('#trash li').each(el => {
        //     cy.wrap(el).trigger('mousedown', { which: 1 }).trigger('mousemove')
        //     cy.iframe('iframe:eq(0)').find('#gallery').trigger('mousemove').trigger('mouseup', { force: true })
        // })
        // cy.iframe('iframe:eq(0)').find('#gallery li:visible').should('have.length', 4)

        cy.get('.newtabs').contains('Photo Manager').click();
        cy.get('.resp-tab-content-active .demo-frame').its('0.contentDocument.body').as('frameDemo')
        cy.get('@frameDemo').find('#gallery li').each(el => {
            cy.wrap(el).trigger('mousedown', { which: 1 }).trigger('mousemove')
            cy.get('@frameDemo').find('#trash').trigger('mousemove').trigger('mouseup', { force: true });
        })
        cy.wait(500)
        cy.get('@frameDemo').find('#trash li').each(el => {
            cy.wrap(el).trigger('mousedown', { which: 1 }).trigger('mousemove')
            cy.get('@frameDemo').find('#gallery').trigger('mousemove').trigger('mouseup', { force: true })
        })
        cy.get('@frameDemo').find('#gallery li:visible').should('have.length', 4)
    })

    it('UnDraggable Element', () => {
        // cy.get('.newtabs>ul>li:visible').eq(1).click();
        // cy.frameLoaded('.demo-frame:visible')
        // cy.iframe('iframe:eq(1)').find('#draggable-nonvalid:visible').trigger('mousedown', { which: 1 }).trigger('mousemove')
        // cy.iframe('iframe:eq(1)').find('#droppable').trigger('mousemove').trigger('mouseup', { force: true })
        // cy.iframe('iframe:eq(1)').find('#droppable').should('not.have.class', 'ui-state-highlight')

        cy.get('.newtabs').contains('Accepted Elements').click();
        cy.get('.resp-tab-content-active .demo-frame').its('0.contentDocument.body').as('frameDemo')
        cy.get('@frameDemo').find('#draggable-nonvalid').trigger('mousedown', { which: 1 }).trigger('mousemove')
        cy.get('@frameDemo').find('#droppable').trigger('mousemove').trigger('mouseup', { force: true })
        cy.get('@frameDemo').find('#droppable').should('not.have.class', 'ui-state-highlight')
    })

    it('Draggable Element', () => {
        // cy.get('.newtabs>ul>li:visible').eq(1).click();
        // cy.frameLoaded('.demo-frame:visible')
        // cy.iframe('iframe:eq(1)').find('#draggable:visible').trigger('mousedown', { which: 1 }).trigger('mousemove')
        // cy.iframe('iframe:eq(1)').find('#droppable').trigger('mousemove').trigger('mouseup', { force: true })
        // cy.iframe('iframe:eq(1)').find('#droppable').should('have.class', 'ui-state-highlight')
        // cy.iframe('iframe:eq(1)').find('#droppable').should('contain', 'Dropped!')

        cy.get('.newtabs').contains('Accepted Elements').click();
        cy.get('.resp-tab-content-active .demo-frame').its('0.contentDocument.body').as('frameDemo')
        cy.get('@frameDemo').find('#draggable').trigger('mousedown', { which: 1 }).trigger('mousemove')
        cy.get('@frameDemo').find('#droppable').trigger('mousemove').trigger('mouseup', { force: true })
        cy.get('@frameDemo').find('#droppable').should('have.class', 'ui-state-highlight')
        cy.get('@frameDemo').find('#droppable').should('contain', 'Dropped!')
    })

    it('Using Move()', () => {
        // cy.get('.newtabs>ul>li:visible').eq(1).click();
        // cy.frameLoaded('.demo-frame:visible')
        // cy.iframe().find('#draggable:visible').move({ deltaX: 165, deltaY: 40 })
        // cy.iframe('iframe:eq(1)').find('#droppable').should('have.class', 'ui-state-highlight')
        // cy.iframe('iframe:eq(1)').find('#droppable').should('contain', 'Dropped!')

        cy.get('.newtabs').contains('Accepted Elements').click();
        cy.get('.resp-tab-content-active .demo-frame').its('0.contentDocument.body').as('frameDemo')
        cy.get('@frameDemo').find('#draggable').move({ deltaX: 165, deltaY: 40 })
        cy.get('@frameDemo').find('#droppable').should('have.class', 'ui-state-highlight')
        cy.get('@frameDemo').find('#droppable').should('contain', 'Dropped!')
    })
})