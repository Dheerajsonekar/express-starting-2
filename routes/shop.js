const express = require('express');
const router = express.Router();


router.get('/books', (req, res) => {
    res.send('<h1>Here is the list of all books.</h1>');
});

router.post('/books', (req, res) => {
    res.send('<h1>A new book has been added.</h1>');
});




module.exports = router;