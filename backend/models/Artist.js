const mongoose = require('mongoose');

const artistSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    specialty: {
        type: String,
        required: true
    },
    bio: {
        type: String
    },
    imageUrl: {
        type: String
    },
    workingHours: {
        type: Map,
        of: String // e.g., "Monday": "9AM - 5PM"
    },
    isActive: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Artist', artistSchema);
