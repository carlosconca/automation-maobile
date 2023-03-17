Feature('login');

Scenario('test something',  ({ I }) => {
     //
     I.fillField('#login-outlined', 'ze.carlos')
     I.fillField('#password-outlined', '123456')
     I.tap('#ENTRAR')

     I.waitForElement('')
     I.seeElement('')

});
