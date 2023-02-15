const testData = Object.freeze({
    USERS: {
        invalidUser: {
            login: 'testAccount',
            password: 'password'
        },
        validUser: {
            login: 'test'
        },
    },
    USERNAME_PLACEHOLDER: 'Username',
    PASSWORD_PLACEHOLDER: 'Password',
    INVALID_USERNAME_ERROR: 'No account found with that username.',
    INVALID_PASSWORD_ERROR: 'The password you entered was not valid.',
    EMPTY_USERNAME_ERROR: 'Please enter username.',
    EMPTY_PASSWORD_ERROR: 'Please enter your password.',
});

module.exports = testData;
