export class signuptest {
    new_signup_username = ':nth-child(1) > .form-control';
    new_signup_email = ':nth-child(2) > .form-control';
    new_signup_password = ':nth-child(3) > .form-control';
    new_signup_btn = '.btn';
   // signup_assertion_error='.error-messages > li'
  
    navigate(url) {
      cy.visit(url);
    }
  
    enterUsername(username) {
      cy.get(this.new_signup_username).type(username);
    }
  
    enterEmail(email) {
      cy.get(this.new_signup_email).type(email);
    }
  
    enterPassword(password) {
      cy.get(this.new_signup_password).type(password);
    }
  
    clickButton() {
      cy.get(this.new_signup_btn).click();
    
    }
}
//     AssertionError (error){
//        cy. get (signup_assertion_error)(error);
//     }
//   