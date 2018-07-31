const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {verifyToken} = require('../authentication/auth');
const {importData } = (require('./country.controller'));

router.get('/import',importData);

module.exports = router;
        