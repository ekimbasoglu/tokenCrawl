const express = require('express');
const basicAuth = require('express-basic-auth');
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');
const app = express();
const https = require('https');
const fs = require('fs');

// Configure basic authentication credentials
const authConfig = {
    unauthorizedResponse: 'Unauthorized',
    db: process.env.DB_HOST
};

// Connect to MongoDB
mongoose.connect("mongodb+srv://" + authConfig.db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
// CONNECTION EVENTS
// When successfully connected
mongoose.connection.on('connected', function () {
    console.log('Mongoose default connection open');
});

// If the connection throws an error
mongoose.connection.on('error', function (err) {
    console.log('Mongoose default connection error: ' + err);
});

// When the connection is disconnected
mongoose.connection.on('disconnected', function () {
    console.log('Mongoose default connection disconnected');
});

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).send("Success");
});

// Imports 
const users = require('./routes/User');
const products = require('./routes/Product');
const cart = require('./routes/Cart');

//Routers
app.use('/user', users);
app.use('/product', products);
app.use('/cart', cart);



// Start the server
app.listen(process.env.PORT || 80, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});
