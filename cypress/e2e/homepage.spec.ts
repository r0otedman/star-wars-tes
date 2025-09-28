/// <reference types="cypress" />

describe("HomePage E2E", () => {
  it("отображает список персонажей и работает поиск", () => {
    cy.visit("https://cozy-youtiao-11183e.netlify.app/");

    cy.contains("Star Wars Characters").should("exist");

    cy.get("[data-testid^=character-card]").should(
      "have.length.greaterThan",
      0
    );

    cy.get("input[type=text]").type("Luke");

    cy.contains("Luke Skywalker").should("exist");
  });
});
