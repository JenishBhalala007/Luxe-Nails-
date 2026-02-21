const Gallery = require('../models/Gallery');

// @desc    Get all gallery items
// @route   GET /api/gallery
// @access  Public
// @desc    Get all gallery items
// @route   GET /api/gallery
// @access  Public
const getGalleryItems = async (req, res) => {
    try {
        const galleryItems = await Gallery.find({});
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
        const galleryItem = await Gallery.findById(req.params.id);
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
    const { title, description, imageUrl, category, tags, duration, price, artist } = req.body;

    try {
        const galleryItem = await Gallery.create({
            title,
            description,
            imageUrl,
            category,
            tags,
            duration,
            price,
            artist
        });
        res.status(201).json(galleryItem);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// @desc    Update a gallery item
// @route   PUT /api/gallery/:id
// @access  Private/Admin
const updateGalleryItem = async (req, res) => {
    const { title, description, imageUrl, category, tags, duration, price, artist } = req.body;

    try {
        const galleryItem = await Gallery.findById(req.params.id);

        if (galleryItem) {
            galleryItem.title = title || galleryItem.title;
            galleryItem.description = description || galleryItem.description;
            galleryItem.imageUrl = imageUrl || galleryItem.imageUrl;
            galleryItem.category = category || galleryItem.category;
            galleryItem.tags = tags || galleryItem.tags;
            galleryItem.duration = duration || galleryItem.duration;
            galleryItem.price = price || galleryItem.price;
            galleryItem.artist = artist || galleryItem.artist;

            const updatedGalleryItem = await galleryItem.save();
            res.json(updatedGalleryItem);
        } else {
            res.status(404).json({ message: 'Gallery item not found' });
        }
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
    deleteGalleryItem,
    updateGalleryItem
};
