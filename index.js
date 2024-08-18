//BACKEND SERVER USING EXPRESS.JS
//import the express module
const express = require("express");

//create an express application
const app = express();

//Define route handler
//Avoiding this would result in "Cannot GET /" error
app.get("/", (request, response) => {
  response.send("Hello using experss JS");
});

//start the server and listen on port
app.listen(3001, () => {
  console.log("Express server listening on port 3001");
});
