// controllers/admissionController.js
const Admission = require('../models/admissionModel');

// 1. नया एडमिशन फॉर्म सबमिट करने का लॉजिक
const submitAdmission = async (req, res) => {
    try {
        const formData = req.body;
        const newAdmission = await Admission.create(formData);
        res.status(201).json({ 
            success: true, 
            message: 'Form submitted successfully!',
            data: newAdmission 
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// 2. सभी एडमिशन का डेटा देखने का लॉजिक (टीचर के लिए)
const getAdmissions = async (req, res) => {
    try {
        const admissions = await Admission.find().sort({ createdAt: -1 }); // सबसे नया पहले
        res.status(200).json({
            success: true,
            count: admissions.length,
            data: admissions
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// दोनों को एक्सपोर्ट करें
module.exports = { submitAdmission, getAdmissions };