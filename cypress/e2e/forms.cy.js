import { gerarUsuario,gerarTelefone, gerarData, gerarMateria } from '../support/faker'

describe('Forms', () => {

    describe('Form', () => {

  Cypress.on('uncaught:exception', (err, runnable) => {
    if (err.message.includes('findDOMNode')) {
      return false
   }
  })

    it('preencher o formulario', () => {
        const user = gerarUsuario()
        const telefone = gerarTelefone()
        const data = gerarData()
        const materia = gerarMateria()
        

    cy.visit('/')
    cy.contains('h5', 'Forms').click()
    cy.contains('span', 'Practice Form').click()
    cy.get('#firstName').type(user.nome)
    cy.get('#lastName').type(user.sobrenome)
    cy.get('#userEmail').type(user.email)
    cy.get('#gender-radio-1').click()
    cy.get('#userNumber').type(telefone.numero)
    cy.get('#dateOfBirthInput').click()
    cy.get('.react-datepicker__year-select').select(data.ano.toString())
    cy.get('.react-datepicker__month-select').select(data.mes)
    cy.contains('.react-datepicker__day', data.dia.toString()).click()
    cy.get('#subjectsInput').type(`${materia.materia}{enter}`)
    cy.get('#hobbies-checkbox-1').click()
    cy.get('#hobbies-checkbox-3').click()    

    cy.get('#uploadPicture')
    .selectFile('cypress/fixtures/Teste.jpeg')
    cy.get('#uploadPicture')
  .selectFile('cypress/fixtures/Teste.jpeg')
  .should(($input) => {
    expect($input[0].files[0].name).to.equal('Teste.jpeg')
  })
    cy.get('#currentAddress').type('Teste Cypress')
    cy.get('#react-select-3-input').click()
    cy.contains('NCR').click()
    cy.get('#react-select-4-input').click()
    cy.contains('Delhi').click()
    cy.get('#submit').click()

    cy.get('#example-modal-sizes-title-lg')
  .should('be.visible')
  .and('contain', 'Thanks for submitting the form')
    
  //screenshot com data e hora
  const agora = new Date()
  .toLocaleString('pt-BR')
  .replace(/[/: ]/g, '-')

cy.screenshot(`Validação do formulário - ${agora}`)
    cy.get('body').type('{esc}')

    //retornar home
    cy.get('img[src="/assets/Toolsqa-DZdwt2ul.jpg"]').click() 
    cy.get('img[alt="Selenium Online Training"]')
    
    })
  })
})


