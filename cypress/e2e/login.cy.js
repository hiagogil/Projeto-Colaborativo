describe('Login', () => {
  it('Realizar login com sucesso', () => {
    cy.visit('login')
    cy.get('#email').type('hiago-gil@hotmail.com')
    cy.get('#senha').type('102938gau')
    cy.contains('Entrar').click()
    cy.contains('Bem vindo').should('be.visible')
  })
})