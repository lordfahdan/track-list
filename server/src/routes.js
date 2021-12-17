const AuthenticationController = require('./controllers/AuthenticationController');

const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')

module.exports = (app, upload) => {
    app.post('/register', upload.array(), 
        AuthenticationControllerPolicy.register,
        AuthenticationController.register)

    app.post('/login',
        AuthenticationController.login)
}