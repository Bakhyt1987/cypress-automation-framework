/// <reference types="cypress" />

describe("Iterate over elements", () => {
  beforeEach(function () {
    cy.visit("https://automationteststore.com/");
    cy.get("a[href*='product/category&path=']")
      .contains("Hair care", { matchCase: false })
      .click();
  });
  it("Log information of all hair care products", () => {
    cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
      cy.log("Index: " + index + " : " + $el.text());
    });
  });

  it("Add specific product to basket", () => {
    cy.selectProduct("Curls to straight Shampoo");
  });

  it("Add another specific product to basket", () => {
    cy.selectProduct("Seaweed Conditioner");
  });
  it("Add another specific product to basket", () => {
    cy.selectProduct("Eau Parfumee au The Vert Shampoo");
  });
});
