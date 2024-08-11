const Collection = require('../models/Collection');

// Submit Collection Details
exports.submitCollectionDetails = async (req, res) => {
    try {
        const { collectionArea, collectionDate, wasteType } = req.body;

        const newCollection = new Collection({
            collectionArea,
            collectionDate,
            wasteType
        });

        await newCollection.save();
        res.status(201).json({ message: 'Collection details submitted successfully!' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to submit collection details' });
    }
};
