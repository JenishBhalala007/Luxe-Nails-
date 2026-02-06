const Gallery = require('../models/Gallery');

// @desc    Get all gallery items
// @route   GET /api/gallery
// @access  Public
const getGalleryItems = async (req, res) => {
    try {
        const galleryItems = await Gallery.find({}).populate('artist', 'name');
        res.json(galleryItems);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Get single gallery item
// @route   GET /api/gallery/:id
// @access  Public
const getGalleryItemById = async (req, res) => {
    try {
        const galleryItem = await Gallery.findById(req.params.id).populate('artist', 'name');
        if (galleryItem) {
            res.json(galleryItem);
        } else {
            res.status(404).json({ message: 'Gallery item not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Create a gallery item
// @route   POST /api/gallery
// @access  Private/Admin
const createGalleryItem = async (req, res) => {
    const { title, description, imageUrl, category, artistId } = req.body;

    try {
        const galleryItem = await Gallery.create({
            title,
            description,
            imageUrl,
            category,
            artist: artistId
        });
        res.status(201).json(galleryItem);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// @desc    Delete a gallery item
// @route   DELETE /api/gallery/:id
// @access  Private/Admin
const deleteGalleryItem = async (req, res) => {
    try {
        const galleryItem = await Gallery.findById(req.params.id);

        if (galleryItem) {
            await galleryItem.deleteOne();
            res.json({ message: 'Gallery item removed' });
        } else {
            res.status(404).json({ message: 'Gallery item not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getGalleryItems,
    getGalleryItemById,
    createGalleryItem,
    deleteGalleryItem
};
