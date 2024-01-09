/// <reference types="cypress" />

describe("Test File Upload via webdriveruni ", () => {
  it("Upload file ... ", () => {
    cy.visit("http://www.webdriveruniversity.com");
    cy.get("#file-upload")
      .invoke("removeAttr", "target")
      .click({ force: true });

    cy.get("#myFile")
      .selectFile("cypress/fixtures/laptop.png")
      .then(() => {
        cy.get("#submit-button").click();
        cy.on("window:alert", (text) => {
          expect(text).to.eq("Your file has now been uploaded!");
        });
      });
  });

  it.only("Upload No file ... ", () => {
    cy.visit("http://www.webdriveruniversity.com");
    cy.get("#file-upload")
      .invoke("removeAttr", "target")
      .click({ force: true });

    cy.get("#submit-button").click();
    cy.on("window:alert", (text) => {
      expect(text).to.eq("You need to select a file to upload!");
    });
  });
});