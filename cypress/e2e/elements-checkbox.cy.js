import { gerarUsuario,gerarTelefone, gerarData, gerarMateria, gerarEnderecos } from '../support/faker'

describe('Elements', () => {
    it('checkbox', () => {
            const user = gerarUsuario()
            //const telefone = gerarTelefone()
            const enderecos = gerarEnderecos()

        cy.visit('/')
        cy.contains('h5', 'Elements').click()
        cy.contains('span', 'Check Box').click()
        cy.get('.rc-tree-switcher').click()
        cy.get('[aria-label="Select Desktop"]').click()
        

        //validação
        cy.contains('.text-success', 'desktop').should('be.visible')
        cy.contains('.text-success', 'notes').should('be.visible')
        cy.contains('.text-success', 'commands').should('be.visible')

        const agora = new Date()
    .toLocaleString('pt-BR')
    .replace(/[/: ]/g, '-')

        cy.screenshot(`Validacao-CheckBox-${agora}`)

        
        //retornar home
        cy.get('img[src="/assets/Toolsqa-DZdwt2ul.jpg"]').click() //voltar para home
        cy.get('img[alt="Selenium Online Training"]') //validar home

    })
  })