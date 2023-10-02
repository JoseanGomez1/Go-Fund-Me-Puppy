///////////////////////////////
// DEPENDENCIES
////////////////////////////////

const cors = require('cors');
const morgan = require('morgan');
const express = require('express');
const dotenv = require('dotenv');

// Initialize .env variables
dotenv.config();

// Start the mongoose db connection (you should update the import path accordingly)
require('./config/database.js'); // Update the import path

// Pull PORT from .env, give a default value of 4000
const { PORT } = process.env;

// Import puppies router (update the import path)
const puppiesRouter = require('./routes/puppies'); // Update the import path

// Create the Express application
const app = express();

// MIDDLEWARE
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // Parse JSON bodies
app.use(cors()); // Enable CORS for all origins
app.use(morgan('dev')); // Logging for development

// ROUTES (update the route prefix)
app.use('/puppies', puppiesRouter); // Update the route prefix

// Test route
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// LISTENER
app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
