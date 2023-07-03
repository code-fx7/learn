describe('e-commerce', () => {
  beforeEach(() => cy.visit('/iframe.html?id=landingpagecomponent--primary'));
  it('should render the component', () => {
    cy.get('christoph-landing-page').should('exist');
  });
});
