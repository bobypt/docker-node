'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const IP = process.env.IP || "NOT SET";

// App
const app = express();

app.get('/info', (req, res) => {
  res.json({ip : IP});
});

app.get('/health', (req, res) => {
  res.json({status: "OK"});
});

app.listen(PORT, () => console.log('Aapp listening on port ' + PORT))