// server.js (Updated)

const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db'); // इसे अब इस्तेमाल करें
const admissionRoutes = require('./routes/admissionRoutes'); // इसे भी इस्तेमाल करें

dotenv.config();
connectDB(); // Connect to database.

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('our backend ssever is up and running.!');
});

// connect API root to sever. 
app.use('/api/admissions', admissionRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`सर्वर पोर्ट ${PORT} पर शुरू हो गया है।`);
});