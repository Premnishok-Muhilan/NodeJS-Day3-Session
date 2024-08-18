const mongoose = require("mongoose");

//define a schema
const todoSchema = new mongoose.Schema({
  description: String,
  status: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

//create a model and export it
module.exports = mongoose.model('Todo',todoSchema,'todos') 
