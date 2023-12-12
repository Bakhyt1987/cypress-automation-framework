/// <reference types="cypress" /> 

describe("Inspect Automation Test Store items using chain of commands", () => {
    it("Navigating to specific product pages", () => {
        cy.visit("https://automationteststore.com/");
        // const makeupLink = cy.get("a[href*='product/category&path=']").contains("Makeup")
        // const skincareLink = cy.get("a[href*='product/category&path=']").contains("Skincare")
        // makeupLink.click();
        // skincareLink.click();
        cy.get("a[href*='product/category&path=']").contains("Makeup").click();
        cy.get("a[href*='product/category&path=']").contains("Skincare").click();
    });

    it("Navigating to specific product pages", () => {
        cy.visit("https://automationteststore.com/");
        cy.get("a[href*='product/category&path=']").contains("mAKEUP",{matchCase:false}).click();
        const header = cy.get("h1 .maintext");
        cy.log(header);
    });

    it.only("Navigating to specific product pages", () => {
        cy.visit("https://automationteststore.com/");
        cy.get("a[href*='product/category&path=']").contains("mAKEUP",{matchCase:false}).click()
        cy.get('h1 .maintext').then(($headerText) => {
            const headerText = $headerText.text()
            cy.log("Found header Text: " + headerText)
            expect(headerText).is.eq('Makeup');
        })


    });
})   