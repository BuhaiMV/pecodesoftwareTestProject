let registerlogin = require('../../pageobjects/registerlogin.js');
let testData = require('../../../test-data/registerlogin.data')

suite('Login Page test', () => {
    test('Check login name and password fields is presented', async () => {
        await registerlogin.openLoginPage()
        await registerlogin.checkField(registerlogin.inputUsername)
        await registerlogin.checkField(registerlogin.inputPassword)
    });

    test('Check login name and password fields has placeholders', async () => {
        await registerlogin.openLoginPage()
        await registerlogin.checkPlaceholderConteinText(registerlogin.inputUsername, testData.USERNAME_PLACEHOLDER)
        await registerlogin.checkPlaceholderConteinText(registerlogin.inputPassword, testData.PASSWORD_PLACEHOLDER)
    });

    test('Check login button is clickable', async () => {
        await registerlogin.openLoginPage()
        await registerlogin.checkButtonIsClickable(registerlogin.loginButton)
    });
});


