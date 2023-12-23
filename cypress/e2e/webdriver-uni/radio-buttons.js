/// <reference types="cypress" />

describe("Verify radio buttons via webdriveruni", () => {
  it("Check and validate checkbox", () => {
    cy.visit("http://www.webdriveruniversity.com");
    cy.get("#dropdown-checkboxes-radiobuttons")
      .invoke("removeAttr", "target")
      .click({ force: true });
    cy.get("#radio-buttons").find("[type='radio']").as("radio-buttons");
    cy.get("@radio-buttons").eq(1).check();
    cy.get("[value='blue']").should("be.checked");
    cy.get("@radio-buttons").check(["orange", "blue"]).should("be.checked");
  });

  it.only("Validate states of specific radio buttons", () => {
    cy.visit("http://www.webdriveruniversity.com");
    cy.get("#dropdown-checkboxes-radiobuttons")
      .invoke("removeAttr", "target")
      .click({ force: true });

    cy.get("[value='lettuce']").as("lettuce");
    cy.get("[value='pumpkin']").as("pumpkin");
    cy.get("[value='cabbage']").as("cabbage");

    cy.get("@lettuce").should("not.be.checked");
    cy.get("@lettuce").check();
    cy.get("@lettuce").should("be.checked");

    cy.get("@pumpkin").should("not.be.checked");

    cy.get("@cabbage").should("be.disabled");
  });
});
