'use strict';

const express = require('express');
const uuidv1 = require('uuid/v1');

// Constants
const PORT = 8080;
const ID = uuidv1();

// App
const app = express();

app.get('/info', (req, res) => {
  res.json({id : ID});
});

app.get('/health', (req, res) => {
  res.json({status: "OK"});
});

app.listen(PORT, () => console.log('Aapp listening on port ' + PORT))