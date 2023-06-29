describe('hamster-book', () => {
  beforeEach(() => cy.visit('/iframe.html?id=addhamstercomponent--primary'));
  it('should render the component', () => {
    cy.get('app-add-hamster').should('exist');
  });
});
