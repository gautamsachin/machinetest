  const mongoose = require('mongoose');  
  const UserSchema = new mongoose.Schema({  
    name: String,
    email: {type:String, unique:true},
    password: {type: String }
  });
  let user = mongoose.model('User', UserSchema);

  module.exports = user;