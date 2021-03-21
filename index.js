const express = require('express');
const path = require('path');

// routes
const attempt = require('./routes/attempt');
const problem = require('./routes/problem');

const app = express();

// body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// mount routers
app.use('/api/attempt', attempt);
app.use('/api/problem', problem);

// static files
app.use(express.static(path.join(__dirname, 'public')));

// serve simple user interface
app.use('/problem-one', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'views', 'problem-one.html'));
});

app.use('/problem-three', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'views', 'problem-three.html'));
});

app.use('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'views', 'home.html'));
});

const PORT = process.env.PORT || 3131;

app.listen(PORT, console.log(`Running on port ${PORT}`));