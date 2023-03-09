const { Router } = require('express');
const express = require('express');
const tasks = require('./tasks');

// Importer require
const require = require('require');

const router = express.Router();

router.get('/', (req, res) => {
  res.send(tasks.list());
});

router.post('/', (req, res) => {
  const task = req.body;
  tasks.add(task);
  res.send(task);
});

module.exports = router;
