describe('hamster-book', () => {
  beforeEach(() => cy.visit('/iframe.html?id=hamsterformcomponent--primary'));
  it('should render the component', () => {
    cy.get('app-hamster-form').should('exist');
  });
});
