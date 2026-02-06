const express = require('express');
const router = express.Router();
const {
    getGalleryItems,
    getGalleryItemById,
    createGalleryItem,
    deleteGalleryItem
} = require('../controllers/galleryController');
const { protect, admin } = require('../middleware/authMiddleware');

router.route('/').get(getGalleryItems).post(protect, admin, createGalleryItem);
router.route('/:id').get(getGalleryItemById).delete(protect, admin, deleteGalleryItem);

module.exports = router;
