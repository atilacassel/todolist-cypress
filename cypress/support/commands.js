Cypress.Commands.add('createTask', (task) => {
    cy.contains('h1', 'Your To-Do List').should('be.visible')
    cy.get('[data-testid="task-input"]').type(task)
    cy.get('[data-testid="add-button"]').click()
    cy.contains('span', task).should('be.visible')
})