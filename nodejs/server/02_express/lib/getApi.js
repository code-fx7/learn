'use strict';

const bodyParser = require('body-parser'); // Plugin (Middleware)
const cors = require('cors'); // Plugin (Middleware)
const express = require('express');
const { getTodos } = require('./routes/getTodos');
const { markTodoAsDone } = require('./routes/markTodoAsDone');
const { noteTodo } = require('./routes/noteTodo');

const getApi = function ({ store }) {
  const api = express();
  // Middleware registrieren (.use)
  api.use(cors());
  api.use(bodyParser.json());

  // Commands
  api.post('/note-todo', noteTodo({ store }));
  api.post('/mark-todo-as-done/:id', markTodoAsDone({ store }));

  // Queries
  api.get('/todos', getTodos({ store }));

  return api;
};

module.exports = { getApi };
// Export als Objekt um mehrere Module exportieren zu können.