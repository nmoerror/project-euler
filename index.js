const express = require('express');
const connectDB = require('./config/db');
const path = require('path');
const dotenv = require('dotenv');

// env
dotenv.config({ path: './config/config.env' });

// Connect Database
connectDB();

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

// serve simple user interfaces
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
