const mongoose = require("mongoose")

let dbUrl = 'mongodb://localhost:27017/todo-app/';

if(process.env.db_url) {
  dbUrl = process.env.db_url;
}


mongoose.connect(dbUrl, {
  // connecting to the mongodb database locally
  
  keepAlive: true, // keeping the connection alive
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
mongoose.set("debug", true) 
mongoose.Promise = Promise 

mongoose.set('useCreateIndex', true);


module.exports.Todo = require("./todo")
