// src/routes/reviewRoutes.js
const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/reviewController');
const auth = require('../middleware/auth');



router.get('/book/:isbn', reviewController.getBookReviews);
router.post('/book/:isbn', auth, reviewController.addReview);
router.put('/:reviewId', auth, reviewController.updateReview);
router.delete('/:reviewId', auth, reviewController.deleteReview);

module.exports = router;