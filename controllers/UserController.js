const User = require('../models/User');
const bcrypt = require('bcryptjs');
const passport = require('passport');
const crypto = require('crypto'); // Node.js module for generating the token
const Mailer = require('../utils/Mailer');

exports.forgotPassword = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Generate a token
        const token = crypto.randomBytes(20).toString('hex');

        // Set token and expiry on user model
        user.resetPasswordToken = token;
        user.resetPasswordExpires = Date.now() + 3600000; // 1 hour
        await user.save();

        // Send email with token
        await Mailer.sendMail({
            email: user.email,
            subject: 'Password Reset',
            content: `Please click on this link to reset your password: http://localhost:3200/reset/${token}`
        });

        res.status(200).json({ message: "Password reset email sent" });

    } catch (err) {
        console.error("Error in forgotPassword:", err);
        res.status(500).json({ message: "Error resetting password" });
    }

};

exports.createUser = async (req, res) => {
    try {
        // Check if user already exists
        const existingUser = await User.findOne({ email: req.body.email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        console.log('Register request password:', req.body.password);

        // Create a new user
        const user = new User({
            userName: req.body.userName,
            password: hashedPassword,
            phoneNumber: req.body.phoneNumber,
            email: req.body.email,
            gender: req.body.gender,
            profilePic: "default",
            dayOfBirth: req.body.dayOfBirth,
            googleAuth: "null",
            facebookAuth: "null",
            role : req.body.role
        });
        
        console.log('New user:', user);
        const newUser = await user.save();
        try {
            await Mailer.sendMail({
                email: newUser.email,
                subject: 'Chào mừng bạn đến với PROJECT',
                content: `<html><body><a href="http://localhost:3200/verify/${newUser._id}">Verify Account</a>
                <br><h1>Welcome to PEUS</h1><p>Hi ${newUser.userName},</p>
                <p>Thank you for registering with PEUS.</p></body></html>`
            });
            console.log("Verification email sent");
        } catch (err) {
            console.error("Error in sendMail:", err);
            // Decide how to handle the error. E.g., log it, or return a response.
        }
        res.status(201).json(newUser);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.verify = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        console.log("Verifying: ", user);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        if(user.isVerified) {
            throw new Error("User is already verified");
        };
        user.isVerified = true;
        await user.save();
        res.status(200).json({ success: true }); // Send a response back
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Error occurred while verifying user" });
    }
};
// User login
// exports.loginUser = async (req, res,next) => {
  
//     console.log('Login request body:', req.body);

//     passport.authenticate('local', (err, user, info) => {
//         if (err) {
//             console.error("Authentication error:", err);
//             return res.status(500).json({ message: err.message });
//         }
//         if (!user) {
//             console.warn("Authentication warning:", info);
//             return res.status(400).json(info);
//         }
//         req.logIn(user, (loginErr) => {
//             if (loginErr) {
//                 console.error("Login error:", loginErr);
//                 return res.status(500).json({ message: loginErr.message });
//             }
//             return res.json(req.user);
//         });
//     })(req, res, next);
// };
exports.loginUser = async (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        console.log('Login request body:', req.body);
        if (err) return res.status(500).json({ message: err.message });
        if (!user) return res.status(400).json(info);

        req.logIn(user, (loginErr) => {
            if (loginErr) {
                console.error("Login error:", loginErr);
                return res.status(500).json({ message: loginErr.message });
            }
        
            // Xóa password trước khi gửi response
            const { password, ...userWithoutPassword } = user.toObject();
            return res.json(userWithoutPassword);
        });
    })(req, res, next);
};

//get all
exports.getAllUsers = async (req, res) => {
    try {
        // Find all users
        const users = await User.find({});
        // Send users
        res.send(users);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Update user profile
exports.updateUser = async (req, res) => {
    try {
        // Find user and update with request body
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!user) {
            return res.status(404).send();
        }
        // Send updated user
        res.send(user);
    } catch (error) {
        res.status(400).send(error);
    }
};

//delete All
exports.deleteAllUsers = async (req, res) => {
    try {
        // Delete all users
        const users = await User.deleteMany({});
        // Send deleted users
        res.send(users);
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.resetPassword= async (req, res) => {
    console.log("Reset password request received. Token:", req.params.token); // Log the received token
    console.log("New password request body:", req.body); // Log the request body

    try {
        const user = await User.findOne({
            resetPasswordToken: req.params.token,
            resetPasswordExpires: { $gt: Date.now() }
        });

        if (!user) {
            return res.status(400).json({ message: "Password reset token is invalid or has expired" });
        }

        // Set the new password
        user.password = await bcrypt.hash(req.body.password, 10);
        user.resetPasswordToken = undefined;
        user.resetPasswordExpires = undefined;
        await user.save();

        res.status(200).json({ message: "Password has been successfully reset" });

    } catch (err) {
        console.error("Error in resetPassword:", err);
        res.status(500).json({ message: "Error resetting password" });
    }
};