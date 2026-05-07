export class FormsPage {
  fillPracticeForm({ nome, sobrenome, email, telefone, data, materia }) {
    cy.get('#firstName').type(nome);
    cy.get('#lastName').type(sobrenome);
    cy.get('#userEmail').type(email);
    cy.contains('label', 'Male').click();
    cy.get('#userNumber').type(telefone);
    cy.get('#dateOfBirthInput').click();
    cy.get('.react-datepicker__year-select').select(data.ano.toString());
    cy.get('.react-datepicker__month-select').select(data.mes);
    cy.contains('.react-datepicker__day:not(.react-datepicker__day--outside-month)', data.dia.toString()).click();
    cy.get('#subjectsInput').type(`${materia}{enter}`);
    cy.contains('label', 'Sports').click();
    cy.contains('label', 'Music').click();
    cy.get('#currentAddress').type('Teste Cypress');
    cy.get('#react-select-3-input').click().type('NCR{enter}');
    cy.get('#react-select-4-input').click().type('Delhi{enter}');
    return this;
  }

  uploadPicture(filename) {
    cy.get('#uploadPicture').selectFile(`cypress/fixtures/${filename}`);
    cy.get('#uploadPicture').should('have.prop', 'files').and('have.length', 1);
    return this;
  }

  submit() {
    cy.get('#submit').click();
    return this;
  }

  assertSubmissionModal() {
    cy.get('#example-modal-sizes-title-lg')
      .should('be.visible')
      .and('contain', 'Thanks for submitting the form');
    return this;
  }

  closeModal() {
    cy.get('body').type('{esc}');
    cy.get('#example-modal-sizes-title-lg').should('not.exist');
    return this;
  }

  takeScreenshot(alias) {
    const agora = new Date().toLocaleString('pt-BR').replace(/[/: ]/g, '-');
    cy.screenshot(`${alias}-${agora}`);
    return this;
  }
}
