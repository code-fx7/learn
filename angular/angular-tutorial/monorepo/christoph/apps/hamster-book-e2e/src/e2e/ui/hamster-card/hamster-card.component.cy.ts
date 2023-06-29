describe('hamster-book', () => {
  beforeEach(() =>
    cy.visit('/iframe.html?id=hamstercardcomponent--primary&args=text;img;')
  );
  it('should render the component', () => {
    cy.get('app-hamster-card').should('exist');
  });
});
