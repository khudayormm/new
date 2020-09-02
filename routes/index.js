const express = require('express');
const router = express.Router();
const Car = require('../models/Brand');

router.get('/list', async (req, res) => {
    const car = await Car
    .find()
    .sort({name: 1});

    res.render('list', {
        records: car
    });
});

router.get('/post', (req, res) => {
    res.render('index');
})

router.post('/post', async (req, res) => {
    const car = new Car({
        name: req.body.name
    });

    const newCar = await car.save();
    console.log(newCar);
});

module.exports = router;