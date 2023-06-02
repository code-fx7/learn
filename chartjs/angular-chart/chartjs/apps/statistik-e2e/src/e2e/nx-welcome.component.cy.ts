describe('statistik', () => {
  beforeEach(() => cy.visit('/iframe.html?id=nxwelcomecomponent--primary'));
  it('should render the component', () => {
    cy.get('chartjs-nx-welcome').should('exist');
  });
});
