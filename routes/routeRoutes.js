const express = require('express');
const router = express.Router();
const { ensureAuth, ensureAdmin } = require('../middleware/auth');
const routeController = require('../controllers/routeController');

router.post('/submit-route',ensureAuth, routeController.submitRouteDetails);

module.exports = router;




module.exports = router;