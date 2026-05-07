import { gerarUsuario,gerarTelefone, gerarData, gerarMateria, gerarEnderecos } from '../support/faker'

describe('Elements', () => {
    it('text box', () => {
            const user = gerarUsuario()
            //const telefone = gerarTelefone()
            const enderecos = gerarEnderecos()

        cy.visit('/')
        cy.contains('h5', 'Elements').click()
        cy.contains('span', 'Text Box').click()
        cy.get('#userName').type(user.nomeCompleto)
        cy.get('#userEmail').type(user.email)
        cy.get('#currentAddress').type(enderecos.endereco1)
        cy.get('#permanentAddress').type(enderecos.endereco2)
        cy.get('#submit').click()
        

        //validação
        cy.get('#output')
  .should('contain', user.nomeCompleto)
  .and('contain', user.email)
  .and('contain', enderecos.endereco1)
  .and('contain', enderecos.endereco2)

  const agora = new Date()
    .toLocaleString('pt-BR')
    .replace(/[/: ]/g, '-')

        cy.screenshot(`Validacao-TextBox-${agora}`)

        
        //retornar home
        cy.get('img[src="/assets/Toolsqa-DZdwt2ul.jpg"]').click() //voltar para home
        cy.get('img[alt="Selenium Online Training"]') //validar home

    })
  })