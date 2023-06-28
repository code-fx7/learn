describe('zoobuch', () => {
  beforeEach(() => cy.visit('/iframe.html?id=animalformcomponent--primary'));
  it('should render the component', () => {
    cy.get('app-animal-form').should('exist');
  });
});
