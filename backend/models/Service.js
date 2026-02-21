const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    priceRange: {
        min: { type: Number, required: true },
        max: { type: Number, required: true }
    },
    timeRange: { // in minutes
        min: { type: Number, required: true },
        max: { type: Number, required: true }
    },
    category: {
        type: [String],
        required: true
    },
    imageUrl: {
        type: String
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Service', serviceSchema);
