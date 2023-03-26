it('Sociair', function(){
  cy.visit('https://facebook.com')
  cy.get('[data-testid="royal_email"]').type('980000007')

  cy.get('[data-testid="royal_pass"]').type('Test@1234')
  cy.get('[data-testid="royal_login_button"]').click()
})