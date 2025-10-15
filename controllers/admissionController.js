// controllers/admissionController.js
const Admission = require('../models/admissionModel');

// logic for submitting new admission fotm.
const submitAdmission = async (req, res) => {
    try {
        // data fron the frontend.
        const formData = req.body;

        // save the data to Database
        const newAdmission = await Admission.create(formData);

        // send the success message to the frontend
        res.status(201).json({ 
            success: true, 
            message: 'Form submitted successfully!',
            data: newAdmission 
        });
    } catch (error) {
        // send an error if there is a mistake
        res.status(400).json({ success: false, message: error.message });
    }
};

module.exports = { submitAdmission };