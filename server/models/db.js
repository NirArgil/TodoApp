const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://Nir:1234567n@cluster0.umvm5.mongodb.net/Project1?authSource=admin&replicaSet=atlas-pwnszh-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true", {
  // connecting to the mongodb database locally
  
  keepAlive: true, // keeping the connection alive
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
mongoose.set("debug", true) 
mongoose.Promise = Promise 

mongoose.set('useCreateIndex', true);


module.exports.Todo = require("./todo")
