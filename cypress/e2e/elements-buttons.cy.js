import { gerarUsuario,gerarTelefone, gerarData, gerarMateria, gerarEnderecos, gerarIdade, gerarSalario, gerarDeptamento } from '../support/faker'

describe('Elements', () => {
    it('web tables', () => {
        cy.visit('/')
cy.contains('h5', 'Elements').click()
cy.contains('span', 'Buttons').click()

// Double click
cy.get('#doubleClickBtn').dblclick()
cy.get('#doubleClickMessage').should('contain', 'You have done a double click')

// Right click
cy.get('#rightClickBtn').rightclick()
cy.get('#rightClickMessage').should('contain', 'You have done a right click')

const agora = new Date()
    .toLocaleString('pt-BR')
    .replace(/[/: ]/g, '-')

        cy.screenshot(`Validacao-Buttons-${agora}`)

})
})





