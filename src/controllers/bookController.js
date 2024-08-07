// src/controllers/bookController.js
const Book = require('../models/books');
exports.getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getBookByISBN = async (req, res) => {
  try {
    const book = await Book.findOne({ isbn: req.params.isbn });
    if (book) {
      res.json(book);
    } else {
      res.status(404).json({ message: 'Livre non trouvé' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getBooksByAuthor = async (req, res) => {
  try {
    const books = await Book.find({ author: req.params.author });
    if (books.length > 0) {
      res.json(books);
    } else {
      res.status(404).json({ message: 'Aucun livre trouvé pour cet auteur' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getBooksByTitle = async (req, res) => {
  try {
    const books = await Book.find({ title: { $regex: req.params.title, $options: 'i' } });
    if (books.length > 0) {
      res.json(books);
    } else {
      res.status(404).json({ message: 'Aucun livre trouvé avec ce titre' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



