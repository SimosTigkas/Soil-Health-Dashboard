describe("Metric Toggle Test", () => {
  it("switches between Moisture and Temperature", () => {
    cy.visit("http://localhost:5173");
    cy.contains("Moisture");
    cy.contains("Temperature").click();
    cy.contains("Temperature");
  });
});
