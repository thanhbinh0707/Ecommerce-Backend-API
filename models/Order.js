const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    customer: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, 
    items: [{ 
        item: { type: mongoose.Schema.Types.ObjectId, ref: 'MenuItem' },
        quantity: Number
    }],
    status: { type: String, enum: ['placed', 'prepared', 'served', 'paid'], default: 'placed' },
    totalAmount: Number,
    placedAt: { type: Date, default: Date.now },
    paidAt: Date
});

module.exports = mongoose.model('Order', orderSchema);
