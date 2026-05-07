export class ElementsPage {
  openCheckboxPage() {
    cy.contains('span', 'Check Box').click();
    return this;
  }

  expandTree() {
    cy.get('.rc-tree-switcher').click();
    return this;
  }

  selectDesktop() {
    cy.get('[aria-label="Select Desktop"]').click();
    return this;
  }

  openButtonsPage() {
    cy.contains('span', 'Buttons').click();
    return this;
  }

  doubleClickButton() {
    cy.get('#doubleClickBtn').dblclick();
    return this;
  }

  rightClickButton() {
    cy.get('#rightClickBtn').rightclick();
    return this;
  }

  assertDoubleClickMessage() {
    cy.get('#doubleClickMessage').should('contain', 'You have done a double click');
    return this;
  }

  assertRightClickMessage() {
    cy.get('#rightClickMessage').should('contain', 'You have done a right click');
    return this;
  }

  assertSelectedValues(values) {
    values.forEach(value => {
      cy.contains('.text-success', value).should('be.visible');
    });
    return this;
  }
}
