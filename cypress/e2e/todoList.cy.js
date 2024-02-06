/// <reference types="cypress" />

describe('Todo List', () => {
  beforeEach(() => {
    cy.visit('./src/index.html')
  })

  it('Check if the text is visible after page load', () => {
    cy.contains('h1', 'Your To-Do List').should('be.visible')
  })

  it('Verify creation of a new task', () => {
    cy.get('[data-testid="task-input"]').type('New task')
    cy.get('[data-testid="add-button"]').click()
    cy.contains('span', 'New task').should('be.visible')
  })
})
