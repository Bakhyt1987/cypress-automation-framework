/// <reference types="Cypress" />
describe("Selector examples", () => {
  beforeEach(function () {
    cy.visit("/" + "Contact-Us/contactus.html");
  });
  it("Examples of Selectors via WebdriverUni Contact Us Page", () => {
    //By tag name
    cy.get("input");

    //By attribute name and value
    cy.get("input[name='first_name']");

    //By id
    cy.get("#contact_me");

    //By class
    cy.get(".feedback-input");

    //By multiple classes
    cy.get("[class='navbar navbar-inverse navbar-fixed-top']");

    //By two different attributes
    cy.get("[name='email'][placeholder='Email Address']");

    //By xpath
    cy.xpath("//input[@name='first_name']");
  });
});
