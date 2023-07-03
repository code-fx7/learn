describe('e-commerce', () => {
  beforeEach(() => cy.visit('/iframe.html?id=appcomponent--primary'));
  it('should render the component', () => {
    cy.get('christoph-root').should('exist');
  });
});
