const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const authRoutes = require('./routes/auth');
const usersRoutes = require('./routes/users');
const collectionRoutes = require('./routes/collectionRoutes');
const routeRoutes = require('./routes/routeRoutes');
const multer = require('multer');
const axios = require('axios');
const fs = require('fs');
const path = require('path');
const { classifyImage, classifyText } = require('./src/classify_image');


const app = express();

// Middleware to parse incoming request bodies
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(express.static('public')); // Serve static files from the 'public' directory

//Hugging Face API key for Image Classification
const apiKey = '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'; // Your Hugging Face API key

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/uploads');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});
// Configure multer for file upload handling
const upload = multer({ dest: 'uploads/' });

app.post('/api/classify', upload.single('image'), async (req, res) => {
  try {
    const imagePath = req.file.path;
    const result = await classifyImage(imagePath);

    // Delete the uploaded file after classification
    fs.unlinkSync(imagePath);

    res.json(result);
  } catch (error) {
    console.error('Error classifying this image try Please Try again!:', error);
    res.status(500).json({ error: 'Error classifying this image try Please Try again!' });
  }
});


// Routes
app.use('/api/auth', authRoutes);
app.use('/api/page', usersRoutes);
app.use('/api/route', routeRoutes);
app.use('/api/collections', collectionRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  //res.status(err.status || 500).json({ error: err.message });
  res.status(404).sendFile(path.join(__dirname, 'public', 'error.html'));
});
// Catch 404 errors (route not found)
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, 'public', 'error.html'));
});

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/waisewise')
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(3000, () => {
      console.log('Server is running on port 3000');
    });
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB', err);
  });
