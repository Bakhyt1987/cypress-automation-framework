/// <reference types="cypress" />

describe("Verify checkboxes via webdriveruni", () => {
  beforeEach(function () {
    cy.visit("http://www.webdriveruniversity.com");
    cy.get("#dropdown-checkboxes-radiobuttons")
      .invoke("removeAttr", "target")
      .click({ force: true });
  });
  it("Check and validate checkbox", () => {
    cy.get("#checkboxes > :nth-child(1) > input").as("option-1");
    cy.get("@option-1").check().should("be.checked");
  });

  it("Uncheck and validate checkbox", () => {
    cy.get("#checkboxes > :nth-child(5) > input").as("option-3");
    cy.get("@option-3").uncheck().should("not.be.checked");
  });

  it("Check and validate multiple checkbox", () => {
    cy.get("input[type='checkbox']").as("multiple checkboxes");
    cy.get("@multiple checkboxes")
      .check(["option-1", "option-2", "option-3", "option-4"])
      .should("be.checked");
  });
});
