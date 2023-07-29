// import constant variable 

import{valid_username,valid_email,valid_password,invalid_email,invalid_username,invalid_password}from '../support/commands.js';
// for valid registeration

it('should register to app for valid signup',function () {
  cy.visit('https://next-realworld.vercel.app/')
  cy.get(':nth-child(3) > .nav-link').click();
    cy.viewport(1900, 1020)
    cy.timeout(7000);
    cy.get(':nth-child(1) > .form-control').type (valid_username);
  
    cy.get(':nth-child(2) > .form-control').type(valid_email);
    cy.wait(10);
    
    cy.get(':nth-child(3) > .form-control').type(valid_password);
    cy.wait(10);
    
    cy.get('.btn').click();
    cy.wait(700);
    })

it('should show error message for invalid data signup',function () {
  cy.visit('https://next-realworld.vercel.app/')
  cy.get(':nth-child(3) > .nav-link').click();
    cy.viewport(1900, 1020)
    cy.timeout(7000);
    
    // Scenario 1: Attempt sign up without entering value on input field .
    cy.get(':nth-child(1) > .form-control').clear()
    cy.wait (25)
    cy.get(':nth-child(2) > .form-control').clear()
    cy.wait(25)
    cy.get(':nth-child(3) > .form-control').clear()
    cy.get('.btn').click()
    cy.wait (250)
  

  // scenario 2 : signup with empty username and invalid email and password
  
    cy.get(':nth-child(1) > .form-control').clear();
  
    cy.get(':nth-child(2) > .form-control').type(invalid_email);
    cy.wait(10);
  
    cy.get(':nth-child(3) > .form-control').type(valid_password);
    cy.wait(10);
  
    cy.get('.btn').click();
  cy.wait(250);

  //scenario 3 : Test with invalid username empty email and empty password 

  cy.get(':nth-child(1) > .form-control').type(invalid_username);
  cy.get(':nth-child(2) > .form-control').clear();
  cy.get(':nth-child(3) > .form-control').clear();
  cy.get('.btn').click();
  cy.get('.error-messages > li').should('contain', "email can't be blank");
  cy.wait(250)

    // scenario 4 : signup with invalid  username and empty email and valid password
    cy.get(':nth-child(1) > .form-control').type ('ambitionguru')
 cy.get(':nth-child(3) > .form-control').type ('ambition#123')
   cy.get('.btn').click()
   cy .wait (250)
 // scenario 5 : Test with valid username invalid email and valid password

 cy.get(':nth-child(2) > .form-control').type("krishu@gmail");
 cy.get(':nth-child(3) > .form-control').clear();
 cy.get('.btn').click()
 
 cy.get('.error-messages > li').should('contain', "password can't be blank");
 cy .wait (250);
})


