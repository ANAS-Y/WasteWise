const Route = require('../models/Route');

// Submit Route Optimization Details
exports.submitRouteDetails = async (req, res) => {
    try {
        const { startPoint, endPoint, stops } = req.body;

        // For simplicity, let's assume the optimized route is calculated here
        const optimizedRoute = [startPoint, ...stops.split(','), endPoint];

        const newRoute = new Route({
            startPoint,
            endPoint,
            stops: stops.split(','),
            optimizedRoute
        });

        await newRoute.save();
        res.status(201).json({ message: 'Route details submitted successfully!', optimizedRoute });
    } catch (error) {
        res.status(500).json({ error: 'Failed to submit route details' });
    }
};
