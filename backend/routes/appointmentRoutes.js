const express = require('express');
const router = express.Router();
const {
    createAppointment,
    getMyAppointments,
    getAppointments,
    updateAppointmentStatus,
    deleteAppointment,
    getAppointmentsByArtist,
    cancelMyAppointment
} = require('../controllers/appointmentController');
const { protect, admin } = require('../middleware/authMiddleware');

const fs = require('fs');

router.route('/')
    .post((req, res, next) => {
        fs.appendFileSync('server.log', 'Route: POST /api/appointments hit\n');
        next();
    }, protect, createAppointment)
    .get(protect, admin, getAppointments);

router.get('/my', protect, getMyAppointments);
router.get('/artist/:artistId', getAppointmentsByArtist); // Public access to check availability

router.route('/:id/status').put(protect, admin, updateAppointmentStatus);
router.route('/:id/cancel').put(protect, cancelMyAppointment);
router.route('/:id').delete(protect, deleteAppointment);

module.exports = router;
