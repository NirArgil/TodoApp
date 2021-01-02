const mongoose = require("mongoose") // requiring the mongoose package

const todoSchema = new mongoose.Schema({
  
  task: {
    
    type: String, 
    unique: true, 
    required: true, 
  },
  completed: {
    
    type: Boolean, 
    default: false, 
  },
  edited: {     
    type: String,
    
  },

})

const todoModel = mongoose.model("Todo", todoSchema) // creating the model from the schema

module.exports = todoModel // exporting the model