const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const multer = require('multer');
const axios = require('axios');
const fs = require('fs');
const path = require('path');
const { classifyImage, classifyText } = require('./src/classify_image');
const userRoutes = require('./routes/userRoutes');
//const wasteCollectionRoutes = require('./routes/wasteCollectionRoutes');
//const wasteDisposalRoutes = require('./routes/wasteDisposalRoutes');
const reportRoutes = require('./routes/reportRoutes');

const app = express();
app.use(bodyParser.json());  // Parse JSON bodies

// Middleware to parse incoming request bodies
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(express.static('public')); // Serve static files from the 'public' directory


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
app.use('/api/auth', userRoutes);
//app.use('/api/waste-collections', wasteCollectionRoutes);
//app.use('/api/waste-disposals', wasteDisposalRoutes);
app.use('/api/reports', reportRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
    res.status(err.status || 500).json({ error: err.message });
  });
  
  // Connect to MongoDB
  mongoose.connect('mongodb://localhost:27017/library')
    .then(() => {
      console.log('Connected to MongoDB');
      app.listen(3000, () => {
        console.log('Server is running on port 3000');
      });
    })
    .catch((err) => {
      console.error('Error connecting to MongoDB', err);
    });
  