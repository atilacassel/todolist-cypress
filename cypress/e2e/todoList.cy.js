/// <reference types="cypress" />

describe("Todo List", () => {
  beforeEach(() => {
    cy.visit("./src/index.html");
  });

  it("after visiting a page, asserts some text is visible", () => {
    cy.contains('h1', 'Your To-Do List').should("be.visible");
  });
});
