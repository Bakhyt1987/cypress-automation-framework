import Homepage_PO from "../../support/pageObjects/webdriver-uni/homepage_PO";
import Contact_Us_PO from "../../support/pageObjects/webdriver-uni/Contact_us_PO";

/// <reference types="Cypress" />

describe("Test Contact Us form via WebdriverUni", () => {
  Cypress.config("defaultCommandTimeout", 20000);
  const homepage_PO = new Homepage_PO();
  const contact_Us_po = new Contact_Us_PO();

  beforeEach(() => {
    homepage_PO.visitHomepage();
    cy.wait(3000);
    homepage_PO.clickOn_ContactUs_button();
    cy.fixture("example").then(function (data) {
      globalThis.data = data;
    });
  });

  it("Should be able to submit a successful submission via contact us form", () => {
    cy.document().should("have.a.property", "charset").and("eq", "UTF-8");
    cy.title().should("include", "WebDriver | Contact Us");
    cy.url().should("include", "contactus");
    contact_Us_po.contactForm_Submission(
      Cypress.env("first_name"),
      data.last_name,
      data.email,
      "How can i learn Cypress?",
      "h1",
      "Thank You for your Message!"
    );
  });

  it("Should not be able to submit a successful submission via contact us form2", () => {
    contact_Us_po.contactForm_Submission(
      Cypress.env("first_name"),
      data.last_name,
      " ",
      "How can i learn Cypress?",
      "body",
      "Error: Invalid email address"
    );
  });
});
