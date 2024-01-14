/// <reference types="Cypress" />

describe("Test Contact Us form via WebdriverUni", () => {
  beforeEach(() => {
    cy.visit("http://www.webdriveruniversity.com");
    cy.get("#contact-us").invoke("removeAttr", "target").click({ force: true });
    cy.fixture("example").then(function (data) {
      globalThis.data = data;
    });
  });
  it("Should be able to submit a successful submission via contact us form", () => {
    cy.document().should("have.a.property", "charset").and("eq", "UTF-8");
    cy.title().should("include", "WebDriver | Contact Us");
    cy.url().should("include", "contactus");
    cy.get('[name="first_name"]').type(data.first_name);
    cy.get('[name="last_name"]').type(data.last_name);
    cy.get('[name="email"]').type(data.email);
    cy.get("textarea.feedback-input").type("How can i learn Cypress");
    cy.get('[type="submit"]').click();
    cy.get("#contact_reply > h1").should(
      "have.text",
      "Thank You for your Message!"
    );
  });

  it("Should be able to submit a successful submission via contact us form2", () => {
    cy.get('[name="first_name"]').type(data.first_name);
    cy.get('[name="last_name"]').type(data.last_name);
    cy.get("textarea.feedback-input").type("How can i learn Cypress");
    cy.get('[type="submit"]').click();
    cy.get("body").contains("Error");
  });
});
