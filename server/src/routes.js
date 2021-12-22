const AuthenticationController = require('./controllers/AuthenticationController');
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')

const SongsController = require('./controllers/SongsController');

module.exports = (app, upload) => {
    app.post('/register', upload.array(), 
        AuthenticationControllerPolicy.register,
        AuthenticationController.register)
    app.post('/login',
        AuthenticationController.login)

    app.get('/songs',
        SongsController.index)
    app.post('/songs',
        SongsController.post)
}