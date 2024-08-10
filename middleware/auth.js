const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Middleware to authenticate the user
const ensureAuth = (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        return res.status(401).send(`
            <html>
  <head>
      <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet">
      <base href="/">
      <script>
          setTimeout(function() {
              window.location.href = "/api/auth/login";
          }, 3000);
      </script>
  </head>
  <body style="background-image:url('images/bg3.jpg'); background-size: cover; background-repeat: no-repeat;">
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <a class="navbar-brand" href="#">
          <img src="images/WASTE WISE PNG 6.png" width="198" height="39" alt="Waste Wise Logo">
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                  <a class="nav-link" href="api/page/main">Main</a>
              </li>
              <li class="nav-item">
                  <a onclick="location.href='index.html#services';
                  document.getElementById('services').style.display='block';"
                   class="nav-link" href="#services">Services
                  </a>
              </li>
              <li class="nav-item">
                  <a class="nav-link" href="#resources">Resources</a>
              </li>
              <li class="nav-item">
                  <a class="nav-link" href="#waste-classifier">Waste Classifier</a>
              </li>
              <li class="nav-item">
                  <a class="nav-link" href="#contact-us">Contact Us</a>
              </li>
          </ul>
      </div>
  </nav>
      <div class="container-fluid text-center mt-4 p-5">
          <div class="text-center text-Danger fade show" role="alert">
              <p style="font-weight: 600;">Unauthorized access, Please Login to access the page</p>
            </div>
              <a href="/api/auth/login" class="btn btn-success mt-3">Click here to Login >></a>
          
      </div>
      <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
  </body>
</html>
        `);
    }

    try {
        const decoded = jwt.verify(token, 'your_jwt_secret');
        req.user = decoded;
        next();
    } catch (err) {
        return res.status(401).send(`
            <html>
  <head>
      <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet">
      <base href="/">
      <script>
          setTimeout(function() {
              window.location.href = "/api/auth/login";
          }, 3000);
      </script>
  </head>
  <body style="background-image:url('images/bg3.jpg'); background-size: cover; background-repeat: no-repeat;">
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <a class="navbar-brand" href="#">
          <img src="images/WASTE WISE PNG 6.png" width="198" height="39" alt="Waste Wise Logo">
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                  <a class="nav-link" href="api/page/main">Main</a>
              </li>
              <li class="nav-item">
                  <a onclick="location.href='index.html#services';
                  document.getElementById('services').style.display='block';"
                   class="nav-link" href="#services">Services
                  </a>
              </li>
              <li class="nav-item">
                  <a class="nav-link" href="#resources">Resources</a>
              </li>
              <li class="nav-item">
                  <a class="nav-link" href="#waste-classifier">Waste Classifier</a>
              </li>
              <li class="nav-item">
                  <a class="nav-link" href="#contact-us">Contact Us</a>
              </li>
          </ul>
      </div>
  </nav>
      <div class="container-fluid text-center mt-4 p-5">
          <div class="text-center text-danger fade show" role="alert">
              <p style="font-weight: 600;">Unauthorized access, Please Login to access the page</p>
            </div>
              <a href="/api/auth/login" class="btn btn-success mt-3">Click here to Login >></a>
          
      </div>
      <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
  </body>
</html>
        `);
    }
};

// Middleware to ensure the user is an admin
const ensureAdmin = (req, res, next) => {
    if (req.user && req.user.role === 'admin') {
        next();
    } else {
        return res.status(401).send(`
            <html>
  <head>
      <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet">
     <base href="/">
      <script>
          setTimeout(function() {
              window.location.href = "/api/auth/login";
          }, 3000);
      </script>
  </head>
  <body style="background-image:url('images/bg3.jpg'); background-size: cover; background-repeat: no-repeat;">
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <a class="navbar-brand" href="#">
          <img src="images/WASTE WISE PNG 6.png" width="198" height="39" alt="Waste Wise Logo">
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                  <a class="nav-link" href="api/page/main">Main</a>
              </li>
              <li class="nav-item">
                  <a onclick="location.href='index.html#services';
                  document.getElementById('services').style.display='block';"
                   class="nav-link" href="#services">Services
                  </a>
              </li>
              <li class="nav-item">
                  <a class="nav-link" href="#resources">Resources</a>
              </li>
              <li class="nav-item">
                  <a class="nav-link" href="#waste-classifier">Waste Classifier</a>
              </li>
              <li class="nav-item">
                  <a class="nav-link" href="#contact-us">Contact Us</a>
              </li>
          </ul>
      </div>
  </nav>
      <div class="container-fluid text-center mt-4 p-5">
          <div class="text-center text-danger  fade show" role="alert">
              <p style="font-weight: 600;">Unauthorized access, Only Admin has access to this page!</p>
            </div>
              <a href="/api/auth/login" class="btn btn-success mt-3">Click here to Login >></a>
          
      </div>
      <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
  </body>
</html>
        `);
    }
    };


  // Log Out Middleware 
