/// <reference types="cypress" />

describe("Iterate over elements", () => {
  it("Log information of all hair care products", () => {
    cy.visit("https://automationteststore.com/");
    cy.get("a[href*='product/category&path=']").contains("Hair Care").click();

    cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
      cy.log("Index: " + index + " : " + $el.text());
    });
  });

  it("Add specific product to basket", () => {
    cy.visit("https://automationteststore.com/");
    cy.get("a[href*='product/category&path=']")
      .contains("Hair care", { matchCase: false })
      .click();
    const header = cy.get("h1 .maintext");
    cy.log(header);

    cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
      if ($el.text().startsWith("Curls to straight Shampoo")) {
        cy.wrap($el).click();
      }
    });
  });
});
