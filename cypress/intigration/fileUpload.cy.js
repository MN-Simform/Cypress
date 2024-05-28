/// <reference types = "Cypress" />

describe('File Uplaod', () => {

    beforeEach(() => {
        cy.visit('https://www.lambdatest.com/selenium-playground/upload-file-demo');
    })

    it('Uploading File and Verify File is Uploaded Successfully', () => {
        cy.get('input[type=file]').attachFile('Simform_Wallpaper.jpg');
        cy.get('#error').should('contain', 'File Successfully Uploaded');
    })

    it('Uploading File and Veriy File is not Uploaded', () => {
        cy.get('input[type=file]').attachFile('example.json');
        cy.get('#error').should('contain', 'File type should be pdf, png, jpeg or jpg');
    })
})