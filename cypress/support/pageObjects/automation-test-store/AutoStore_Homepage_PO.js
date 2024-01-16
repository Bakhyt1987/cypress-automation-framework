class AutoStore_Homepage_PO {
  accessHomepage() {
    cy.visit(Cypress.env("autostore_homepage"));
  }

  clickOn_HairCare_Link() {
    cy.get("a[href*='product/category&path=']")
      .contains("Hair care", { matchCase: false })
      .click();
  }
}
export default AutoStore_Homepage_PO;
