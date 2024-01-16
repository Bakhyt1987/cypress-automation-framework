class Homepage_PO {
  visitHomepage() {
    cy.visit(Cypress.env("webdriveruni_homepage"));
  }

  clickOn_ContactUs_button() {
    cy.get("#contact-us").invoke("removeAttr", "target").click({ forse: true });
  }
}
export default Homepage_PO;
