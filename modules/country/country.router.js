const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {verifyToken} = require('../authentication/auth');
const {importData, getCountryData } = (require('./country.controller'));

router.get('/import',importData);
router.get('/list',getCountryData);

module.exports = router;
        