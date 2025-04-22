const express = require('express');
const app = express();
const port = 3000;

// Simple route
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Start the server
const server = app.listen(port, () => {
  if (process.env.NODE_ENV !== 'test') { // Don't log during tests
    console.log(`Server is running at http://localhost:${port}`);
  }
});

module.exports = { app, server }; // Export both app and server

