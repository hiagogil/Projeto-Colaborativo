import { faker } from "@faker-js/faker";
describe('Cadastro', () => {
    beforeEach(() => {cy.visit('cadastro')});
    it('Realizando um cadastro válido com dados aleatórios', () => {
        const user = {
            nome: faker.internet.userName(),
            email: faker.internet.email(),
            password: faker.internet.password()
        }
        cy.get('#nome').type(user.nome)
        cy.get('#email').type(user.email)
        cy.get('#senha').type(user.password)
        cy.contains('Cadastrar').click()
        cy.get('.alert').should('have.text', 'Usuário inserido com sucesso')
    });
});