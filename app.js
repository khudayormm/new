const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
require('./config/database')

const app = express();

//view engine
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

//middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//routes
app.use('/', require('./routes/index'));
app.use('/', require('./routes/home'));

const PORT = process.env.PORT || 3100;
app.listen(PORT, () => {
    console.log(`PORT ${PORT} is running...`);
});