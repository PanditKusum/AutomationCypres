it('ambition1', function(){
    cy.viewport(1920, 1020)
    cy.visit('https://app.ambition.guru/login')
    cy.contains('Enter your mobile number').type(9847185936)
   cy.contains("Enter your password").type("Test@123")
})