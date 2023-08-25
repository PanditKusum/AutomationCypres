import { logintest } from "../Pages/new_login.cy";

const loginInstance = new logintest();
// for empty login input field email and password
describe('Allempty_case', function () {
    it('should  show required message', function () {
        loginInstance.navigate('https://next-realworld.vercel.app/user/login');
        loginInstance.enterEmail.clear;
        loginInstance.enterPassword.clear;
        loginInstance.clickLoginButton();
        // to see response for given case
        loginInstance.errorAllEmptyField();

    })
});
// for empty email and valid password
describe('emptyEmail_case', function () {
    it('should show error message', function () {
        loginInstance.navigate('https://next-realworld.vercel.app/user/login');
        loginInstance.enterEmail.clear;
        loginInstance.enterPassword ("Test@34");
        loginInstance.clickLoginButton();
        // to see response for given case
        loginInstance.errorEmailEmptyField();

    })
});
// for invalid email missing @ sign
describe('invalidEmail_case', function () {
    it('should find invalid email', function () {
        loginInstance.navigate('https://next-realworld.vercel.app/user/login');
        loginInstance.enterEmail('kusumpanditgmail.com');
        loginInstance.enterPassword ("Test@34");
        loginInstance.clickLoginButton();
        // to see response for given case
        loginInstance.invalid_email_error();

    })
});
// for invalid email as missing domain 
describe('InvalidEmail_case', function () {
    it('should find domain name missing', function () {
        loginInstance.navigate('https://next-realworld.vercel.app/user/login');
        loginInstance.enterEmail('kusumpandit@gmail');
        loginInstance.enterPassword ("Test@34");
        loginInstance.clickLoginButton();
        // to see response for given case
        loginInstance.invalid_email_error();

    })
});
// not registered email 

describe('Invalid_email _case', function () {
  it('should show error message', function () {
       loginInstance.navigate('https://next-realworld.vercel.app/user/login');
      loginInstance.enterEmail('kree345@gmail.com');
      loginInstance.enterPassword ("Test@34");
      loginInstance.clickLoginButton();
       // to see response for given case
              loginInstance.invalid_email_errorr();

    })

});
 //scenario for invalid email [ missing @sign and domainname]
describe('emptypassword_case', function () {
    it('should show error message', function () {
        loginInstance.navigate('https://next-realworld.vercel.app/user/login');
        loginInstance.enterEmail('1234');
        loginInstance.enterPassword ("Test@34");
        loginInstance.clickLoginButton();
        // to see response for given case
        loginInstance.email_Assertion_error();

    })
});
 // scenario for empty password and valid email
describe('emptyEmail_case', function () {
    it('should show error message', function () {
        loginInstance.navigate('https://next-realworld.vercel.app/user/login');
        loginInstance.enterEmail('abc@gmail.com');
        loginInstance.enterPassword .clear;
        loginInstance.clickLoginButton();
        // to see response for given case
        loginInstance.password_Assertion_error();

    })
});
 // scenario for valid email and invalid password
describe('invalidpassword_case', function () {
    it('should throw error message', function () {
        loginInstance.navigate('https://next-realworld.vercel.app/user/login');
        loginInstance.enterEmail('panditkusum2051@gmail.com');
        loginInstance.enterPassword ('Test@34887');
        loginInstance.clickLoginButton();
        // to see response for given case
        loginInstance.invalid_password_error();

    })
});

// for valid login  data
describe('Valid_case', function () {
    it('should Login Successfully', function () {
        loginInstance.navigate('https://next-realworld.vercel.app/user/login');
        loginInstance.enterEmail('panditkusum2051@gmail.com');
        loginInstance.enterPassword ('Test@123');
        loginInstance.clickLoginButton();
        // to see response for given case
        loginInstance.valid_login_messsage();

    })
});