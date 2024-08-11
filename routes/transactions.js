const express = require('express');
const router = express.Router();
const transactionController = require('../controllers/transactionController'); 
const { ensureAuth, ensureAdmin } = require('../middleware/auth');



router.get('/issue', transactionController.issueBook);

router.post('/transactions',ensureAuth, ensureAdmin, transactionController.getTransactions);
router.post('/utransactions',ensureAuth,transactionController.getUTransactions);
// Route to return a book
router.put('/return', ensureAuth, ensureAdmin, transactionController.returnBook);
router.get('/return', ensureAuth, ensureAdmin,(req, res) => {
    res.sendFile('returnBook.html', { root: 'public' }); 
  });
  router.get('/update', ensureAuth, ensureAdmin, (req, res) => {
    res.sendFile('update.html', { root: 'public' }); 
  });
  router.get('/overdue', ensureAuth, ensureAdmin, (req, res) => {
    res.sendFile('overdueBooks.html', { root: 'public' }); 
  });
  router.get('/userOverdue', ensureAuth,(req, res) => {
    res.sendFile('uOverdueBooks.html', { root: 'public' }); 
  });
  router.get('/userRequest', ensureAuth,(req, res) => {
    res.sendFile('userUpdate.html', { root: 'public' }); 
  });
  router.get('/borrowedBooks', ensureAuth, ensureAdmin, (req, res) => {
    res.sendFile('issuedBook.html', { root: 'public' }); 
  });
  router.get('/uborrowedBooks', ensureAuth, (req, res) => {
    res.sendFile('uBorrowedBooks.html', { root: 'public' }); 
  });
  router.get('/uissuedBooks', ensureAuth, transactionController.getUIssuedBooks);
// Route to get overdue books
router.get('/uoverdueBooks', ensureAuth,transactionController.getUOverdueBooks);
router.get('/overdueBooks', ensureAuth, ensureAdmin, transactionController.getOverdueBooks);
// Route to update transaction status
router.put('/updateStatus', ensureAuth, ensureAdmin, transactionController.updateStatus);
router.get('/returnedBooks', ensureAuth, ensureAdmin, transactionController.getReturnedBooks);
router.get('/issuedBooks', ensureAuth, ensureAdmin, transactionController.getIssuedBooks);
router.get('/stats', ensureAuth, ensureAdmin, transactionController.getStats);
// In the transactions route file (routes/transactions.js)
router.delete('/delete', ensureAuth, ensureAdmin, transactionController.deleteTransaction);

router.get('/header.html', ensureAuth, (req, res) => {
  res.sendFile('header.html', { root: 'public' }); 
 });


module.exports = router;
