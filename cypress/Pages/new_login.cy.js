import { valid_email } from "../support/commands";

export class logintest{
  //  create object of the field
    visit_login =':nth-child(3) > .nav-link'
    login_email =':nth-child(1) > .form-control';
    login_password= ':nth-child(2) > .form-control';
     login_btn = '.btn'
      Assertion_error ='.error-messages > li'
      
      // method used on test scenarios[ like click type and asssertions error]


enterEmail(email){
    cy.get(this.login_email).type(email);
}
enterPassword(password){
    cy.get(this.login_password).type(password);
}
    clickLoginButton(){
        cy.get(this.login_btn).click()
    }
    // error message for all empty field
   errorAllEmptyField(){
    cy.get(this.Assertion_error).should('contain',"email can't be blank");
}
// error message for empty email
errorEmailEmptyField(){
    cy.get(this.Assertion_error).should('contain',"email can't be blank")

}
// for invalid email
invalid_email_error(){
    cy.get(this.Assertion_error).should('contain',"email or password is invalid");

  }
  // error message for not regsitered email account
  email_Assertion_error(){
  cy.get(this.Assertion_error).should('contain',"invalid email or password");
  }

// for empty password error
password_Assertion_error(){
    cy.get(this.Assertion_error).should('contain',"password can't be blank");
}
// for invalid password case
invalid_password_error(){
    cy.get(this.Assertion_error). should('contain',"You have entered an invalid password");
}
// for success message 
// valid_login_messsage(){
//     cy.get(this.Assertion_error). should('contain',"Logged in Successfully ");
// }
}


        
    

