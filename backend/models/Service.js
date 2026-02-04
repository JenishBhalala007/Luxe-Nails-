const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    price: {
        type: Number,
        required: true,
    },
    duration: {
        type: Number, // in minutes
        required: true,
    },
    imageUrl: {
        type: String,
    },
}, { timestamps: true });

module.exports = mongoose.model('Service', serviceSchema);
