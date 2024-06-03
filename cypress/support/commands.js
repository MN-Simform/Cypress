// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import 'cypress-file-upload';
import '@4tw/cypress-drag-drop'
import 'cypress-iframe';

Cypress.on('uncaught:exception', (err, runnable) => {
    console.log(err.message)
    // Ignore the specific error regarding 'msie' property being undefined
    if (err.message.includes("Cannot read properties of undefined (reading 'msie')")) {
        return false;
    }
    if (err.message.includes("Cannot set properties of undefined (setting 'chrome')")) {
        return false;
    }
    // Ignore the script error from a cross-origin script
    if (err.message.includes("Script error.")) {
        return false;
    }
    // Allow other errors to fail the test
    return true;
});