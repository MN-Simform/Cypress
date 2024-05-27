/// <reference types = "Cypress" />

describe('api testing test suite', function () {

    it('GET API req test case', function () {
        
        cy.request('GET', 'https://reqres.in/api/users?page=2').then((response) => {
            cy.log(JSON.stringify(response.body));
            console.log(JSON.stringify(response.body));
            cy.log(response.body.data[0].first_name);
            cy.log(response.body.data[0].email);
            expect(response.status).to.eql(200);
            expect(response.body.data[1].first_name).to.eql("Lindsay");
 
            const responseLength = response.body.data.length;
 
            cy.log(responseLength);
            cy.wait(1000);
            for (let i = 0; i < responseLength; i++) {
                cy.log(JSON.stringify(response.body.data[i]));
            }
 
        })
    })
 
    it('POST API req test case', function () {
        // cy.request('POST', 'https://reqres.in/api/users', {
        //     "id": 1,
        //     "email": "george.bluth@reqres.in",
        //     "first_name": "George",
        //     "last_name": "Bluth",
        //     "avatar": "https://reqres.in/img/faces/1-image.jpg"
        //     }).then(function(res){
        //         expect(res.status).to.eql(201);
        //     });
 
        // Another way to do the same above
        cy.request({
            method: 'POST',
            url: 'https://reqres.in/api/users',
            body: JSON.stringify({
                "name": "morpheus",
                "job": "leader"
            }),
            headers: { 'content-type': 'application/json' }
        }).then(res => {
            cy.log(JSON.stringify(res.body))
            expect(res.status).to.eq(201);
        })
 
        // Another way using fixtures to grab data to do the same above
        cy.fixture('example.json').then(function (data) {
 
            cy.request({
                method: 'POST',
                url: 'https://reqres.in/api/users',
                body: `{
                    "name": "${data.name}",
                    "job": "leader"
                }`,
                headers: { 'content-type': 'application/json' }
            }).then(res => {
                cy.log(JSON.stringify(res.body))
                expect(res.status).to.eq(201);
            })
        })
 
    })
 
    it ('PUT API request test case', function() {
        cy.fixture('example.json').then(function (data) {
 
            cy.request({
                method: 'PUT',
                url: 'https://reqres.in/api/users/2',
                body: `{
                    "name": "${data.name}",
                    "job": "SDET"
                }`,
                headers: { 'content-type': 'application/json' }
            }).then(res => {
                cy.log(JSON.stringify(res.body))
                expect(res.status).to.eq(200);
            })
        })
    })
 
    it('DELETE API request test case', function() {
        cy.request({
            method: 'DELETE',
            url: 'https://reqres.in/api/users/2',
        }).then(res => {
            cy.log(JSON.stringify(res.body))
            expect(res.status).to.eq(204);
        })
    })
})