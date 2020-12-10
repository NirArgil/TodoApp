const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/todo-app?readPreference=primary&appname=MongoDB%20Compass&ssl=false", {
  // connecting to the mongodb database locally
  
  keepAlive: true, // keeping the connection alive
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
mongoose.set("debug", true) 
mongoose.Promise = Promise 

mongoose.set('useCreateIndex', true);


module.exports.Todo = require("./todo")