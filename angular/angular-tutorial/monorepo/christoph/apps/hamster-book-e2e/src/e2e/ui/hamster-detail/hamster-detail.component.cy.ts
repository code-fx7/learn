describe('hamster-book', () => {
  beforeEach(() => cy.visit('/iframe.html?id=hamsterdetailcomponent--primary'));
  it('should render the component', () => {
    cy.get('app-hamster-detail').should('exist');
  });
});
