describe('zoobuch', () => {
  beforeEach(() =>
    cy.visit('/iframe.html?id=animallistcomponent--primary&args=animals;')
  );
  it('should render the component', () => {
    cy.get('app-animal-list').should('exist');
  });
});
