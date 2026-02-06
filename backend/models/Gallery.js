const mongoose = require('mongoose');

const gallerySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    imageUrl: {
        type: String,
        required: true
    },
    category: {
        type: String, // e.g., 'Nail Art', 'Manicure', 'Pedicure'
        required: true
    },
    artist: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Artist'
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Gallery', gallerySchema);
