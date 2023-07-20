// Create web server application

// Import modules
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

// Import data
const comments = require('./comments');

// Create web server application
const app = express();

// Configure web server application
app.use(cors());
app.use(morgan('tiny'));
app.use(bodyParser.json());

// Create web server routes
app.get('/comments', (req, res) => {
  res.json(comments);
});

app.post('/comments', (req, res) => {
  const comment = req.body;
  comments.push(comment);
  res.json(comment);
});

// Start web server application
app.listen(8000, () => {
  console.log('Server is listening on port 8000');
});