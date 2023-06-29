describe('hamster-book', () => {
  beforeEach(() =>
    cy.visit('/iframe.html?id=friendboxcomponent--primary&args=myFriends;')
  );
  it('should render the component', () => {
    cy.get('app-friendbox').should('exist');
  });
});
