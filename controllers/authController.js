// controllers/authController.js
const Teacher = require('../models/teacherModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// यह फंक्शन एक सीक्रेट टोकन बनाता है
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '1d' });
};

// 1. टीचर को रजिस्टर करने के लिए (यह हम सिर्फ एक बार इस्तेमाल करेंगे)
exports.registerTeacher = async (req, res) => {
    const { email, password } = req.body;
    try {
        const teacher = await Teacher.create({ email, password });
        res.status(201).json({ message: "Teacher registered successfully" });
    } catch (error) {
        res.status(400).json({ message: "Error registering teacher", error: error.message });
    }
};

// 2. टीचर को लॉग इन करने के लिए
exports.loginTeacher = async (req, res) => {
    const { email, password } = req.body;
    try {
        const teacher = await Teacher.findOne({ email });
        if (!teacher) {
            return res.status(401).json({ message: "Invalid credentials (email)" });
        }

        // पासवर्ड की जाँच
        const isMatch = await bcrypt.compare(password, teacher.password);
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid credentials (password)" });
        }

        // --- लॉगिन टाइम अपडेट करें ---
        teacher.lastLoginAt = Date.now();
        await teacher.save();
        // ---

        // पासवर्ड सही है! एक सीक्रेट टोकन (की-कार्ड) बनाकर भेजें
        res.status(200).json({
            success: true,
            message: "Login successful",
            token: generateToken(teacher._id)
        });
    } catch (error) {
        res.status(400).json({ message: "Login error", error: error.message });
    }
};