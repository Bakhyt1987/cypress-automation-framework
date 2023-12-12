/// <reference types="cypress" /> 

describe("Inspect Automation Test Store items using chain of commands", () => {
    it("Navigating to specific product pages", () => {
        cy.visit("https://automationteststore.com/");
        cy.get("a[href*='product/category&path=']").contains("Makeup").click();
        cy.get("a[href*='product/category&path=']").contains("Skincare").click();
    });

    it("Navigating to specific product pages", () => {
        cy.visit("https://automationteststore.com/");
        cy.get("a[href*='product/category&path=']").contains("mAKEUP",{matchCase:false}).click();
        const header = cy.get("h1 .maintext");
        cy.log(header);
    });

    it("Navigating to specific product pages", () => {
        cy.visit("https://automationteststore.com/");
        cy.get("a[href*='product/category&path=']").contains("mAKEUP",{matchCase:false}).click()
        cy.get('h1 .maintext').then(($headerText) => {
            const headerText = $headerText.text()
            cy.log("Found header Text: " + headerText)
            expect(headerText).is.eq('Makeup');
        })
    });

    it.only("Validate properties of the Contact Us Page", () => {
        cy.visit("https://automationteststore.com/index.php?rt=content/contact");
        // Uses cypress commands and chaining
        cy.contains("#ContactUsFrm","Contact Us Form").find("#field_11").should("contain","First name"); 

        //jquery approach

        //embedded commands


    });


})   