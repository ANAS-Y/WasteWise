const express = require('express');
const router = express.Router();
const userController = require('../controllers/collectionController');
const { ensureAuth, ensureAdmin } = require('../middleware/auth');




module.exports = router;