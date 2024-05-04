describe("My First E2E Test", () => {
  it("Adding an item to the cart", () => {
    cy.visit('https://shell-orcin.vercel.app/');
    cy.get("#5").should("contain", "Add to Cart").click();
    cy.get("#grand_total").should("contain", "0.00 DKK");
  })
})