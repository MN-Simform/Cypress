/// <reference types = "Cypress" />

describe('Frame Demo', () => {

    beforeEach(() => {
        cy.visit('https://www.globalsqa.com/demo-site/draganddrop/');
    })

    it.only('Draging Image to Trash Section', () => {

        // const dataTransfer = new DataTransfer();

        // cy.frameLoaded('.demo-frame:visible')
        // cy.iframe('iframe:eq(0)').find('#gallery li:visible').eq(0).trigger('dragstart', { dataTransfer });
        // cy.iframe('iframe:eq(0)').find('#trash').trigger('dragover', { dataTransfer}).trigger('drop', { dataTransfer })
        cy.get('.newtabs').click();
        cy.frameLoaded('.demo-frame:visible')
        cy.iframe('iframe:eq(0)').find('#gallery li:visible', { timeout: 10000 }).eq(0).trigger('mousedown', { which: 1 }).trigger('mousemove')
        cy.iframe('iframe:eq(0)').find('#trash', { timeout: 10000 }).trigger('mousemove').trigger('mouseup', { force: true });
    })

    it('Dragging Every Image to Trash', () => {
        cy.frameLoaded('.demo-frame:visible')
        cy.iframe('iframe:eq(0)').find('#gallery li:visible').each(el => {
            cy.log(el)
            cy.wrap(el).trigger('mousedown', { which: 1 }).trigger('mousemove')
            cy.iframe('iframe:eq(0)').find('#trash').trigger('mousemove').trigger('mouseup', { force: true });
        })
        cy.iframe('iframe:eq(0)').find('#trash ul li').should('have.length', 4)
    })

    it('Dragging Every Image from Trash to Image Gallery', () => {
        cy.frameLoaded('.demo-frame:visible')
        cy.iframe('iframe:eq(0)').find('#gallery li:visible').each(el => {
            cy.wrap(el).trigger('mousedown', { which: 1 }).trigger('mousemove')
            cy.iframe('iframe:eq(0)').find('#trash').trigger('mousemove').trigger('mouseup', { force: true });
        })
        cy.wait(500)
        cy.iframe('iframe:eq(0)').find('#trash li').each(el => {
            cy.wrap(el).trigger('mousedown', { which: 1 }).trigger('mousemove')
            cy.iframe('iframe:eq(0)').find('#gallery').trigger('mousemove').trigger('mouseup', { force: true })
        })
        cy.iframe('iframe:eq(0)').find('#gallery li:visible').should('have.length', 4)
    })

    it('UnDraggable Element', () => {
        cy.get('.newtabs>ul>li:visible').eq(1).click();
        cy.frameLoaded('.demo-frame:visible')
        cy.iframe('iframe:eq(1)').find('#draggable-nonvalid:visible').trigger('mousedown', { which: 1 }).trigger('mousemove')
        cy.iframe('iframe:eq(1)').find('#droppable').trigger('mousemove').trigger('mouseup', { force: true })
        cy.iframe('iframe:eq(1)').find('#droppable').should('not.have.class', 'ui-state-highlight')
    })

    it('Draggable Element', () => {
        cy.get('.newtabs>ul>li:visible').eq(1).click();
        cy.frameLoaded('.demo-frame:visible')
        cy.iframe('iframe:eq(1)').find('#draggable:visible').trigger('mousedown', { which: 1 }).trigger('mousemove')
        cy.iframe('iframe:eq(1)').find('#droppable').trigger('mousemove').trigger('mouseup', { force: true })
        cy.iframe('iframe:eq(1)').find('#droppable').should('have.class', 'ui-state-highlight')
        cy.iframe('iframe:eq(1)').find('#droppable').should('contain', 'Dropped!')
    })

    it('Using Move()', () => {
        cy.get('.newtabs>ul>li:visible').eq(1).click();
        cy.frameLoaded('.demo-frame:visible')
        cy.iframe('iframe:eq(1)').find('#draggable:visible').move({ deltaX: 165, deltaY: 40 })
        cy.iframe('iframe:eq(1)').find('#droppable').should('have.class', 'ui-state-highlight')
        cy.iframe('iframe:eq(1)').find('#droppable').should('contain', 'Dropped!')
    })
})