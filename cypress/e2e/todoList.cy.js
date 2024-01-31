/// <reference types="cypress" />

describe('Todo List', () => {

  beforeEach(() => {

    cy.visit('./src/index.html')

  })

  it('after visiting a page, asserts some text is visible', () => {

    cy
      .get('[data-testid="todo-list-header"]')
      .should('be.visible')

    })
})