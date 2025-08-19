const express = require('express');
const router = express.Router();
const statisticsController = require('../controllers/StatisticsController');

// Generate statistics
router.post('/generate', statisticsController.generateStatistics);

// Retrieve statistics
router.get('/get', statisticsController.getStatistics);

// Add additional statistics routes as needed

module.exports = router;
