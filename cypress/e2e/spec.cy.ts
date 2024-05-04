describe("My First E2E Test", () => {
  it("Adding an item to the cart", () => {
    cy.visit('https://shell-staging.vercel.app/');
    cy.get("#5", {timeout: 40000}).should("contain", "Add to Cart").click();
    cy.get("#grand_total", {timeout: 40000}).should("contain", "909.99 DKK");
  })
})