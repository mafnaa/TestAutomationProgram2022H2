export const login = (username, password) => {
    cy.get("[id='username']").type(username, {log: false});
    cy.get("[id='password']").type(password, {log: false});
    cy.get("[name='submit']").click();
}