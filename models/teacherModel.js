// models/teacherModel.js
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const teacherSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    lastLoginAt: { type: Date } // जैसा आपने कहा था, लॉगिन ट्रैक करने के लिए
});

// पासवर्ड को सेव करने से पहले एन्क्रिप्ट करें
teacherSchema.pre('save', async function(next) {
    if (!this.isModified('password')) {
        return next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

const Teacher = mongoose.model('Teacher', teacherSchema);
module.exports = Teacher;