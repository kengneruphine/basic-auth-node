const express = require('express');
const app = express();
const auth = require('./auth');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

const PORT = 3000;

app.use('/login',auth);

app.listen(PORT, () => {
    console.log("app has started on port", PORT);
})