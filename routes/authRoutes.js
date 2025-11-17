// routes/authRoutes.js
const express = require('express');
const router = express.Router();
const { registerTeacher, loginTeacher } = require('../controllers/authController');

// (हम रजिस्टर को बाद में हटा सकते हैं)
router.post('/register', registerTeacher); 

router.post('/login', loginTeacher);

module.exports = router;