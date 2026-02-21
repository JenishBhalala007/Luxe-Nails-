const User = require('../models/User');

// @desc    Get all artists
// @route   GET /api/artists
// @access  Public
const getArtists = async (req, res) => {
    try {
        // Fetch all artists with role 'artist'
        let artists = await User.find({ role: 'artist' })
            .select('-password');
        
        // Filter by isActive in memory to ensure reliability
        artists = artists.filter(artist => artist.isActive === true);

        res.json(artists);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Get artist by ID
// @route   GET /api/artists/:id
// @access  Public
const getArtistById = async (req, res) => {
    try {
        const artist = await User.findOne({ _id: req.params.id, role: 'artist' })
            .select('-password');
        if (artist) {
            res.json(artist);
        } else {
            res.status(404).json({ message: 'Artist not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Create an artist (Admin only)
// @route   POST /api/artists
// @access  Private/Admin
const createArtist = async (req, res) => {
    const { name, email, password, specialty, bio, imageUrl, workingHours } = req.body;

    try {
        const artist = await User.create({
            name,
            email,
            password,
            role: 'artist',
            specialty,
            bio,
            imageUrl,
            workingHours,
            isActive: true
        });

        // Remove password from response
        const artistResponse = artist.toObject();
        delete artistResponse.password;

        res.status(201).json(artistResponse);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// @desc    Update an artist
// @route   PUT /api/artists/:id
// @access  Private/Admin
const updateArtist = async (req, res) => {
    const { name, specialty, bio, imageUrl, workingHours, isActive, portfolio } = req.body;

    try {
        const artist = await User.findOne({ _id: req.params.id, role: 'artist' });

        if (artist) {
            artist.name = name || artist.name;
            artist.specialty = specialty || artist.specialty;
            artist.bio = bio || artist.bio;
            artist.imageUrl = imageUrl || artist.imageUrl;
            artist.workingHours = workingHours || artist.workingHours;
            artist.portfolio = portfolio || artist.portfolio;
            if (isActive !== undefined) artist.isActive = isActive;

            const updatedArtist = await artist.save();
            const artistResponse = updatedArtist.toObject();
            delete artistResponse.password;

            res.json(artistResponse);
        } else {
            res.status(404).json({ message: 'Artist not found' });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// @desc    Delete an artist (soft delete prefered, but hard delete here)
// @route   DELETE /api/artists/:id
// @access  Private/Admin
const deleteArtist = async (req, res) => {
    try {
        const artist = await User.findOne({ _id: req.params.id, role: 'artist' });

        if (artist) {
            await artist.deleteOne();
            res.json({ message: 'Artist removed' });
        } else {
            res.status(404).json({ message: 'Artist not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getArtists,
    getArtistById,
    createArtist,
    updateArtist,
    deleteArtist
};
