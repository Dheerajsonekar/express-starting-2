const express = require('express');
const app = express();

const studentRoutes = require('./routes/studentRoutes');
const courseRoutes = require('./routes/courseRoutes');

// Middleware to parse JSON (optional, but good practice)
app.use(express.json());

// Home route
app.get('/', (req, res) => {
    res.send("Welcome to the Student & Course Portal API!");
});

// Use Routes
app.use('/students', studentRoutes);
app.use('/courses', courseRoutes);

// 404 handler
app.use('*', (req, res) => {
    res.status(404).send("Page not found");
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
