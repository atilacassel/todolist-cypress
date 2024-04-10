/// <reference types="cypress" />

describe('Todo List', () => {
  beforeEach(() => {
    cy.visit('./src/index.html')
  })

  it('Check if the text is visible after page load', () => {
    cy.contains('h1', 'Your To-Do List').should('be.visible')
  })

  it('Verify creation of a new task', () => {
    const taskText = 'New task'
    cy.get('[data-testid="task-input"]').type(taskText)
    cy.get('[data-testid="add-button"]').click()
    cy.contains('span', taskText).should('be.visible')
  })

  it('Create and complete task', () => {
    const taskText = 'New task'
    cy.createTask(taskText)
    cy.contains('li', taskText).should('not.have.class', 'completed')
    cy.get('[type="checkbox"]').click()
    cy.contains('li', taskText).should('have.class', 'completed')
  })

  it('Delete task', () => {
    const taskText = 'New task'
    cy.createTask(taskText)
    cy.contains('li', taskText).should('be.visible')
    cy.contains('li', taskText).find('button').contains('Delete').click()
    cy.get('[data-testid="task-list"]').should('not.contain', taskText)
  })
})
