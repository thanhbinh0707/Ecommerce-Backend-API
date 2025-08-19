// MenuItemController.js
const MenuItem = require('../models/MenuItem');

// Add a new menu item

exports.addMenuItem = async (req, res) => {
    try {
        const menuItem = new MenuItem(req.body);
        await menuItem.save();
        res.status(201).send(menuItem);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Update a menu item
exports.updateMenuItem = async (req, res) => {
    
    try {
        console.log("Update menu item request body:", req.body);
        const menuItem = await MenuItem.findById(req.params.id);
        if (!menuItem) {
            return res.status(404).send();
        }
        if (req.body.name) {
            menuItem.name = req.body.name;
        }
        if (req.body.description) {
            menuItem.description = req.body.description;
        }
        if (req.body.price) {
            menuItem.price = req.body.price;
        }
        if (req.body.category) {
            menuItem.category = req.body.category;
        }
        if (req.body.itemPic) {
            menuItem.itemPic = req.body.itemPic;
        }
        const updatedMenuItem = await menuItem.save();
        res.json(updatedMenuItem);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Delete a menu item
exports.deleteMenuItem = async (req, res) => {
    try {
        const menuItem = await MenuItem.findByIdAndDelete(req.params.id);
        if (!menuItem) {
            return res.status(404).send();
        }
        res.send(menuItem);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Get a list of all menu items
exports.getMenuItems = async (req, res) => {
    try {
        const menuItems = await MenuItem.find({});
        res.send(menuItems);
    } catch (error) {
        res.status(400).send(error);
    }
};
// search menu items for name
exports.searchMenuItems = async (req, res) => {
    try {
        const regex = new RegExp(req.params.name, 'i'); // 'i' makes it case insensitive
        const menuItems = await MenuItem.find({ name: { $regex: regex }});
        res.send(menuItems);
    } catch (error) {
        res.status(400).send(error);
    }
};

// get list items for category
exports.getMenuItemsByCategory = async (req, res) => {
    try {
        if(req.params.category === 'All'){
            const menuItems = await MenuItem.find({});
            return res.send(menuItems);
        }else{
            const menuItems = await MenuItem.find({category: req.params.category});
            res.send(menuItems);
        }
       
    } catch (error) {
        res.status(400).send(error);
    }
};
// Get a menu item by id
exports.getMenuItem = async (req, res) => {
    try {
        const menuItem = await MenuItem.findById(req.params.id);
        if (!menuItem) {
            return res.status(404).send();
        }
        res.send(menuItem);
    } catch (error) {
        res.status(400).send(error);
    }
};
exports.getCategories = async (req, res) => {
    try {
        const categories = await MenuItem.distinct('category');
        res.json(categories);
    } catch (error) {
        res.status(400).send(error);
    }
};
// Add additional methods as needed (e.g., getMenuItem, etc.)
