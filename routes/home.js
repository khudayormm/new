const express = require('express');
const si = require('systeminformation');
const router = express.Router();


router.get('/', (req, res) => {
  si.osInfo()
    .then(data => res.render('home', {
        raz: data.arch
    }))
     .catch(error => console.error(error));   
});

module.exports = router;