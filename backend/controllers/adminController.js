const User = require('../models/User');
const Appointment = require('../models/Appointment');
const fs = require('fs');

// @desc    Get dashboard aggregate stats
// @route   GET /api/admin/stats
// @access  Private/Admin
const getAdminStats = async (req, res) => {
    fs.appendFileSync('server.log', 'GetAdminStats: Request received\n');
    try {
        const totalClients = await User.countDocuments({ role: { $in: ['client', 'user'] } });
        const totalWorkers = await User.countDocuments({ role: 'artist' });
        const totalBookings = await Appointment.countDocuments();
        const pendingRequests = await Appointment.countDocuments({ status: 'pending' });

        const stats = {
            totalClients,
            totalWorkers,
            totalBookings,
            pendingRequests
        };

        fs.appendFileSync('server.log', `GetAdminStats: Success\n`);
        console.log('Sending stats back:', stats);
        res.json(stats);
    } catch (error) {
        fs.appendFileSync('server.log', `GetAdminStats: Error ${error.message}\n`);
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getAdminStats
};
