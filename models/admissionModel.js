// models/admissionModel.js
const mongoose = require('mongoose');

const admissionSchema = new mongoose.Schema({
    loginInput: { type: String }, // यह भी सेव करें
    studentFirstName: { type: String, required: true },
    studentLastName: { type: String, required: true },
    dob: { type: Date },
    studentAadhar: { type: String },
    fatherName: { type: String, required: true },
    fatherAadhar: { type: String },
    motherName: { type: String, required: true },
    motherAadhar: { type: String },
    address: { type: String, required: true },
    fatherPan: { type: String },
    district: { type: String },
    pincode: { type: String },
    language: { type: String },
    admissionClass: { type: String, required: true },
    status: { type: String, default: 'Submitted' },
}, { timestamps: true });

const Admission = mongoose.model('Admission', admissionSchema);

module.exports = Admission;