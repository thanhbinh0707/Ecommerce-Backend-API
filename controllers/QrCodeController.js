// QRCodeController.js
const QRCode = require('../models/QRCode');
const generateCode = require('../utils/generateCode'); // You need to implement this utility function

// Generate a new QR code
exports.generateQRCode = async (req, res) => {
    try {
        // Generate unique code using utility function
        const code = generateCode();
        // Create a new QRCode instance with the generated code
        const qrCode = new QRCode({ code, validUntil: Date.now() + 1000 * 60 * 60 * 24 });
        // Save QR code to database
        await qrCode.save();
        // Send QR code
        res.status(201).send(qrCode);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Validate a QR code
exports.validateQRCode = async (req, res) => {
    try {
        // Find QR code by code provided
        const qrCode = await QRCode.findOne({ code: req.body.code });
        // Check if QR code is valid
        const isValid = qrCode && qrCode.validUntil > Date.now();
        if (!isValid) {
            throw new Error('QR Code is not valid');
        }
        // Send success response
        res.send({ message: 'QR Code is valid' });
    } catch (error) {
        res.status(400).send(error);
    }
};

// Add additional methods as needed
