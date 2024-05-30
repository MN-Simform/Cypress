/// <reference types = "Cypress" />

// describe('Drag and Drop', () => {

//     beforeEach(() => {
//         cy.visit('https://www.lambdatest.com/selenium-playground/drag-and-drop-demo')
//     })

//     it('Using Triggger', () => {
//         const dataTransfer = new DataTransfer();

//         cy.get('span[draggable$=true]').eq(0).contains('Draggable 1').trigger('dragstart', { dataTransfer });
//         cy.get('#mydropzone').trigger('dragover', { dataTransfer}).trigger('drop', { dataTransfer })
//         cy.get('#droppedlist').should('contain', 'Draggable 1')
//     })

//     it('By Using Plugin', () => {
//         cy.get('span[draggable$=true]').eq(0).drag('#mydropzone').then((res) => {
//             assert.isTrue(res);
//         });
//         cy.get('#droppedlist').should('contain', 'Draggable 1')
//     })

//     it('Drag and Drop both element by iterating them', () => {
//         cy.get('span[draggable$=true]').each((el) => {
//             // cy.wrap(el).drag('#mydropzone').then(res => {
//             //     assert.isTrue(res);
//             // })
//             cy.log('EL: ' + el.text())
//             cy.wrap(el).drag('#mydropzone').wait(1000);
//         })    
//     })

//     it('Using Move Method', () => {
//         cy.get('#draggable').scrollIntoView().move({ deltaX: 145, deltaY: 25 })
//         cy.get('#droppable').should('contain', 'Dropped');
//     })
// })

describe('Drag and Drop', () => {

    before(function () {
        cy.fixture('capital').then(function (capital) {
            this.capital = capital;
        })
    })

    beforeEach(() => {
        cy.visit('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')
    })

    it('Using Triggger and Mouse Events', () => {
        cy.get('.dragableBox#box1')
            .trigger('mousedown', { which: 1 })
            .trigger('mousemove', { force: true })

        cy.get('#box101')
            .trigger('mousemove')
            .trigger('mouseup', { force: true });
    })

    it.only('Draging Cities to its specific Countries', function () {
        cy.get('[class=dragableBox]:visible').each((el) => {
            for (let i = 0; i < Object.keys(this.capital).length; i++) {
                if (el.text().includes(this.capital[i][0])) {
                    cy.get(el).trigger('mousedown', { which: 1 })
                        .trigger('mousemove', { force: true })
                    cy.wait(500)

                    cy.contains(this.capital[i][1])
                        .trigger('mousemove')
                        .trigger('mouseup', { force: true });

                    cy.contains(this.capital[i][1]).should('contain', this.capital[i][0])
                }
            }
        })
    })
})