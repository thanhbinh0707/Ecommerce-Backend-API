const mongoose = require('mongoose');

const statisticsSchema = new mongoose.Schema({
    date: Date,
    dailySales: Number,
    numberOfOrders: Number,
    topSellingItems: [{ type: mongoose.Schema.Types.ObjectId, ref: 'MenuItem' }]
});

module.exports = mongoose.model('Statistics', statisticsSchema);
