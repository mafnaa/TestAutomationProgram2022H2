describe('our first test', () => {
    beforeEach(() => {
        cy.login('maxim.fominih', Cypress.env('pass'))
    })

    it('should do some stuff', () => {
        cy.visit('https://intranet.ctco.lv/billboard')
        cy.getTile('Food').assertCounterExists().click()
        cy.getTile('Homemade cakes and sweets')
    })

    it('should do some more stuff', () => {
        cy.visit('https://intranet.ctco.lv/billboard')
        cy.getTile('Electronics').assertCounterExists().click()
        cy.getTile('Galaxy Watch4 44mm Black')
    })

    it('should assert feedback form', () => {
        cy.visit('https://intranet.ctco.lv/billboard')
        cy.get('span').contains('Send us feedback').click()
        cy.getIframeBody().find('.ipt_uif_question_label').contains('Feedback')
        cy.getIframeBody().find('.ipt_uif_question_content textarea').type('Test')
    })

})