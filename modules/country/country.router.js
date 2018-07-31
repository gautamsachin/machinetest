const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {verifyToken} = require('../authentication/auth');
//const {create} = require('../user/');



//router.post('/',createUser);
//router.get('/',verifyToken ,returnSelf);


module.exports = router;
        