const express = require('express');
const router = express.Router();
const qrCodeController = require('../controllers/QrCodeController');

// Generate a new QR code
router.post('/generate', qrCodeController.generateQRCode);

// Validate a QR code
router.post('/validate', qrCodeController.validateQRCode);

// Add additional QR code routes as needed

module.exports = router;
