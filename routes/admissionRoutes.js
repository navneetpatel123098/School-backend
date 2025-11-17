// routes/admissionRoutes.js
const express = require('express');
const router = express.Router();
const { submitAdmission, getAdmissions } = require('../controllers/admissionController');
const { protect } = require('../middleware/authMiddleware'); // <-- गार्ड को इम्पोर्ट करें

// डेटा सेव करने का रास्ता (कोई भी कर सकता है)
router.post('/', submitAdmission);

// डेटा देखने का रास्ता (सिर्फ वही देख सकता है जिसके पास 'की-कार्ड' हो)
router.get('/', protect, getAdmissions); // <-- 'protect' को यहाँ जोड़ें

module.exports = router;