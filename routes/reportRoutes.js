const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { ensureAuth, ensureAdmin } = require('../middleware/auth');


router.get('classifier', (req, res) => {
    res.sendFile('classifier.html', { root: 'public' }); // Serve login.html from the public directory
});
router.get('tips', (req, res) => {
    res.sendFile('tips.html', { root: 'public' }); // Serve login.html from the public directory
});
router.get('dumplocator', (req, res) => {
    res.sendFile('dumplocation.html', { root: 'public' }); // Serve login.html from the public directory
});
router.get('recyclers', (req, res) => {
    res.sendFile('recyclers.html', { root: 'public' }); // Serve login.html from the public directory
});
router.get('gallery', (req, res) => {
    res.sendFile('gallery.html', { root: 'public' }); // Serve login.html from the public directory
});
router.get('main', (req, res) => {
    res.sendFile('/', { root: 'public' }); // Serve login.html from the public directory
});
router.get('dashbord', (req, res) => {
    res.sendFile('index.html', { root: 'public' }); // Serve login.html from the public directory
});

module.exports = router;