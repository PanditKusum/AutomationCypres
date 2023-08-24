// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
// create  valid constant  variable

// to create random email on javascript 
const randomId = Math.floor(Math.random() * 100000); // Generate a random number between 0 and 99999
export const valid_email = `user${randomId}@example.com`;
export const valid_password  = 'Nepal@123';
// create name  variable in  javascript

export const valid__username= 'karishma sharma';
// create invalid variable
export const invalid_username ='123444';
 export const invalid_email = 'abcgmail.com';
 export const invalid_password  = 'Nepal@233333';
 export const fakedata='1234';
