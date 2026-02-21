const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
    client: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    artist: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    declinedBy: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    services: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Service',
        required: true
    }],
    nailDesigns: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Gallery'
    }],
    date: {
        type: Date,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['pending', 'confirmed', 'cancelled', 'completed'],
        default: 'pending'
    },
    notes: {
        type: String
    },
    paymentMethod: {
        type: String,
        enum: ['card', 'cash', 'upi'],
        required: true
    },
    totalAmount: {
        type: Number
    },
    isBroadcast: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Appointment', appointmentSchema);
