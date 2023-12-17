/// <reference types="cypress" />

describe("Alias and Invoke", () => {
  it("Validate a specific hair care product", () => {
    cy.visit("https://automationteststore.com/");
    cy.get("a[href*='product/category&path=']").contains("Hair Care").click();

    cy.get(".fixed_wrapper .prdocutname")
      .eq(0)
      .invoke("text")
      .as("productThumbnail");
    cy.get("@productThumbnail").its("length").should("be.gt", 5);
    cy.get("@productThumbnail").should("include", "Seaweed Conditioner");
  });

  it("Validate a special product", () => {
    cy.visit("https://automationteststore.com/");
    cy.get(".thumbnail").as("productThumbnail2");
    cy.get("@productThumbnail2").should("have.length", 16);
    cy.get("@productThumbnail2")
      .find(".productcart")
      .invoke("attr", "title")
      .as("productAddToCard")
      .should("include", "Add to Cart");
  });

  it.only("Calculate total of normal and sale products", () => {
    cy.visit("https://automationteststore.com/");
    cy.get(".thumbnail").as("productThumbnail");
    // cy.get("@productThumbnail")
    //   .find(".oneprice")
    //   .each(($el, index, $list) => {
    //     cy.log($el.text());
    //   });
    cy.get(".thumbnail").find(".oneprice").invoke("text").as("itemPrice");
    cy.get(".thumbnail").find(".pricenew").invoke("text").as("saleItemPrice");

    var itemTotal = 0;
    cy.get("@itemPrice").then(($linkText) => {
      var itemPriceTotal = 0;
      var itemPrice = $linkText.split("$");
      var i;
      for (i = 0; i < itemPrice.length; i++) {
        cy.log(itemPrice[i]);
        itemPriceTotal += Number(itemPrice[i]);
      }
      itemTotal += itemPriceTotal;
      cy.log("Non sale price items total: " + itemPriceTotal);
    });
    cy.get("@saleItemPrice")
      .then(($linkText) => {
        var saleItemPriceTotal = 0;
        var saleItemPrice = $linkText.split("$");
        var i;
        for (i = 0; i < saleItemPrice.length; i++) {
          cy.log(saleItemPrice[i]);
          saleItemPriceTotal += Number(saleItemPrice[i]);
        }
        itemTotal += saleItemPriceTotal;
        cy.log("Sale price items total: " + saleItemPriceTotal);
      })
      .then(() => {
        cy.log("Total price of all  products: " + itemTotal);
        expect(itemTotal).to.equal(660.5);
      });
  });
});
