const express = require("express");
const morgan = require("morgan");
const cors = require('cors');

const app = express();

app.use(morgan("combined"));
app.use(express.json())
app.use(cors())

app.post('/register', (req, res) => {
    res.send({
        message : "Ini root"
    })
})

app.listen( process.env.PORT || 8081);