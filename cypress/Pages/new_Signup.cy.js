import { valid_email } from "../support/commands";

export class signuptest {
  visit_signup =':nth-child(3) > .nav-link'
    new_signup_username = ':nth-child(1) > .form-control';
    new_signup_email = ':nth-child(2) > .form-control';
    new_signup_password = ':nth-child(3) > .form-control';
    new_signup_btn = '.btn';
    assert_btn= '.btn';
    empty_assertion_error='.error-messages > li'
    empty_username_error='.error-messages > li'
    invalid_email ='.error-messages > li'
  
    navigate(url) {
      cy.visit(url);
    }
  
    enterUsername(username) {
      cy.get(this.new_signup_username).type(username);
    }
  
    enterEmail(email) {
      cy.get(this.new_signup_email).type(valid_email);
    }
  
    enterPassword(password) {
      cy.get(this.new_signup_password).type(password);
    }
  
    clickButton() {
      cy.get(this.new_signup_btn).click();
    
    }
    
    assertButtonIsDisabled() {
      cy.get(this.assert_btn).should('be.disabled');
    }

      emptyassertionError(){// empty all field assertion error
      cy.get(this.empty_assertion_error).should('contain',"please enter all required field");
      }

      emptyUsernameError(){
        cy.get(this.empty_username_error).should('contain', "username can't be blank");
      }

}

    

