import BasePage from './basePage.js';
import allureReporter from '@wdio/allure-reporter'

class Registerlogin extends BasePage {
    get inputUsername () {
        return $('input[name="username"]');
    }

    get inputPassword () {
        return $('input[name="password"]');
    }

    get loginButton () {
        return $('input[type="submit"]');
    }

    get errorLoginNameField () {
        return $('span.help-block')
    }

    get errorPasswordField () {
        return $('//*[@id="all"]/div/form/div[2]/span')
    }


    async setUsername (username) {
        allureReporter.addStep('Write username');
        await this.inputUsername.setValue(username);
    }

    async setPassword (password) {
        allureReporter.addStep('Write password');
        await this.inputPassword.setValue(password);
    }

    async clickLoginButton () {
        allureReporter.addStep('Click login button');
        await this.loginButton.click();
    }

    async login (username, password) {
        await this.setUsername(username);
        await this.setPassword(password);
        await this.clickLoginButton();
    }

    openLoginPage () {
        allureReporter.addStep('Open login page');
        return this.open('qa-portal/registerlogin/registerlogin.php');
    }

    async checkField (field) {
        allureReporter.addStep(`Check field is presented`);
        await expect(field).toBePresent();
    }

    async checkPlaceholderConteinText (field, text) {
        allureReporter.addStep(`Check ${text} in placeholder`);
        await expect(field).toHaveAttributeContaining('placeholder', text);
    }

    async checkButtonIsClickable (button) {
        allureReporter.addStep(`Check button is clickable`);
        await expect(button).toBeClickable();
    }

    async checkLoginNameErrorField (text){
        allureReporter.addStep(`Check ${text} in error field`);
        await this.validateFieldWithText(this.errorLoginNameField, text)
    }

    async checkPasswordErrorField (text){
        allureReporter.addStep(`Check ${text} in error field`);
        await this.validateFieldWithText(this.errorPasswordField, text)
    }
}

module.exports = new Registerlogin();
