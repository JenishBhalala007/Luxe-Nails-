const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['client', 'admin', 'artist'],
        default: 'client'
    },
    phone: {
        type: String
    },
    address: {
        type: String,
        default: ''
    },
    bio: {
        type: String,
        default: ''
    },
    skills: {
        type: [String],
        default: []
    },
    experience: {
        type: String,
        default: ''
    },
    // Artist Specific Fields
    specialty: {
        type: String, // e.g. "Gel Polish, Acrylics"
        default: ''
    },
    imageUrl: {
        type: String,
        default: ''
    },
    workingHours: {
        type: Map,
        of: String,
        default: {}
    },
    isActive: {
        type: Boolean,
        default: true
    },
    portfolio: {
        type: [String],
        default: []
    },
    basePrice: {
        type: Number,
        default: 200
    }
}, {
    timestamps: true
});

// Encrypt password using bcrypt
userSchema.pre('save', async function () {
    if (!this.isModified('password')) {
        return;
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

// Match user entered password to hashed password in database
userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model('User', userSchema);
