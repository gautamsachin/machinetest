const { hashSync, compareSync } = require('bcryptjs');
const userDao = require('./user.dao');
const { system } = require('config');
const {resolve} = require('../../common/util');
const  exceptionGenerator = require('../../common/exception/exception.generator');

async function createUser(email, password, name) {
    password = hashSync(password, 10);
    let user = await userDao.create({ name, email, password });
    const token = jwt.sign({ email: user.email }, system.JWT_SECRET, system.EXPIRES_IN)
    return { user, token };
}


async function verifyCredentials(email, password) {
    let {data:user,error} = await resolve(userDao.findOne({ email }));
    if(!data) throw exceptionGenerator.userDoesNotExistError(email);
    if(!compareSync(user.password,password)) throw exceptionGenerator.invalidCredentials(email);
    return user;
}

module.exports = { createUser, verifyCredentials };