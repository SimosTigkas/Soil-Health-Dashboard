describe("Metric Toggle Test", () => {
  it("switches between Soil Moisture and Temperature", () => {
    cy.visit("http://localhost:5173");
    cy.contains("Soil Moisture");
    cy.contains("Temperature").click();
    cy.contains("Temperature");
  });
});
