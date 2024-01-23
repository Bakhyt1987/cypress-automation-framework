/// <reference types="cypress" />

describe("Verify checkboxes via webdriveruni", () => {
  beforeEach(function () {
    cy.navigateTo_WebdriverUni_Checkbox_Page();
  });
  it("Check and validate checkbox", () => {
    cy.get("#checkboxes > :nth-child(1) > input222").as("option-1");
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
