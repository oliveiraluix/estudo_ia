import { gerarUsuario,gerarTelefone, gerarData, gerarMateria, gerarEnderecos, gerarIdade, gerarSalario, gerarDeptamento } from '../support/faker'

describe('Elements', () => {
    it('web tables', () => {
            const user = gerarUsuario()
            const enderecos = gerarEnderecos()
            const idade = gerarIdade()
            const salario = gerarSalario()
            const departamento = gerarDeptamento()

        cy.visit('/')
        cy.contains('h5', 'Elements').click()
        cy.contains('span', 'Web Tables').click()
        cy.get('#addNewRecordButton').click()
        cy.get('#firstName').type(user.nome)
        cy.get('#lastName').type(user.sobrenome)
        cy.get('#userEmail').type(user.email)
        cy.get('#age').type(idade.idade)
        cy.get('#salary').type(salario.salario)
        cy.get('#department').type(departamento.departamento)
        cy.get('#submit').click()

        //validação
        cy.contains('td', user.email)
  .parent('tr')
  .should('contain', user.nome)
  .and('contain', user.sobrenome)
        

        const agora = new Date()
    .toLocaleString('pt-BR')
    .replace(/[/: ]/g, '-')

        cy.screenshot(`Validacao-WebTable-${agora}`)

        
        //retornar home
        cy.get('img[src="/assets/Toolsqa-DZdwt2ul.jpg"]').click() //voltar para home
        cy.get('img[alt="Selenium Online Training"]') //validar home

    })
  })