const express = require('express');
const tasksRouter = require('./routes');
const app = express();

// Importer module et require
const module = require('module');
const require = require('require');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/tasks', tasksRouter);

module.exports = app;
