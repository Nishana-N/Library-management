const express = require('express');
const router = express.Router();
const Book = require('../model/Book');

// Get all books
router.get('/', async (req, res) => {
    try {
      const books = await Book.find();
      res.json(books);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  
  // Add a new book
  router.post('/', async (req, res) => {
    const book = new Book({
      title: req.body.title,
      author: req.body.author,
      genre: req.body.genre,
      publicationYear: req.body.publicationYear,
      description: req.body.description,
    });
  
    try {
      const newBook = await book.save();
      res.status(201).json(newBook);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });
  
  // Update a book
  router.put('/:id', async (req, res) => {
    try {
      const updatedBook = await Book.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      res.json(updatedBook);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });
  
  // Delete a book
  router.delete('/:id', async (req, res) => {
    try {
      await Book.findByIdAndDelete(req.params.id);
      
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  
 
  router.get('/search?query=', async (req, res) => {
    const { query } = req.query;
  
    try {
      const books = await Book.find({
        $or: [{ title: { $regex: query, $options: 'i' } }, { author: { $regex: query, $options: 'i' } }],
      });
      res.json(books);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  
  
  module.exports = router;