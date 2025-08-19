const express = require('express');
const router = express.Router();
const timekeepingController = require('../controllers/TimekeepingController');

// Record a timekeeping entry
router.post('/record', timekeepingController.recordTimekeeping);

// Add additional timekeeping routes as needed

module.exports = router;
