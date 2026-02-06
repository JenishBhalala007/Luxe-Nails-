const Artist = require('../models/Artist');

// @desc    Get all artists
// @route   GET /api/artists
// @access  Public
const getArtists = async (req, res) => {
    try {
        const artists = await Artist.find({ isActive: true });
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
        const artist = await Artist.findById(req.params.id);
        if (artist) {
            res.json(artist);
        } else {
            res.status(404).json({ message: 'Artist not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Create an artist
// @route   POST /api/artists
// @access  Private/Admin
const createArtist = async (req, res) => {
    const { name, specialty, bio, imageUrl, workingHours } = req.body;

    try {
        const artist = await Artist.create({
            name,
            specialty,
            bio,
            imageUrl,
            workingHours
        });
        res.status(201).json(artist);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// @desc    Update an artist
// @route   PUT /api/artists/:id
// @access  Private/Admin
const updateArtist = async (req, res) => {
    const { name, specialty, bio, imageUrl, workingHours, isActive } = req.body;

    try {
        const artist = await Artist.findById(req.params.id);

        if (artist) {
            artist.name = name || artist.name;
            artist.specialty = specialty || artist.specialty;
            artist.bio = bio || artist.bio;
            artist.imageUrl = imageUrl || artist.imageUrl;
            artist.workingHours = workingHours || artist.workingHours;
            if (isActive !== undefined) artist.isActive = isActive;

            const updatedArtist = await artist.save();
            res.json(updatedArtist);
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
        const artist = await Artist.findById(req.params.id);

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
