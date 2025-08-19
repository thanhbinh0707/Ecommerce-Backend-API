// OrderController.js
const Order = require('../models/Order');

// Place a new order
exports.placeOrder = async (req, res) => {
    try {
        const order = new Order({
            ...req.body,
            customer: req.user._id // assuming req.user is populated by authentication middleware
        });
        await order.save();
        res.status(201).send(order);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Update the status of an order
exports.updateOrderStatus = async (req, res) => {
    try {
        const order = await Order.findByIdAndUpdate(req.params.id, { status: req.body.status }, { new: true });
        if (!order) {
            return res.status(404).send();
        }
        res.send(order);
    } catch (error) {
        res.status(400).send(error);
    }
};


// Add additional methods as needed (e.g., deleteOrder, getOrder, etc.)
