// Assuming this file is saved as /routes/menuItem.js
const express = require('express');
const router = express.Router();
const menuItemController = require('../controllers/MenuItemController');

// Add a new menu item
router.post('/add', menuItemController.addMenuItem);

// Update a menu item
router.put('/update/:id', menuItemController.updateMenuItem);

// Delete a menu item
router.delete('/delete/:id', menuItemController.deleteMenuItem);

// Get all menu items
router.get('/all', menuItemController.getMenuItems);

// Add additional menu item routes as needed
router.get('/search/:name', menuItemController.searchMenuItems);

router.get('/search/:id', menuItemController.getMenuItem);

router.get('/categories', menuItemController.getCategories);

router.get('/category/:category', menuItemController.getMenuItemsByCategory);
module.exports = router;
