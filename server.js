/*
      IMPORT SECTION
*/

// Define Express
const express = require('express');

// Define App
const app = express();

// Define Port
const port = 3000;

// Define Path Static Resource 
app.use(express.static('public'));

// Import JSON format for read body request
app.use(express.json());

/*
      END IMPORT SECTION
*/