const { Router } = require('express');
const tasks = [];

// Importer module
const module = require('module');

function add(task) {
  tasks.push(task);
}

function list() {
  return tasks;
}

module.exports = {
  add,
  list
};
