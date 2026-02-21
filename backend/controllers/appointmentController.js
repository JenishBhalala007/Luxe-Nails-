const fs = require('fs');
const Appointment = require('../models/Appointment');

// @desc    Create new appointment
// @route   POST /api/appointments
// @access  Private
const createAppointment = async (req, res) => {
    const { artistId, services, nailDesigns, date, time, notes, paymentMethod, totalAmount } = req.body;
    fs.appendFileSync('server.log', `CreateAppt: Request received. Artist: ${artistId}, Date: ${date}\n`);

    try {
        // Check for existing appointment ONLY if a specific artist was requested.
        // If artistId is null or undefined (broadcast), we don't block the slot based on a single overlapping appointment
        if (artistId) {
            const existingAppointment = await Appointment.findOne({
                artist: artistId,
                date: date,
                time: time,
                status: { $ne: 'cancelled' }
            });

            if (existingAppointment) {
                fs.appendFileSync('server.log', `CreateAppt: Slot blocked\n`);
                return res.status(400).json({ message: 'Slot already booked for this artist' });
            }
        }

        fs.appendFileSync('server.log', `CreateAppt: Creating DB entry...\n`);
        const appointment = await Appointment.create({
            client: req.user.id,
            artist: artistId,
            services: services,        // Expecting array of IDs
            nailDesigns: nailDesigns,  // Expecting array of IDs
            date,
            time,
            notes,
            paymentMethod,
            totalAmount,
            isBroadcast: !artistId
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
// @desc    Get appointments for logged in user (Client) or Artist
// @route   GET /api/appointments/my
// @access  Private
const getMyAppointments = async (req, res) => {
    fs.appendFileSync('server.log', `GetMyProps: Fetching for user ${req.user.id} (${req.user.role})\n`);
    try {
        let query = {};
        if (req.user.role === 'artist') {
            // Find appointments specifically assigned to this artist, OR broadcast appointments (artist is null, status is pending, and this artist hasn't declined it)
            query = {
                $or: [
                    { artist: req.user.id },
                    { 
                        artist: null, 
                        status: 'pending',
                        declinedBy: { $ne: req.user.id }
                    }
                ]
            };
        } else {
            // Clients only see their own appointments
            query = { client: req.user.id };
        }

        const appointments = await Appointment.find(query)
            .populate('artist', 'name profileImage basePrice')
            .populate('client', 'name email profileImage')
            .populate('services', 'name price priceRange duration')
            .populate('nailDesigns', 'title imageUrl price');
        
        fs.appendFileSync('server.log', `GetMyProps: Found ${appointments.length} records\n`);
        res.json(appointments);
    } catch (error) {
        fs.appendFileSync('server.log', `GetMyProps: Error ${error.message}\n`);
        res.status(500).json({ message: error.message });
    }
};

// @desc    Get all appointments (Admin/Worker)
// @route   GET /api/appointments
// @access  Private/Admin
const getAppointments = async (req, res) => {
    fs.appendFileSync('server.log', 'GetAppointments: Request received\n');
    try {
        const appointments = await Appointment.find({})
            .populate('client', 'name email')
            .populate('artist', 'name basePrice')
            .populate('services', 'name price priceRange duration')
            .populate('nailDesigns', 'title price');
        
        fs.appendFileSync('server.log', `GetAppointments: Found ${appointments.length} appointments\n`);
        res.json(appointments);
    } catch (error) {
        fs.appendFileSync('server.log', `GetAppointments: Error ${error.message}\n`);
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
            // If the appointment is being ACCEPTED from a broadcast state
            if (!appointment.artist && req.user.role === 'artist' && status === 'confirmed') {
                appointment.artist = req.user.id;
            } 
            // If the appointment is a broadcast and is being DECLINED
            else if (!appointment.artist && req.user.role === 'artist' && status === 'cancelled') {
                if (!appointment.declinedBy.includes(req.user.id)) {
                    appointment.declinedBy.push(req.user.id);
                }
                const updatedAppointment = await appointment.save();
                return res.json(updatedAppointment);
            } 
            else {
                // Typical authorization check for assigned appointments
                if (req.user.role !== 'admin' && 
                    (!appointment.artist || appointment.artist.toString() !== req.user.id)) {
                    return res.status(401).json({ message: 'Not authorized to update this appointment' });
                }
            }

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
