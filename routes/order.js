const express = require('express');
const router = express.Router();
const orderController = require('../controllers/OrderController');

// Place a new order
router.post('/place', orderController.placeOrder);

// Update an order's status
router.patch('/update/:id', orderController.updateOrderStatus);

// Add additional order routes as needed

module.exports = router;
