const axios = require('axios');
const fs = require('fs');

// Your Hugging Face API key
const apiKey = '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';

// Function to classify an image using the Hugging Face API
async function classifyImage(imagePath) {
  try {
    // Read the image file
    const imageBuffer = fs.readFileSync(imagePath);
    const base64Image = imageBuffer.toString('base64');

    // Make the API request
    const response = await axios.post(
      'https://api-inference.huggingface.co/models/google/vit-base-patch16-224',
      { inputs: base64Image },
      { headers: { Authorization: `Bearer ${apiKey}` } }
    );

    const predictions = response.data.map(prediction => ({
      label: prediction.label,
      confidence: prediction.score
    }));

    // Log the predictions
    //console.log('Predictions:', predictions);

    // Classify the text of the predictions
    const text = predictions.map(p => p.label).join(', ');
    const textClassification = await classifyText(text);

    const categories = textClassification === 'positive' ? 'Recyclable Objects' : 'Non-Recyclable Objects';
    //console.log('Category:', categories);

    return {
      predictions,
      category: categories
    };
  } catch (error) {
  console.error('Error classifying this image try Please Try again!:', error);
  }
}

// Function to classify text using the Hugging Face API
async function classifyText(text) {
  try {
    const response = await axios.post(
      'https://api-inference.huggingface.co/models/distilbert-base-uncased-finetuned-sst-2-english',
      { inputs: text },
      { headers: { Authorization: `Bearer ${apiKey}` } }
    );

    return response.data[0].label; // Assuming the API returns an array with the first element being the most relevant classification
  } catch (error) {
    console.error('Error classifying this Text image try Please Try again!:', error);
  }
}

// Example usage: classify an image
//classifyImage('public/images/gallery/picture.jpg').then(result => {
  //console.log('Final Result:', result);
///});

module.exports = { classifyImage, classifyText };
