describe('testlib', () => {
  beforeEach(() => cy.visit('/iframe.html?id=testcomponentcomponent--primary'));
  it('should render the component', () => {
    cy.get('test-monorepo-testcomponent').should('exist');
  });
});
