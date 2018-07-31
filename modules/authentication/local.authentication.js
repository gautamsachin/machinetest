const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const {verifyCredentials} = require('../user/user.service');

module.exports = new localStrategy(function(username,password,done){
if(!username || !password) return done(true);
console.log('inside the local strategy method');
return done(null,{email:'sachingautam36@gmail.com'});
})