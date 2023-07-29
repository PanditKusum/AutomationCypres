
import{valid_username,valid_email,valid_password}from '../support/commands.js';
import{invalid_username,invalid_email,invalid_password}from '../support/commands.js';
it('should signup with  credentials', function(){
    cy.viewport(1900, 1020)
    cy.visit('https://next-realworld.vercel.app/')
    
    // click to sign up page 
    cy.get(':nth-child(3) > .nav-link').click()
    
  
    // Scenario 1: Attempt sign up without entering value on input field .
    cy.get(':nth-child(1) > .form-control').clear()
    cy.wait (100)
    cy.get(':nth-child(2) > .form-control').clear()
    cy.wait(50)
    cy.get(':nth-child(3) > .form-control').clear()
    cy.get('.btn').click()
    cy.wait (500)

  // scenario 2 : signup with empty username and valid email and password
  
        cy.get(':nth-child(1) > .form-control').clear()
        cy.wait (100)
        cy.get(':nth-child(2) > .form-control').type(valid_email)
        cy.wait(50)
        cy.get(':nth-child(3) > .form-control').type(valid_password)
        cy.get('.btn').click()
        cy.get('.error-messages > li').should('contain', "username can't be blank");
 

          

 // scenario 3:   signup with valid username and valid empty email and password


   cy.wait (100)
  
   cy.get(':nth-child(1) > .form-control').type("princehary")
   cy.get(':nth-child(2) > .form-control').clear();
   cy.get(':nth-child(3) > .form-control').type(valid_password)

  cy.get('.btn').click()
  cy.get('.error-messages > li').should('contain',"email can't be blank");

  cy .wait (100)
   // scenario 4:   signup with valid username and valid email and  empty password
    
   cy.get(':nth-child(1) > .form-control').type("princehary")
   cy.get(':nth-child(2) > .form-control').type (valid_email)
   cy.get(':nth-child(3) > .form-control').clear();

  cy.get('.btn').click()
  cy.get('.error-messages > li').should('contain', "password can't be blank");
})



 
     
   
        
        
  
  