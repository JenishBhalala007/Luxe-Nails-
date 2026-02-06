const fs = require('fs');
const Appointment = require('../models/Appointment');

// @desc    Create new appointment
// @route   POST /api/appointments
// @access  Private
const createAppointment = async (req, res) => {
    const { artistId, serviceId, date, time, notes, paymentMethod, totalAmount } = req.body;
    fs.appendFileSync('server.log', `CreateAppt: Request received. Artist: ${artistId}, Date: ${date}\n`);

    try {
        // Check for existing appointment
        const existingAppointment = await Appointment.findOne({
            artist: artistId,
            date: date,
            time: time,
            status: { $ne: 'cancelled' }
        });

        if (existingAppointment) {
            fs.appendFileSync('server.log', `CreateAppt: Slot blocked\n`);
            return res.status(400).json({ message: 'Slot already booked' });
        }

        fs.appendFileSync('server.log', `CreateAppt: Creating DB entry...\n`);
        const appointment = await Appointment.create({
            client: req.user.id,
            artist: artistId,
            service: serviceId,
            date,
            time,
            notes,
            paymentMethod,
            totalAmount
        });

        fs.appendFileSync('server.log', `CreateAppt: Success ${appointment._id}\n`);
        res.status(201).json(appointment);
    } catch (error) {
        fs.appendFileSync('server.log', `CreateAppt: Error ${error.message}\n`);
        res.status(400).json({ message: error.message });
    }
};

// @desc    Get appointments for logged in user (Client) or Artist
// @route   GET /api/appointments/my
// @access  Private
const getMyAppointments = async (req, res) => {
    fs.appendFileSync('server.log', `GetMyProps: Fetching for user ${req.user.id}\n`);
    try {
        const appointments = await Appointment.find({ client: req.user.id })
            .populate('artist', 'name')
            .populate('service', 'name price duration');
        fs.appendFileSync('server.log', `GetMyProps: Found ${appointments.length} records\n`);
        res.json(appointments);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Get all appointments (Admin/Worker)
// @route   GET /api/appointments
// @access  Private/Admin
const getAppointments = async (req, res) => {
    try {
        const appointments = await Appointment.find({})
            .populate('client', 'name email')
            .populate('artist', 'name')
            .populate('service', 'name');
        res.json(appointments);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Update appointment status
// @route   PUT /api/appointments/:id/status
// @access  Private/Admin
const updateAppointmentStatus = async (req, res) => {
    const { status } = req.body;

    try {
        const appointment = await Appointment.findById(req.params.id);

        if (appointment) {
            appointment.status = status;
            const updatedAppointment = await appointment.save();
            res.json(updatedAppointment);
        } else {
            res.status(404).json({ message: 'Appointment not found' });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// @desc    Cancel appointment (User)
// @route   PUT /api/appointments/:id/cancel
// @access  Private
const cancelMyAppointment = async (req, res) => {
    try {
        const appointment = await Appointment.findById(req.params.id);

        if (appointment) {
            // Check if user is owner
            if (appointment.client.toString() !== req.user.id && req.user.role !== 'admin') {
                return res.status(401).json({ message: 'Not authorized' });
            }

            appointment.status = 'cancelled';
            const updatedAppointment = await appointment.save();
            res.json(updatedAppointment);
        } else {
            res.status(404).json({ message: 'Appointment not found' });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// @desc    Delete appointment
// @route   DELETE /api/appointments/:id
// @access  Private
const deleteAppointment = async (req, res) => {
    try {
        const appointment = await Appointment.findById(req.params.id);

        if (appointment) {
            // Check if user is owner or admin
            if (appointment.client.toString() !== req.user.id && req.user.role !== 'admin') {
                return res.status(401).json({ message: 'Not authorized' });
            }

            await appointment.deleteOne();
            res.json({ message: 'Appointment removed' });
        } else {
            res.status(404).json({ message: 'Appointment not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Get appointments by artist
// @route   GET /api/appointments/artist/:artistId
// @access  Private
const getAppointmentsByArtist = async (req, res) => {
    const { artistId } = req.params;
    const { date } = req.query;

    try {
        let query = { artist: artistId, status: { $ne: 'cancelled' } };

        // Exact date match if provided
        if (date) {
            query.date = date;
        }

        // We only need date, time, and duration for availability
        const appointments = await Appointment.find(query).select('date time duration status');
        res.json(appointments);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    createAppointment,
    getMyAppointments,
    getAppointments,
    getAppointmentsByArtist,
    updateAppointmentStatus,
    cancelMyAppointment,
    deleteAppointment
};
