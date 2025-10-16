// 1. Import required packages
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const admissionRoutes = require('./routes/admissionRoutes');

// 2. Load .env file and connect to the database
dotenv.config();
connectDB();

// 3. Create Express server
const app = express();

// 4. Use Middlewares
app.use(cors()); // This allows the frontend and backend to communicate
app.use(express.json()); // This helps in parsing JSON data from requests

// 5. A test route (to check if the server is running)
app.get('/', (req, res) => {
    res.send('Our backend server is up and running!');
});

// 6. Connect the main API route to the server
app.use('/api/admissions', admissionRoutes);

// 7. Start the server on a port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server has started on port ${PORT}.`);
});