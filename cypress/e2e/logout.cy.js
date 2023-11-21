describe('Logout', () => {
    beforeEach(() => {
        cy.Login()
    });
    it('sucesso', () => {
        cy.contains('Sair').click()
        cy.url().should('be.equal', 'https://seubarriga.wcaquino.me/logout')
    });
});