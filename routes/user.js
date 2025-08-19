const express = require('express');
const router = express.Router();
const userController = require('../controllers/UserController');

// Create a new user
router.post('/create', userController.createUser);

// User login 
router.post('/login', userController.loginUser);

// Update user profile
router.patch('/update/:id', userController.updateUser);

router.get('/all', userController.getAllUsers);
// Add additional user routes as needed
router.post('/verify/:id', userController.verify);
router.post('/forgot-password', userController.forgotPassword);
router.post('/reset/:token', userController.resetPassword);

//delete all
router.delete('/deleteAll', userController.deleteAllUsers);
module.exports = router;
