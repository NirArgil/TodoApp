const mongoose = require("mongoose")

let dbUrl = 'mongodb://localhost:27017/todo-app';

if(process.env.db_url) {
  dbUrl = process.env.db_url;
}


async function connect() {
  await mongoose.connect(dbUrl, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
  });
}

mongoose.set("debug", true) 
mongoose.Promise = Promise 

mongoose.set('useCreateIndex', true);


module.exports.Todo = require("./todo")
module.exports = {
  connect,
};
