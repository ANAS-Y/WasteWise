const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { ensureAuth, ensureAdmin } = require('../middleware/auth');

// Register a new user
router.post('/register', userController.registerUser);
// Login user
//router.post('/login', userController.loginUser);
//router.get('/login', login.html);

// Get all users (admin only)
//router.get('/', ensureAuth, ensureAdmin, userController.getUsers);

// Serving Static files 

// Serve login HTML page
router.get('login', (req, res) => {
    res.sendFile('login.html', { root: 'public' }); // Serve login.html from the public directory
});
router.get('signup', (req, res) => {
    res.sendFile('signup.html', { root: 'public' }); // Serve login.html from the public directory
});
router.get('main#services', (req, res) => {
    res.sendFile('index.html#services', { root: 'public' }); // Serve login.html from the public directory
});
router.get('main#scontact', (req, res) => {
    res.sendFile('index.html#contact', { root: 'public' }); // Serve login.html from the public directory
});
router.get('main', (req, res) => {
    res.sendFile('/', { root: 'public' }); // Serve login.html from the public directory
});
module.exports = router;
