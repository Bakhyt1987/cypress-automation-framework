/// <reference types="Cypress" />

describe("Handle js alerts", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get("#popup-alerts")
      .invoke("removeAttr", "target")
      .click({ force: true });
  });
  it("Confirm js alerts contains correct text", () => {
    cy.get("#button1").click();
    cy.on("window:alert", (str) => {
      expect(str).to.equal("I am an alert box!");
    });
  });

  it("Validate js confirm alert box works correctly when clicking ok", () => {
    cy.get("#button4").click();
    cy.on("window:confirm", () => true);
    cy.get("#confirm-alert-text").contains("You pressed OK!");
  });

  it("Validate js confirm alert box works correctly when clicking Cancel", () => {
    cy.get("#button4").click();
    cy.on("window:confirm", () => false);
    cy.get("#confirm-alert-text").contains("You pressed Cancel!");
  });

  it("Validate js confirm alert box using a  stub", () => {
    const stub = cy.stub();
    cy.on("window:confirm", stub);
    cy.get("#button4")
      .click()
      .then(() => {
        expect(stub.getCall(0)).to.be.calledWith("Press a button!");
      })
      .then(() => {
        cy.on("window:confirm", () => true);
      })
      .then(() => {
        cy.get("#confirm-alert-text").contains("You pressed OK!");
      });
  });
});