const ensureOut= (req, res, next) => {
    const token = req.cookies.token;
    if (token) {
        res.cookie('token', '', { maxAge: 1 });
        return res.status(401).send(`
<html>
  <head>
      <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet">
      <base href="/">
      <script>
          setTimeout(function() {
              window.location.href = "/api/auth/login";
          }, 3000);
      </script>
  </head>
  <body style="background-image:url('images/bg3.jpg'); background-size: cover; background-repeat: no-repeat;">
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <a class="navbar-brand" href="#">
          <img src="images/WASTE WISE PNG 6.png" width="198" height="39" alt="Waste Wise Logo">
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                  <a class="nav-link" href="api/page/main">Main</a>
              </li>
              <li class="nav-item">
                  <a onclick="location.href='index.html#services';
                  document.getElementById('services').style.display='block';"
                   class="nav-link" href="#services">Services
                  </a>
              </li>
              <li class="nav-item">
                  <a class="nav-link" href="#resources">Resources</a>
              </li>
              <li class="nav-item">
                  <a class="nav-link" href="#waste-classifier">Waste Classifier</a>
              </li>
              <li class="nav-item">
                  <a class="nav-link" href="#contact-us">Contact Us</a>
              </li>
          </ul>
      </div>
  </nav>
      <div class="container-fluid text-center mt-4 p-5">
          <div class="text-center text-Success fade show" role="alert">
              <p style="font-weight: 600;">Log Out Successfull</p>
            </div>
              <a href="/api/auth/login" class="btn btn-success mt-3">Click here to Login >></a>
          
      </div>
      <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
  </body>
</html>
        `);
    }else{
        return res.status(401).send(`
            <html>
  <head>
      <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet">
      <base href="/">
      <script>
          setTimeout(function() {
              window.location.href = "/api/auth/login";
          }, 3000);
      </script>
  </head>
  <body style="background-image:url('images/bg3.jpg'); background-size: cover; background-repeat: no-repeat;">
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <a class="navbar-brand" href="#">
          <img src="images/WASTE WISE PNG 6.png" width="198" height="39" alt="Waste Wise Logo">
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                  <a class="nav-link" href="api/page/main">Main</a>
              </li>
              <li class="nav-item">
                  <a onclick="location.href='index.html#services';
                  document.getElementById('services').style.display='block';"
                   class="nav-link" href="#services">Services
                  </a>
              </li>
              <li class="nav-item">
                  <a class="nav-link" href="#resources">Resources</a>
              </li>
              <li class="nav-item">
                  <a class="nav-link" href="#waste-classifier">Waste Classifier</a>
              </li>
              <li class="nav-item">
                  <a class="nav-link" href="#contact-us">Contact Us</a>
              </li>
          </ul>
      </div>
  </nav>
      <div class="container-fluid text-center mt-4 p-5">
          <div class="text-center Text-success fade show" role="alert">
              <p style="font-weight: 600;">Log Out Successfull</p>
            </div>
              <a href="/api/auth/login" class="btn btn-success mt-3">Click here to Login >></a>
          
      </div>
      <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
  </body>
</html>
        `);
    }

    try {
        const decoded = jwt.verify(token, 'your_jwt_secret');
        req.user = decoded;
        next();
    } catch (err) {
        return res.status(401).send(`
            <html>
  <head>
      <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet">
      <base href="/">
      <script>
          setTimeout(function() {
              window.location.href = "/api/auth/login";
          }, 3000);
      </script>
  </head>
  <body style="background-image:url('images/bg3.jpg'); background-size: cover; background-repeat: no-repeat;">
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <a class="navbar-brand" href="#">
          <img src="images/WASTE WISE PNG 6.png" width="198" height="39" alt="Waste Wise Logo">
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                  <a class="nav-link" href="api/page/main">Main</a>
              </li>
              <li class="nav-item">
                  <a onclick="location.href='index.html#services';
                  document.getElementById('services').style.display='block';"
                   class="nav-link" href="#services">Services
                  </a>
              </li>
              <li class="nav-item">
                  <a class="nav-link" href="#resources">Resources</a>
              </li>
              <li class="nav-item">
                  <a class="nav-link" href="#waste-classifier">Waste Classifier</a>
              </li>
              <li class="nav-item">
                  <a class="nav-link" href="#contact-us">Contact Us</a>
              </li>
          </ul>
      </div>
  </nav>
      <div class="container-fluid text-center mt-4 p-5">
          <div class="text-center  fade show" role="alert">
              <p style="font-weight: 600;">Unauthorized access, Please Login to access the page</p>
            </div>
              <a href="/api/auth/login" class="btn btn-success mt-3">Click here to Login >></a>
          
      </div>
      <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
  </body>
</html>
        `);
    }
};  

// Register a new user
router.post('/register', authController.registerUser);

// Login user
router.post('/login', authController.loginUser);

// Logout user
router.post('/logout', ensureAuth, authController.logoutUser);

// middleware/auth.js
const jwt = require('jsonwebtoken');


module.exports = { ensureAuth, ensureAdmin,ensureOut };