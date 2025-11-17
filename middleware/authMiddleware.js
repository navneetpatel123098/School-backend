// middleware/authMiddleware.js
const jwt = require('jsonwebtoken');

const protect = async (req, res, next) => {
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            // हेडर से टोकन निकालें
            token = req.headers.authorization.split(' ')[1];

            // टोकन को वेरीफाई करें
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            // अगर सब सही है, तो अगले फंक्शन पर जाएँ
            next();
        } catch (error) {
            res.status(401).json({ success: false, message: 'Not authorized, token failed' });
        }
    }

    if (!token) {
        res.status(401).json({ success: false, message: 'Not authorized, no token' });
    }
};

module.exports = { protect };