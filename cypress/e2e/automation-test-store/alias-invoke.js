/// <reference types="cypress" />

describe("Alias and Invoke", () => {
  it("Validate a specific hair care product", () => {
    cy.visit("https://automationteststore.com/");
    cy.get("a[href*='product/category&path=']").contains("Hair Care").click();

    cy.get(".fixed_wrapper .prdocutname")
      .eq(0)
      .invoke("text")
      .as("productThumbnail");
    cy.get("@productThumbnail").its("length").should("be.gt", 5);
    cy.get("@productThumbnail").should("include", "Seaweed Conditioner");
  });

  it.only("Validate a special product", () => {
    cy.visit("https://automationteststore.com/");
    cy.get(".thumbnail").as("productThumbnail2");
    cy.get("@productThumbnail2").should("have.length", 16);
    cy.get("@productThumbnail2")
      .find(".productcart")
      .invoke("attr", "title")
      .as("productAddToCard")
      .should("include", "Add to Cart");
  });
});
