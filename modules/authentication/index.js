const passport = require('passport');
passport.use(require('./local.authentication'));

 function  authorizeUser(req,res,next) {
     passport.authenticate('local',(err,user)=>{
        if(err || !user){
            return app.throwError(res, err);
        }  
        console.log('user from authorize user is',user);
        req.user= user;
        return next()
    })(req,res,next);
}

// function authorizeUser (req,res,next){
//     console.log('inside the middleware function')
//     next();
// }
module.exports = {passport,authorizeUser};