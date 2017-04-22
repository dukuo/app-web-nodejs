const mongoose = require('mongoose');
const config = require('./');

module.exports = () => {

  // connect to mongodb
  mongoose.connect(config.db);
  var db = mongoose.connection;

  db.on('error', console.error.bind(console, 'connection error:'));

  db.once('open', function() {
    console.log('Connected to database ' + (process.env.NODE_ENV ? process.env.NODE_ENV : 'development'));
  });

  db.on('disconnected', function() {
    console.log('Mongoose default connection disconnected');
  });

};
