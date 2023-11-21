import {faker} from '@faker-js/faker'

describe('Contas', () => {

    beforeEach(() => {
        
    cy.Login()
    });

    it('Adicionar contas', () => {

        const projeto = {
            nome: faker.datatype.uuid(),
        };
        cy.visit('/addconta')
        cy.get('#nome').type(projeto.nome)
        cy.contains('Salvar').click()
        cy.get('.alert').should('contain', 'Conta adicionada com sucesso!')
    });


});