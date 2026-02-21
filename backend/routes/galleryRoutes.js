const express = require('express');
const router = express.Router();
const {
    getGalleryItems,
    getGalleryItemById,
    createGalleryItem,
    deleteGalleryItem,
    updateGalleryItem
} = require('../controllers/galleryController');
const { protect, admin } = require('../middleware/authMiddleware');

router.route('/').get(getGalleryItems).post(protect, admin, createGalleryItem);
router.route('/:id').get(getGalleryItemById).put(protect, admin, updateGalleryItem).delete(protect, admin, deleteGalleryItem);

module.exports = router;
