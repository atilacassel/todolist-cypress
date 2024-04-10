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

  it('Create and complete task', () => {
    cy.createTask('New task')
    cy.contains('li', 'New task').should('not.have.class', 'completed')
    cy.get('[type="checkbox"]').click()
    cy.contains('li', 'New task').should('have.class', 'completed')
  })

  it('Delete task', () => {
    cy.createTask('New task')
    cy.contains('li', 'New task').should('be.visible')
    cy.contains('li', 'New task')
    .find('button')
    .contains('Delete')
    .click()
    cy.get('[data-testid="task-list"]').should('not.contain', 'New task')
  })
})
