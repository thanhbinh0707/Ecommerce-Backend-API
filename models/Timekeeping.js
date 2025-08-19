const mongoose = require('mongoose');

const timekeepingSchema = new mongoose.Schema({
    employee: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    qrCode: { type: mongoose.Schema.Types.ObjectId, ref: 'QRCode', required: true },
    timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Timekeeping', timekeepingSchema);
