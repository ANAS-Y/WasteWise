const express = require('express');
const router = express.Router();
const { ensureAuth, ensureAdmin } = require('../middleware/auth');

const collectionController = require('../controllers/collectionController');

router.post('/submitCollection',ensureAuth, collectionController.submitCollectionDetails);

module.exports = router;


