const express = require('express');
const router = express.Router();


router.get('/products', (req, res) => {
    res.send('<h1>Here is the list of all products.</h1>');
});

router.post('/products', (req, res) => {
    res.send('<h1>A new product has been added.</h1>');
});


router.get('/categories', (req, res) => {
    res.send('<h1>Here is the list of all categories.</h1>');
});

router.post('/categories', (req, res) => {
    res.send('<h1>A new category has been created.</h1>');
});

module.exports = router;