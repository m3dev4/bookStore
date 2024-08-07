

// src/controllers/reviewController.js
const Review = require('../models/review');
const Book = require('../models/books');

exports.getBookReviews = async (req, res) => {
  try {
    const book = await Book.findOne({ isbn: req.params.isbn });
    if (!book) {
      return res.status(404).json({ message: 'Livre non trouvé' });
    }
    const reviews = await Review.find({ bookId: book._id });
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
exports.addReview = async (req, res) => {
    try {
      const book = await Book.findOne({ isbn: req.params.isbn });
      if (!book) {
        return res.status(404).json({ message: 'Livre non trouvé' });
      }
      const review = new Review({
        bookId: book._id,
        userId: req.userId,
        rating: req.body.rating,
        comment: req.body.comment
      });
      await review.save();
      res.status(201).json(review);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  exports.updateReview = async (req, res) => {
    try {
      const review = await Review.findOne({ _id: req.params.reviewId, userId: req.userId });
      if (!review) {
        return res.status(404).json({ message: 'Critique non trouvée ou non autorisée' });
      }
      if (req.body.rating) review.rating = req.body.rating;
      if (req.body.comment) review.comment = req.body.comment;
      await review.save();
      res.json(review);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  exports.deleteReview = async (req, res) => {
    try {
      const review = await Review.findOneAndDelete({ _id: req.params.reviewId, userId: req.userId });
      if (!review) {
        return res.status(404).json({ message: 'Critique non trouvée ou non autorisée' });
      }
      res.json({ message: 'Critique supprimée avec succès' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };