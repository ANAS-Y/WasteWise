const express = require('express');
const router = express.Router();
//const authController = require('../controllers/authController');
//const { ensureAuth, ensureAdmin } = require('../middleware/auth');


// Serve login HTML page
router.get('login', (req, res) => {
    res.sendFile('login.html', { root: 'public' }); // Serve login.html from the public directory
});

module.exports = router;
