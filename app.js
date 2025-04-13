const express = require('express');
const app = express();
const shoproutes = require('./routes/shop')


app.use(express.json());


app.use((req, res, next) => {
    console.log(`${req.method} request made to ${req.url}`);
    next(); 
});


app.use(shoproutes);


app.listen(4000, () => {
    console.log("Server is running on http://localhost:4000");
});
