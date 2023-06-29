describe('hamster-book', () => {
  beforeEach(() =>
    cy.visit(
      '/iframe.html?id=profilerowcomponent--primary&args=hamster;canFollow:true;'
    )
  );
  it('should render the component', () => {
    cy.get('app-profile-row').should('exist');
  });
});
