/// <reference types="cypress" /> 

describe("Iterate over elements", () => {
    it("Log information of all hair care products", () => {
        cy.visit("https://automationteststore.com/");
        cy.get("a[href*='product/category&path=']").contains("Hair care").click();
        
    });

    it("Add specific product to basket", () => {
        cy.visit("https://automationteststore.com/");
        cy.get("a[href*='product/category&path=']").contains("Hair care",{matchCase:false}).click();
        const header = cy.get("h1 .maintext");
        cy.log(header);
    });
});


 