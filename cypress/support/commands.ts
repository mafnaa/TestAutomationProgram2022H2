/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
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



Cypress.Commands.add('login', (username, password) => {
    cy.session(username, () => {
        cy.visit('https://cas.ctco.lv/')
        cy.get('#username').type(username)
        cy.get('#password').type(password, {log: false})
        cy.get('.btn-submit').click()
        cy.get('.titleLabel').contains(username)
    })
})

//
// -- This is a child command --
Cypress.Commands.add('assertCounterExists', {prevSubject: 'element'}, (subject) => {
    cy.wrap(subject).find('mark').should('have.class', 'count').and('is.visible')
})


Cypress.Commands.add('getIframeBody', () => {
    cy.get('iframe').its('0.contentDocument.body', {timeout: 10000}).should('not.be.empty').then(cy.wrap);
});


// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//

Cypress.Commands.add('getTile', (label: string) => {
    cy.get('#main-container li.product').contains(label)
})

declare namespace Cypress {
    interface Chainable {
        getTile(label: string): Chainable<void>

        assertCounterExists(): Chainable<Element>

        getIframeBody(): Chainable<Element>

        login(username: string, password: string): Chainable<void>

        // dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
        //
        // visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
    }
}
