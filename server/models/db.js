const mongoose = require("mongoose")

let dbUrl = 'mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false';

if(process.env.db_url) {
  dbUrl = process.env.db_url;
}

mongoose.connect(dbUrl, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
  });

mongoose.set("debug", true) 
mongoose.Promise = Promise 

mongoose.set('useCreateIndex', true);


module.exports.Todo = require("./todo")