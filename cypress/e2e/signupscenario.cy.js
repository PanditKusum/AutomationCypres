
import { signuptest } from "../Pages/new_Signup.cy"; // Adjust the import path and name

// for empty field scenarios

const signupInstance = new signuptest();

describe('empty_case', function () {
it('should disabeled button', function () {
    signupInstance.navigate('https://next-realworld.vercel.app/');
    cy.get(':nth-child(3) > .nav-link').click()
    cy .wait (100);
    signupInstance.enterUsername.clear;
    signupInstance.enterEmail.clear;
    signupInstance.enterPassword.clear;
    signupInstance.clickButton();
    signupInstance.assertButtonIsDisabled();
    // user must see error message 
    signupInstance.emptyassertionError();


  })
});
// empty email and password with username input field
describe('emptyusername', function () {
  it('should display error message ', function () {
      signupInstance.navigate('https://next-realworld.vercel.app/');
      cy.get(':nth-child(3) > .nav-link').click()
      cy .wait (100);
      signupInstance.enterUsername.clear;
      signupInstance.enterEmail('valid_email');
      signupInstance.enterPassword('Testee@123');
      signupInstance.clickButton();
      
      // user must see error message 
      signupInstance.emptyUsernameError();
  
  
    })
  })

