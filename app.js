const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');
const cors = require('cors');

// Initialize Express app
const app = express();

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Could not connect to MongoDB', err));

// Express body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Express session
app.use(
  session({
    secret: '0512',
    resave: true,
    saveUninitialized: true
  })
);

// Enable CORS
app.use(cors());

// Passport Config
require('./config/passport-config')(passport);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Routes
const userRoutes = require('./routes/user');
const qrCodeRoutes = require('./routes/qrCode');
const orderRoutes = require('./routes/order');
const menuItemRoutes = require('./routes/menuItem');

app.use('/api/users', userRoutes);
app.use('/api/qrcodes', qrCodeRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/menuitems', menuItemRoutes);

// Server setup
const PORT = 5201;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
