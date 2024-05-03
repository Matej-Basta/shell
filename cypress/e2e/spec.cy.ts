describe("My First E2E Test", () => {
  it("Adding an item to the cart", () => {
    cy.visit('http://localhost:3000/');
    cy.get("#5").should("contain", "Add to Cart").click();
    cy.get("#grand_total").should("contain", "909.99 DKK");
  })
})