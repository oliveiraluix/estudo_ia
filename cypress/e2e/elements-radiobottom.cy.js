import { gerarUsuario,gerarTelefone, gerarData, gerarMateria, gerarEnderecos } from '../support/faker'

describe('Elements', () => {
    it('radio buttom', () => {
            const user = gerarUsuario()
            //const telefone = gerarTelefone()
            const enderecos = gerarEnderecos()

        cy.visit('/')
        cy.contains('h5', 'Elements').click()
        cy.contains('span', 'Radio Button').click()
        cy.contains('Do you like the site?').should('be.visible')
        cy.get('#yesRadio').click()
        cy.contains('You have selected Yes').should('be.visible')

        // screenshot com data e hora
        const agora = new Date()
    .toLocaleString('pt-BR')
    .replace(/[/: ]/g, '-')

        cy.screenshot(`Validacao-Radio-Button-${agora}`)
       
        
        //retornar home
        cy.get('img[src="/assets/Toolsqa-DZdwt2ul.jpg"]').click() //voltar para home
        cy.get('img[alt="Selenium Online Training"]') //validar home

    })
  })