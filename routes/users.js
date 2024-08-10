const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { ensureAuth, ensureAdmin } = require('../middleware/auth');

// Register a new user
router.post('/register', ensureAuth, ensureAdmin,userController.registerUser);

// Login user
router.post('/login', userController.loginUser);

// Get all users (admin only)
//router.get('/users', ensureAuth, ensureAdmin, userController.getUsers);


// Serve all users HTML page (admin only)
router.get('/users', ensureAuth, ensureAdmin, (req, res) => {
    res.sendFile('users.html', { root: 'public' }); // Serve register.html from the public directory

});
router.get('/header.html', (req, res) => {
    res.sendFile('header.html', { root: 'public' }); 
   });

// route to system pages.
router.get('/main',  (req, res) => {
    res.sendFile('index.html', { root: 'public' }); 
  });

  router.get('/dumplocator', ensureAuth, (req, res) => {
    res.sendFile('dumplocation.html',{ root: 'public' }); 
  });
  router.get('/dumplocation.html', ensureAuth, (req, res) => {
    res.sendFile('dumplocation.html',{ root: 'public' }); 
  });
  router.get('/dumplocation', ensureAuth, (req, res) => {
    res.sendFile('dumplocation.html', { root: 'public' }); 
  });

  router.get('/recyclers.html', ensureAuth,(req, res) => {
    res.sendFile('recyclers.html', { root: 'public' }); 
  });
  router.get('/recyclers', ensureAuth,(req, res) => {
    res.sendFile('recyclers.html', { root: 'public' }); 
  });
  router.get('/classifier.html', ensureAuth,(req, res) => {
    res.sendFile('classifier.html', { root: 'public' }); 
  });
  router.get('/classifier', ensureAuth,(req, res) => {
    res.sendFile('classifier.html', { root: 'public' }); 
  });

  router.get('/home2', ensureAuth,(req, res) => {
    res.sendFile('home2.html', { root: 'public' }); 
  });
  router.get('/home2.html', ensureAuth,(req, res) => {
    res.sendFile('home2.html', { root: 'public' }); 
  });
  // Define the route for Dashboard
router.get('/dashboard', ensureAuth,ensureAdmin,(req, res) => {
  res.sendFile('home.html', { root: 'public' }); // Serve dashboard.html from the public directory
});
router.get('/userDashboard', ensureAuth,(req, res) => {
  res.sendFile('home2.html', { root: 'public' }); // Serve dashboard.html from the public directory
});
// Define the route for Dashboard
router.get('/dashboard', ensureAuth,ensureAdmin,(req, res) => {
  res.sendFile('home.html', { root: 'public' }); // Serve dashboard.html from the public directory
});
router.get('/userDashboard', ensureAuth,(req, res) => {
  res.sendFile('home2.html', { root: 'public' }); // Serve dashboard.html from the public directory
});
router.get('/collection', ensureAuth, (req, res) => {
  res.sendFile('collection.html',{ root: 'public' }); 
});
router.get('/route', ensureAuth, (req, res) => {
  res.sendFile('route.html',{ root: 'public' }); 
});
router.get('/location', ensureAuth, (req, res) => {
  res.sendFile('location.html',{ root: 'public' }); 
});


module.exports = router;
