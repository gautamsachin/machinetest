const countryDao = require('./country.dao');
const client = require('axios');
const { resolve } = require('../../common/util');
const exceptionGenerator = require('../../common/exception/exception.generator')

async function createUser(req, res) {
    try {
        let { name, email, password } = req.body;
        password = bcrypt.hashSync(password, 10);
        let user = await User.create({ name, email, password });
        console.log('user is ', user);
        const token = jwt.sign({ email: user.email }, 'supersecret', {
            expiresIn: 86400
        })
        res.send({ user, token });
    }
    catch (err) {
        console.log(err);
        res.status(500).send("There was a problem finding the users.")
    }
}


async function importDataWebService() {
    let { data } = await client.get("https://restcountries.eu/rest/v1/all");
    console.log('before save');
    let { data: response, error } = await resolve(Promise.all(data.map(async (da) => {
        return await countryDao.create(da);
    })))
    console.log(response, error);
    if (error) throw exceptionGenerator.createCustomException(error);
    return { msg: 'data imported successfully' };
}

module.exports = { importDataWebService };