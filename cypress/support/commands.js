Cypress.Commands.add('Login', () => {
    cy.visit('login')
    cy.get('#email').type('hiago-gil@hotmail.com')
    cy.get('#senha').type('102938gau')
    cy.contains('Entrar').click()
})