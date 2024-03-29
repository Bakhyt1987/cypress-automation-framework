class Homepage_PO {
  visitHomepage() {
    cy.visit(Cypress.env("webdriveruni_homepage"), { timeout: 60000 });
  }

  clickOn_ContactUs_button() {
    cy.get("#contact-us")
      .invoke("removeAttr", "target")
      .click({ forse: true }, { timeout: 8000 });
  }
}
export default Homepage_PO;
