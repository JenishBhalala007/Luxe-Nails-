const mongoose = require('mongoose');
const Appointment = require('./models/Appointment');
const User = require('./models/User');
require('dotenv').config();

const checkDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB Connected');

        const count = await Appointment.countDocuments();
        console.log(`Total Appointments: ${count}`);

        if (count > 0) {
            const appointments = await Appointment.find().populate('client').populate('artist');
            console.log('Sample Appointment:', JSON.stringify(appointments[0], null, 2));
        }

        const admins = await User.find({ role: 'admin' });
        console.log(`Total Admins: ${admins.length}`);
        admins.forEach(admin => console.log(`Admin Layout: ${admin.email}, Role: ${admin.role}`));

        process.exit();
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

checkDB();
