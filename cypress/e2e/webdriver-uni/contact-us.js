/// <reference types="Cypress" />

describe("Test Contact Us form via WebdriverUni", () => {
  beforeEach(() => {
    cy.visit(
      Cypress.env("webdriveruni_homepage") + "Contact-Us/contactus.html"
    );
    cy.fixture("example").then(function (data) {
      globalThis.data = data;
    });
  });
  it("Should be able to submit a successful submission via contact us form", () => {
    cy.document().should("have.a.property", "charset").and("eq", "UTF-8");
    cy.title().should("include", "WebDriver | Contact Us");
    cy.url().should("include", "contactus");
    cy.webdriverUni_ContactForm_Submission(
      Cypress.env("first_name"),
      data.last_name,
      data.email,
      "How can i learn Cypress?",
      "h1",
      "Thank You for your Message!"
    );
  });

  it("Should not be able to submit a successful submission via contact us form2", () => {
    cy.webdriverUni_ContactForm_Submission(
      data.first_name,
      data.last_name,
      " ",
      "How can i learn Cypress?",
      "body",
      "Error: Invalid email address"
    );
  });
});
