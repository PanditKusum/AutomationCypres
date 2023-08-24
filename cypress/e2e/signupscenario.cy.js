
import { signuptest } from "../Pages/new_Signup.cy"; // Adjust the import path and name

describe('Sign Up Tests', function () {
  const signupInstance = new signuptest();

  it('should signup successfully', function () {
    signupInstance.navigate('https://next-realworld.vercel.app/');
    cy.get(':nth-child(3) > .nav-link').click()
    signupInstance.enterUsername('krizma');
    signupInstance.enterEmail.clear;
    signupInstance.enterPassword('pandit@123')
    signupInstance.clickButton();
    cy.wait (1000);
    //signupInstance.AssertionError("email can't be blank");

  })
});