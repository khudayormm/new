require('dotenv').config();
const mongoose = require('mongoose');
const conn = mongoose.connect(process.env.URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
    console.log('MongoDB connected!')
}).catch((err) => {
    console.log(err)
});

module.exports = conn;