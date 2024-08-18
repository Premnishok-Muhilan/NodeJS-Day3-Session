//import the express module
const express = require("express");

//create an express application
const app = express();

//use the express middleware for parsing json data
app.use(express.json());

//Define route handler
//Avoiding this would result in "Cannot GET /" error
app.get("/", (request, response) => {
  response.send("Hello using experss JS");
});

module.exports = app;
