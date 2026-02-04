const protect = require('./authMiddleware');

const admin = (req, res, next) => {
    if (req.user && req.user.role === 'admin') {
        next();
    } else {
        res.status(401).json({ message: 'Not authorized as an admin' });
    }
};

const worker = (req, res, next) => {
    if (req.user && (req.user.role === 'worker' || req.user.role === 'admin')) {
        next();
    } else {
        res.status(401).json({ message: 'Not authorized as a worker' });
    }
};

module.exports = { admin, worker };
