it('Logintest', function(){
    cy.viewport(1900, 1020)
    cy.visit('https://next-realworld.vercel.app/')
    
    // click to sign up page 
    cy.get(':nth-child(3) > .nav-link').click()
  
  // scenario with valid username and invalid email and valid password
        cy.get(':nth-child(1) > .form-control').type("KusumPandit")
        cy.wait (100)
        cy.get(':nth-child(2) > .form-control').type('kusumpanditgmai.com')
        cy.wait(50)
        cy.get(':nth-child(3) > .form-control').type('kusu@3456')
        cy.get('.btn').click()
          
         })
  
  