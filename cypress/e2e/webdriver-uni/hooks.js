/// <reference types="Cypress" />
// before(() => {
//   // root-level hook
//   // runs once before all tests
// });

// beforeEach(() => {
//   // root-level hook
//   // runs before every test block
// });

// afterEach(() => {
//   // runs after each test block
// });

// after(() => {
//   // runs once all tests are done
// });

describe("Hooks", () => {
  before(() => {
    cy.log("runs once before all tests in the block");
  });
  after(() => {
    cy.log("runs once after all tests in the block");
  });

  beforeEach(() => {
    cy.log("runs before each test in the block");
  });

  afterEach(() => {
    cy.log("runs after each test in the block");
  });

  it("Example test1", () => {
    cy.log("example test1");
  });

  it("Example test2", () => {
    cy.log("example test2");
  });
});
