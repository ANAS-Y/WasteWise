const mongoose = require('mongoose');

const collectionSchema = new mongoose.Schema({
    collectionArea: {
        type: String,
        required: true
    },
    collectionDate: {
        type: Date,
        required: true
    },
    wasteType: {
        type: String,
        required: true,
        enum: ['organic', 'plastic', 'metal', 'paper']
    }
});

module.exports = mongoose.model('Collection', collectionSchema);
