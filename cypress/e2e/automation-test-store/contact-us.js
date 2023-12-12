/// <reference types="cypress" /> 
///// <reference types="cypress-xpath" /> 

describe("Test Contact Us form via Automation Test Store", () => {
    it("Should be able to submit a successful submission via contact us form", () => {
        cy.visit("https://automationteststore.com/");
        cy.get('a[href$="contact"]').click().then(function(contactusText) {
            cy.log("Clicked on link using text: " + contactusText.text())
        } );
        // cy.xpath('//a[contains(@href,"contact")]').click()
        cy.get('#ContactUsFrm_first_name').type("Bakhyt")
        cy.get('#ContactUsFrm_first_name').should('have.attr','name','first_name')
        cy.get('#ContactUsFrm_email').type("abc@gmail.com")
        cy.get('#ContactUsFrm_email').should('have.attr','name','email')
        cy.get('#ContactUsFrm_enquiry').type("asdals;dkladklasd;lasdk;laskdl;as")
        cy.get("button[title='Submit']").click()
        cy.get('.mb40 > :nth-child(3)').should('have.text','Your enquiry has been successfully sent to the store owner!')
        cy.log('Test has completed!')
    });
})
