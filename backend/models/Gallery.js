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
    tags: [{
        type: String
    }],
    duration: {
        type: Number // in minutes, optional override/specific
    },
    price: {
        type: Number // optional specific price
    },
    artist: {
        type: String, // Storing name directly for display flexibility
        required: false
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Gallery', gallerySchema);
