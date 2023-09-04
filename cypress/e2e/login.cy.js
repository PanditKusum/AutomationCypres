import { logintest } from "../Pages/new_login.cy";

const loginInstance = new logintest();
describe('Login scenerions', function () {
    beforeEach(() => {
        cy.visit('https://next-realworld.vercel.app/user/login');
    })
    it('Empty email and password', function () {
        loginInstance.enterEmail.clear;
        loginInstance.enterPassword.clear;
        loginInstance.clickLoginButton();
        loginInstance.errorAllEmptyField();
        cy .wait (100);
    })
    
    it('For empty email and valid password', function () {
        loginInstance.enterEmail.clear;
        loginInstance.enterPassword ("Test@34");
        loginInstance.clickLoginButton();
        loginInstance.errorEmailEmptyField();
    })

   
    it('For invalid email with missing @ sign', function () {
        loginInstance.enterEmail('kusumpanditgmail.com');
        loginInstance.enterPassword ("Test@34");
        loginInstance.clickLoginButton();
        
        loginInstance.invalid_email_error();
        cy . wait(100);

    })


it('For invalid email missing domain name', function () {

        loginInstance.enterEmail('kusumpandit@gmail');
        loginInstance.enterPassword ("Test@34");
        loginInstance.clickLoginButton();
        // to see response for given case
        loginInstance.invalid_email_error();
        cy .wait(100);

    })

  it('For Not registered Email Address', function () {
      loginInstance.enterEmail('kree345@gmail.com');
      loginInstance.enterPassword ("Test@34");
      loginInstance.clickLoginButton();
      loginInstance.invalid_email_errorr();

    })

    it('ior invalid email missing @ sign and domain name', function () {
        loginInstance.enterEmail('1234');
        loginInstance.enterPassword ("Test@34");
        loginInstance.clickLoginButton();
         loginInstance.email_Assertion_error();

    })
    it('For empty password and valid  email', function () {
        loginInstance.enterEmail('abc@gmail.com');
        loginInstance.enterPassword .clear;
        loginInstance.clickLoginButton();
        loginInstance.password_Assertion_error();

    })

    it('For invalidpassword_case', function () {
        loginInstance.enterEmail('panditkusum2051@gmail.com');
        loginInstance.enterPassword ('Test@34887');
        loginInstance.clickLoginButton();
        loginInstance.invalid_password_error();

    })

    it('For Valid Login Case', function () {
        loginInstance.enterEmail('panditkusum2051@gmail.com');
        loginInstance.enterPassword ('Test@123');
        loginInstance.clickLoginButton();
      //  loginInstance.valid_login_messsage();
})
});
