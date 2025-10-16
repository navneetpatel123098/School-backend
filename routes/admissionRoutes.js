// routes/admissionRoutes.js
const express = require('express');
const router = express.Router();
const { submitAdmission } = require('../controllers/admissionController');

// जब '/api/admissions' पर POST रिक्वेस्ट आएगी, तो submitAdmission फंक्शन चलेगा
router.post('/', submitAdmission);

module.exports = router;