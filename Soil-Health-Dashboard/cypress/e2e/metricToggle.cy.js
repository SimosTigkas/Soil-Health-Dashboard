describe("Metric Toggle & MetricCard Test", () => {
  it("switches between Moisture and Temperature and updates metric cards", () => {
    cy.visit("http://localhost:5173");
    cy.get('[data-testid="metric-toggle-moisture"]')
      .should('have.attr', 'aria-pressed', 'true');
    cy.get('[data-testid="metric-current"]').should($el => {
      const num = Number($el.text().replace(/\D/g, ''));
      expect(num).to.be.greaterThan(0);
    });
    cy.get('[data-testid="metric-min"]').should($el => {
      const num = Number($el.text().replace(/\D/g, ''));
      expect(num).to.be.greaterThan(0);
    });
    cy.get('[data-testid="metric-max"]').should($el => {
      const num = Number($el.text().replace(/\D/g, ''));
      expect(num).to.be.greaterThan(0);
    });
    cy.get('[data-testid="metric-toggle-temperature"]').click()
      .should('have.attr', 'aria-pressed', 'true');
    cy.get('[data-testid="metric-toggle-moisture"]')
      .should('have.attr', 'aria-pressed', 'false');
    cy.get('[data-testid="metric-current"]').should($el => {
      const num = Number($el.text().replace(/\D/g, ''));
      expect(num).to.be.greaterThan(0);
    });
    cy.get('[data-testid="metric-min"]').should($el => {
      const num = Number($el.text().replace(/\D/g, ''));
      expect(num).to.be.greaterThan(0);
    });
    cy.get('[data-testid="metric-max"]').should($el => {
      const num = Number($el.text().replace(/\D/g, ''));
      expect(num).to.be.greaterThan(0);
    });
    cy.get('[data-testid="metric-chart"]').should('exist');
  });
});
