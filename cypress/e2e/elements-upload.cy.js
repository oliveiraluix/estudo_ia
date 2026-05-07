import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

describe('Elements', () => {
    it('upload and download', () => {
        cy.visit('/')
cy.contains('h5', 'Elements').click()
cy.contains('span', 'Upload and Download').click()
cy.get('#uploadFile')
      .selectFile('cypress/fixtures/Teste.jpeg')

    cy.get('#uploadedFilePath')
      .should('be.visible')
      .and('contain', 'Teste.jpeg')

const agora = new Date()
    .toLocaleString('pt-BR')
    .replace(/[/: ]/g, '-')

        cy.screenshot(`Validacao-Upload-Download-${agora}`)
    })
})






