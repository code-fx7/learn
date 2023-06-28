describe('zoobuch', () => {
  beforeEach(() => cy.visit('/iframe.html?id=zoobuchcomponent--primary'));
  it('should render the component', () => {
    cy.get('app-zoobuch').should('exist');
  });
});
