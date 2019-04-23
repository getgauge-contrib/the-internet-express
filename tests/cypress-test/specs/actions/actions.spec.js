/// <reference types="Cypress" />

context('Actions by cypress', () => {
  before(() => {
    cy.visit('http://localhost:3000/dropdown');
  })

  it('.select() - select an option in a <select> element', () => {
    cy.get('#dropdown').select('Option 1');
  })
})