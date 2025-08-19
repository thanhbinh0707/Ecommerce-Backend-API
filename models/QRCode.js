const mongoose = require('mongoose');

const qrCodeSchema = new mongoose.Schema({
    code: { type: String, required: true, unique: true },
    dateGenerated: { type: Date, default: Date.now },
    validUntil: Date // Set this based on how long you want the code to be valid
});

module.exports = mongoose.model('QRCode', qrCodeSchema);
