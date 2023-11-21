describe('Login', () => {
  beforeEach(() => {
    cy.visit('login')
  });
  it('Realizar login com sucesso', () => {
    cy.get('#email').type('hiago-gil@hotmail.com')
    cy.get('#senha').type('102938gau')
    cy.contains('Entrar').click()
    cy.contains('Bem vindo').should('be.visible')
  })

  it('Realizar login inválido', () => {
    cy.get('#email').type('hiago-gil@hfadfdafdil.com')
    cy.get('#senha').type('102fdasfdsf8gau')
    cy.contains('Entrar').click() 
    cy.get('.alert').should('have.text', 'Problemas com o login do usuário')
  })
})