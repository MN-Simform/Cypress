/// <reference types = "cypress" />

describe('Network Request / XHR', () => {

    it('Sending GET Request and Verifying its Length, Status, Headers', () => {
        cy.request('https://jsonplaceholder.cypress.io/comments').as('req')
        cy.get('@req').should((response) => {
            expect(response.body).to.have.length(500)
            expect(response.status).to.be.eq(200)
            expect(response).to.have.property('headers')
            expect(response).to.have.property('duration')
        })
    })

    it('Sending POST Request with Response Data', () => {
        cy.request('https://jsonplaceholder.cypress.io/users?_limit=1').as('req')
        cy.get('@req').its('body.0').then(userDetail => {
            cy.log(userDetail)
            expect(userDetail).property('id').to.be.a('number')
            expect(userDetail).property('name').to.be.a('string')

            // Sending Post Req with Payload
            cy.request('POST', 'https://jsonplaceholder.cypress.io/posts', {
                userId: userDetail.id,
                title: "Sending Post Req",
                body: "Paasing Payload by Post Request Using Cypress"
            })
        }).then(response => {
            expect(response.status).to.be.eq(201)
            expect(response.body).to.contain({ title: "Sending Post Req" })
            expect(response.body).property('id').to.be.a('number').and.to.be.gt(100)
            expect(response.body).property('userId').to.be.a('number')
        })
    })

    it('Intercept', () => {
        cy.visit('https://example.cypress.io/commands/network-requests')

        let message = 'This comment does not exist'

        cy.intercept('GET', '**/comments/*').as('getComment')
        cy.get('.network-btn').click();
        cy.wait('@getComment').its('response.statusCode').should('be.oneOf', [200, 304])


        cy.intercept('POST', '**/comments').as('postComment')
        cy.get('.network-post').click()
        cy.wait('@postComment').should(({ request, response }) => {
            expect(request.body).to.include('email')
            expect(request.headers).to.have.property('content-type')
            expect(response && response.body).to.have.property('name', 'Using POST in cy.intercept()')
        })

        cy.intercept({
            method: 'PUT',
            url: '**/comments/*',
        }, {
            statusCode: 404,
            body: { error: message },
            headers: { 'access-control-allow-origin': '*' },
            delayMs: 500,
        }).as('putComment')
        cy.get('.network-put').click()
        cy.wait('@putComment')
        cy.get('.network-put-comment').should('contain', message)
    })
})