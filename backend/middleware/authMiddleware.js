const fs = require('fs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const protect = async (req, res, next) => {
    fs.appendFileSync('server.log', 'Auth: Protect middleware triggered\n');
    let token;

    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith('Bearer')
    ) {
        fs.appendFileSync('server.log', 'Auth: Header present\n');
        try {
            // Get token from header
            token = req.headers.authorization.split(' ')[1];

            // Verify token
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            fs.appendFileSync('server.log', `Auth: Token verified for ${decoded.id}\n`);

            // Get user from the token
            req.user = await User.findById(decoded.id).select('-password');

            if (!req.user) {
                fs.appendFileSync('server.log', `Auth: User not found in DB\n`);
                return res.status(401).json({ message: 'User not found' });
            }

            fs.appendFileSync('server.log', `Auth: User attached to req\n`);
            next();
        } catch (error) {
            console.error(error);
            fs.appendFileSync('server.log', `Auth: Verification Failed. Error: ${error.message}\n`);
            res.status(401).json({ message: 'Not authorized' });
        }
    } else {
        fs.appendFileSync('server.log', `Auth: No Auth Header. Headers: ${JSON.stringify(req.headers)}\n`);
    }

    if (!token) {
        fs.appendFileSync('server.log', 'Auth: Token is undefined, sending 401\n');
        res.status(401).json({ message: 'Not authorized, no token' });
    }
};

const admin = (req, res, next) => {
    if (req.user && req.user.role === 'admin') {
        fs.appendFileSync('server.log', `Auth: Admin access granted for ${req.user.email}\n`);
        next();
    } else {
        fs.appendFileSync('server.log', `Auth: Admin access DENIED for ${req.user ? req.user.email : 'unknown'} with role ${req.user ? req.user.role : 'none'}\n`);
        res.status(401).json({ message: 'Not authorized as an admin' });
    }
};

module.exports = { protect, admin };
