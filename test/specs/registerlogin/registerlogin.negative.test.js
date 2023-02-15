let registerlogin = require('../../pageobjects/registerlogin.js');
let testData = require('../../../test-data/registerlogin.data')

suite('Login Page, negative test', () => {
    test('Try login with not valid login name', async () => {
        await registerlogin.openLoginPage()
        await registerlogin.setUsername(testData.USERS.invalidUser.login);
        await registerlogin.setPassword(testData.USERS.invalidUser.password);
        await registerlogin.clickLoginButton();
        await registerlogin.checkLoginNameErrorField(testData.INVALID_USERNAME_ERROR)
    });

    test('Try login with not valid password', async () => {
        await registerlogin.openLoginPage()
        await registerlogin.setUsername(testData.USERS.validUser.login);
        await registerlogin.setPassword(testData.USERS.invalidUser.password);
        await registerlogin.clickLoginButton();
        await registerlogin.checkPasswordErrorField(testData.INVALID_PASSWORD_ERROR)
    });

    test('Try click login button with empty fields', async () => {
        await registerlogin.openLoginPage()
        await registerlogin.clickLoginButton()
        await registerlogin.checkLoginNameErrorField(testData.EMPTY_USERNAME_ERROR)
        await registerlogin.checkPasswordErrorField(testData.EMPTY_PASSWORD_ERROR)
    });
});


