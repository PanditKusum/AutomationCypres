
import { logintest } from "../Pages/new_login.cy";
let data;

const loginInstance = new logintest();  
describe('Login scenarios', function () {

    beforeEach(function () {
        cy.visit('https://next-realworld.vercel.app/user/login');
        
    })

   it('Empty email and password',  () =>{
      cy.fixture('logindata').then ((data) =>{
      loginInstance.enterEmail.clear;
       loginInstance.enterPassword.clear;
       loginInstance.clickLoginButton();
       loginInstance.errorAllEmptyField();
      cy .wait (100);
   })   
 })

it('For empty email and valid password', () =>{
    cy.fixture('logindata').then ((data) =>{
    loginInstance.enterEmail.clear;
    loginInstance.enterPassword (data.password);
    loginInstance.clickLoginButton();
    loginInstance.errorEmailEmptyField();
})
 })
 it('For invalid email with missing @ sign',  ()=> {
   cy.fixture('logindata').then ((data) =>{
     loginInstance.enterEmail(data.invalidemail1);
     loginInstance.enterPassword (data.password1);
    loginInstance.clickLoginButton();
    
    loginInstance.invalid_email_error();
    cy . wait(100);
    })
})
it('For Not registered Email Address',  () =>{
    cy.fixture('logindata').then ((data) =>{ 
         
    loginInstance.enterEmail(data.invalid_email);
    loginInstance.enterPassword (data.password);
    loginInstance.clickLoginButton();
    loginInstance.invalid_email_errorr();

  })
})

  it('For invalid email missing @ sign and domain name',() =>{
    cy.fixture('logindata').then ((data) =>{
      loginInstance.enterEmail(data.invalid_email3);
      loginInstance.enterPassword (data.password);
      loginInstance.clickLoginButton();
       loginInstance.email_Assertion_error();

  })
})
  it('For empty password and valid  email', () =>{
    cy.fixture('logindata').then ((data) =>{
      loginInstance.enterEmail(data.email);
      loginInstance.enterPassword .clear;
      loginInstance.clickLoginButton();
      loginInstance.password_Assertion_error();

  })
  })
  it('For invalidpassword_case and valid email ', ()=> {
    cy.fixture('logindata').then ((data) =>{
      loginInstance.enterEmail(data.email);
      loginInstance.enterPassword (data.invalid_password);
      loginInstance.clickLoginButton();
      loginInstance. invalid_password_error(data.invalid_password_error);

  })
  })



   it('validlogin',()=> {
       cy.fixture('logindata').then ( (data) =>{
    loginInstance.enterEmail(data.email);
      loginInstance.enterPassword (data.password);
      loginInstance.clickLoginButton();
       })
   })
});


    



