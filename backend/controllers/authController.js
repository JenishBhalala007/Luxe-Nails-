const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/User');

// Generate JWT Token
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    });
};

// @desc    Register new user
// @route   POST /api/auth/register
// @access  Public
const registerUser = async (req, res) => {
    const { name, email, password, role, phone, address, bio, skills, experience } = req.body;
    console.log('Register request received:', { name, email, role });

    try {
        if (!name || !email || !password) {
            return res.status(400).json({ message: 'Please add all fields' });
        }

        // Check if user exists
        const userExists = await User.findOne({ email });

        if (userExists) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Map skills to specialty if role is artist
        let specialty = '';
        let workingHours = {};

        if (role === 'artist') {
            specialty = Array.isArray(skills) ? skills.join(', ') : (skills || 'General');
            workingHours = {
                "Monday": "9:00 AM - 5:00 PM",
                "Tuesday": "9:00 AM - 5:00 PM",
                "Wednesday": "9:00 AM - 5:00 PM",
                "Thursday": "9:00 AM - 5:00 PM",
                "Friday": "9:00 AM - 5:00 PM"
            };
        }

        // Create user
        const user = await User.create({
            name,
            email,
            password,
            role: role || 'client',
            phone,
            address: address || '',
            bio: bio || '',
            skills: skills || [],
            experience: experience || '',
            specialty: specialty,
            workingHours: workingHours
        });

        // If user is an artist, create an Artist profile (Deprecated - Artist data is now in User model)
        // Legacy code removed.

        if (user) {
            res.status(201).json({
                user: {
                    _id: user.id,
                    name: user.name,
                    email: user.email,
                    role: user.role,
                    phone: user.phone,
                    address: user.address
                },
                token: generateToken(user.id),
            });
        } else {
            res.status(400).json({ message: 'Invalid user data' });
        }
    } catch (error) {
        console.error('Registration error:', error); // Debug log
        res.status(500).json({ message: error.message });
    }
};

// @desc    Authenticate a user
// @route   POST /api/auth/login
// @access  Public
const loginUser = async (req, res) => {
    const { email, password } = req.body;
    console.log('Login Attempt:', { email, passwordGiven: password });

    try {
        // Check for user email
        const user = await User.findOne({ email });
        console.log('User found:', user ? 'Yes' : 'No', user ? user.email : '');

        if (user) {
            const isMatch = await user.matchPassword(password);
            console.log('Password Match:', isMatch);

            if (isMatch) {
                res.json({
                    _id: user.id,
                    name: user.name,
                    email: user.email, // Fixed structure to match frontend expectation (was nested in 'user' object in previous snippet but let's check my previous view of this file)
                    user: { // Wait, the previous code returned { user: {...}, token: ... }
                        _id: user.id,
                        name: user.name,
                        email: user.email,
                        role: user.role,
                        phone: user.phone,
                        address: user.address
                    },
                    token: generateToken(user.id),
                });
                return;
            }
        }

        console.log('Login failed: Invalid credentials');
        res.status(401).json({ message: 'Invalid credentials' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Get user data
// @route   GET /api/auth/me
// @access  Private
const getMe = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    registerUser,
    loginUser,
    getMe,
};
