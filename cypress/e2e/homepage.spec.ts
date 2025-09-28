/// <reference types="cypress" />

describe("HomePage E2E", () => {
  it("отображает список персонажей и работает поиск", () => {
    // Замени на URL локального dev-сервера
    cy.visit("http://localhost:5173");

    // Проверяем заголовок
    cy.contains("Star Wars Characters").should("exist");

    // Проверяем, что есть хотя бы один CharacterCard
    cy.get("[data-testid^=character-card]").should(
      "have.length.greaterThan",
      0
    );

    // Вводим текст в поиск
    cy.get("input[type=text]").type("Luke");

    // Проверяем, что фильтр применяется (например, только Luke Skywalker)
    cy.contains("Luke Skywalker").should("exist");
  });
});
