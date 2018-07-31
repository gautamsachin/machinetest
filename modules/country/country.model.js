  var mongoose = require('mongoose');  
  var UserSchema = new mongoose.Schema({  
    name: String,
    email: {type:String, unique:true},
    password: {type: String ,select:false}
  });
  let user = mongoose.model('User', UserSchema);

  module.exports = user;