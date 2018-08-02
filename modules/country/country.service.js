const countryDao = require('./country.dao');
const client = require('axios');
const { resolve } = require('../../common/util');
const exceptionGenerator = require('../../common/exception/exception.generator')


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


async function getCountry({ limit, skip }) {
    limit = limit ? parseInt(limit) : 10;
    skip = skip ? parseInt(skip) : 0;
    console.log(limit, skip)
    let { data: count, error: dbError } = await resolve(countryDao.count());
    let { data, error } = await resolve(countryDao.find({}, limit, skip));
    data.count = count;
    if (error) throw exceptionGenerator.createCustomException(error);
    //console.log(data);
    return data;

}

async function saveCountryDetail(countryObj) {
    let { data, error } = await resolve(countryDao.create(countryObj));
    if (error) throw exceptionGenerator.createCustomException(error);
    //console.log(data);
    return data;

}



async function updateCountryDetail(countryObj) {
    let { data, error } = await resolve(countryDao.create(countryObj));
    if (error) throw exceptionGenerator.createCustomException(error);
    //console.log(data);
    return data;

}


module.exports = { importDataWebService, getCountry, saveCountryDetail, updateCountryDetail };