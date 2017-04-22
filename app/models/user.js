const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  commoname: String,
  age: Number,
  date: {
    type: Date,
    default: Date.now
  },
});

/* Methods user */

userSchema.methods = {

};

/* Static methods user */

userSchema.static({

});

var User = mongoose.model('UserSchema', userSchema);

module.exports = User;
