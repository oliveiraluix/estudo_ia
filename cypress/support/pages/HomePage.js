export class HomePage {
  visit() {
    cy.visit('/');
    return this;
  }

  openSection(section) {
    cy.contains('h5', section).click();
    return this;
  }

  openCard(card) {
    cy.contains('span', card).click();
    return this;
  }

  goToForms() {
    return this.openSection('Forms').openCard('Practice Form');
  }

  goToElements() {
    return this.openSection('Elements');
  }

  returnHome() {
    cy.get('img[src="/assets/Toolsqa-DZdwt2ul.jpg"]').click();
    return this;
  }

  assertHomeVisible() {
    cy.get('img[alt="Selenium Online Training"]').should('be.visible');
    return this;
  }
}
