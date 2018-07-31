const exceptionClass = require('./base.exception.class');
module.exports = {
    userDoesNotExistError: (email)=>new exceptionClass('ER0001',`user with email ${email} does not exist`,400),
    invalidCredentials:()=>new exceptionClass('ER0002',`unauthorised access`,401),
    
};