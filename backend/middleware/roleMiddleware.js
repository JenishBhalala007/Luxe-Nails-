const protect = require('./authMiddleware');

const admin = (req, res, next) => {
    if (req.user && req.user.role === 'admin') {
        next();
    } else {
        res.status(401).json({ message: 'Not authorized as an admin' });
    }
};

const artist = (req, res, next) => {
    if (req.user && (req.user.role === 'artist' || req.user.role === 'admin')) {
        next();
    } else {
        res.status(401).json({ message: 'Not authorized as an artist' });
    }
};

module.exports = { admin, artist };
