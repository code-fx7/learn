describe('statistik', () => {
  beforeEach(() => cy.visit('/iframe.html?id=appcomponent--primary'));
  it('should render the component', () => {
    cy.get('chartjs-root').should('exist');
  });
});
