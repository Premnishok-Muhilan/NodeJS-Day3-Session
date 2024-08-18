//BACKEND SERVER USING EXPRESS.JS
//import the express module
const express = require("express");

//create an express application
const app = express();

//import mongoose
const mongoose = require("mongoose");

//open connection with mongoDB
mongoose
  .connect("mongodb://localhost:27017/fsd56wee")
  .then(() => {
    console.log(
      "Successfully connected to MongoDB locally with fsd56wee database!"
    );
  })
  .catch((error) => {
    console.log("Couldn't connect to MongoDB locally.Error: ", error);
  });

//Define route handler
//Avoiding this would result in "Cannot GET /" error
app.get("/", (request, response) => {
  response.send("Hello using experss JS");
});

//start the server and listen on port
app.listen(3001, () => {
  console.log("Express server listening on port 3001");
});
