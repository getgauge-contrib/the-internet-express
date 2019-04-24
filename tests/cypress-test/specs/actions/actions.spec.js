/// <reference types="Cypress" />

context('Actions by cypress', () => {
  before(() => {
    cy.visit('/dropdown');
  })

  it('.select() - select an option in a <select> element', () => {
    cy.get('#dropdown').select('Option 1');
  })
})