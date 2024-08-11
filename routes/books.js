const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController'); 
const { ensureAuth, ensureAdmin } = require('../middleware/auth');

// Route to add a new book
router.post('/add',ensureAuth, ensureAdmin, bookController.addBook);
router.get('/add', (req, res) => {
    res.sendFile('add_books.html', { root: 'public' }); 
   });
// Route to get all books
router.get('/books', (req, res) => {
   res.sendFile('books.html', { root: 'public' }); 
   });
   // Route to get all books for User
router.get('/userBooks', (req, res) => {
   res.sendFile('userBooks.html', { root: 'public' }); 
   });

   router.get('/header.html', (req, res) => {
      res.sendFile('header.html', { root: 'public' }); 
     });

// Route to get a specific book by ID
router.get('/:id', bookController.getBookById);

// Route to get  books
router.post('/books', bookController.getAllBooks);

// Route to update a book by ID
router.put('/:id', ensureAuth, ensureAdmin, bookController.updateBook);

// Route to delete a book by ID
router.delete('/:id',ensureAuth, ensureAdmin, bookController.deleteBook);

module.exports = router;
