/* eslint-disable no-console */
const express = require('express');
const mongoose = require('mongoose');

const newLocal = 'body-parser';
const bodyParser = require(newLocal);
require('dotenv').config();
const cors = require('cors');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

const userRoute = require('./routes/user');
const voteRoute = require('./routes/Vote');

app.use('/user', userRoute);
app.use('/vote', voteRoute);

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB connected..');
  });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports = app;
