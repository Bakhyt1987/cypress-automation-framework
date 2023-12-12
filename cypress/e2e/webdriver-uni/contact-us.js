/// <reference types="Cypress" /> 

describe("Test Contact Us form via WebdriverUni", () => {
    it("Should be able to submit a successful submission via contact us form", () => {
        cy.visit("contactus.html")
        cy.document().should('have.a.property','charset').and('eq','UTF-8')
        cy.title().should('include','WebDriver | Contact Us')
        cy.url().should('include','contactus')
        //cy.get('#contact-us').click({force: true})
        cy.get('[name="first_name"]').type('Joe')
        cy.get('[name="last_name"]').type('Budden')
        cy.get('[name="email"]').type("Joeb@gmail.com")
        cy.get('textarea.feedback-input').type("How can i learn Cypress")
        cy.get('[type="submit"]').click()
        cy.get('#contact_reply > h1').should('have.text','Thank You for your Message!')
    });

    it.only("Should be able to submit a successful submission via contact us form", () => {
        cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html")
        cy.get('[name="first_name"]').type("Rick")
        cy.get('[name="last_name"]').type("budden")
        cy.get('textarea.feedback-input').type("How can i learn Cypress")
        cy.get('[type="submit"]').click()
        cy.get('body').contains('Error')
    });
})
