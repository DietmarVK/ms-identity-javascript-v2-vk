const express = require('express');
const morgan = require('morgan');
const path = require('path');
const cors= require('cors');

const DEFAULT_PORT = process.env.PORT || 80;

// initialize express.
const app = express();

// Initialize variables.
let port = DEFAULT_PORT;

// Configure morgan module to log all requests.

// Setup app folders.
app.use(express.static('app'));
app.use(cors({ origin: ['http://localhost:3000','http://localhost:80'], credentials: true }));

// Set up a route for index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
});

// Start the server.
app.listen(port);
console.log(`Listening on port ${port}...`);
