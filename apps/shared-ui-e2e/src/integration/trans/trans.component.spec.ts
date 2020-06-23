describe('shared-ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=transcomponent--primary'));

  it('should render the component', () => {
    cy.get('class-validator-monorepo-trans').should('exist');
  });
});
