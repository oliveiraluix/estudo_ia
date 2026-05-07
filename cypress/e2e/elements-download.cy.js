import { gerarUsuario,gerarTelefone, gerarData, gerarMateria, gerarEnderecos, gerarIdade, gerarSalario, gerarDeptamento } from '../support/faker'

describe('Elements', () => {
    it('upload and download', () => {
        cy.visit('/')
cy.contains('h5', 'Elements').click()
cy.contains('span', 'Upload and Download').click()
cy.get('#downloadButton').click()

    cy.readFile('cypress/downloads/sampleFile.jpeg')
      .should('exist')

const agora = new Date()
    .toLocaleString('pt-BR')
    .replace(/[/: ]/g, '-')

        cy.screenshot(`Validacao-Upload-Download-${agora}`)
    })
})






