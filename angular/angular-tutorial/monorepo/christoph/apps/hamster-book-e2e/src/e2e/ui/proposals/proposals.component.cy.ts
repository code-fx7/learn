describe('hamster-book', () => {
  beforeEach(() =>
    cy.visit('/iframe.html?id=proposalscomponent--primary&args=hamsters;')
  );
  it('should render the component', () => {
    cy.get('app-proposals').should('exist');
  });
});
