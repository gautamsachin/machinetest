    const {verify} = require('jsonwebtoken');
    const {system} = require('config');

    async function verifyToken(req,res, next) {
        try{
        let token = req.headers.authorization;
        let user = await verify(token,system.JWT_SECRET);
        req.user= user;
        next();
        }
        catch(err){
    res.status(401).send('access token is not valid');
        }
    }


    module.exports = ()=>verifyToken;