//BACKEND SERVER USING EXPRESS.JS
const app = require("./app");

//import mongoose
const mongoose = require("mongoose");

//import dotenv
require("dotenv").config();

//open connection with mongoDB
mongoose
  .connect(process.env.MONGO_DB_URL)
  .then(() => {
    console.log("Successfully connected to MongoDB Atlas");
  })
  .catch((error) => {
    console.log("Couldn't connect to MongoDB Atlas.Error: ", error);
  });

//start the server and listen on port
app.listen(3001, () => {
  console.log("Express server listening on port 3001");
});
