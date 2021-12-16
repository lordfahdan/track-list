const express = require("express");
const bodyParser = require('body-parser')
const multer = require('multer');
const morgan = require("morgan");
const cors = require('cors');

const {sequelize} = require('./models')
const config = require('./config/config')

const app = express();
const upload = multer()

app.use(morgan("combined"));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

require('./routes')(app, upload)

sequelize.sync()
    .then(() => {

        app.listen(config.port);
        console.log(`Server started on port ${config.port}`)
    })
