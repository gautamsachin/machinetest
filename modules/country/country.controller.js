const { importDataWebService , getCountry, saveCountryDetail,   updateCountryDetail} = require('./country.service');
const { sendSuccess, throwError } = require('../../common/response.handler');


async function importData(req, res) {
    try {
        let data = await importDataWebService();
        return sendSuccess(res, data)
    }
    catch (err) {
        console.log(err);
        return throwError(res, err);
    }

};

async function getCountryData(req,res) {
    try{
    let {limit, skip} = req.query;
    let {id} =req.params;
     let data= await getCountry({limit,skip,id});
     return sendSuccess(res,data)
    }
    catch(err){
        console.log(err);
       return  throwError(res,err);
    } 
 
 };

 async function saveCountry(req,res) {
    try{
    let countryObj = Object.assign(req.body);
     let data= await saveCountryDetail(countryObj);
     console.log('data from controller',data);
     return sendSuccess(res,data)
    }
    catch(err){
        console.log(err);
       return  throwError(res,err);
    } 
 
 };

 async function updateCountry(req,res) {
    try{
        if(!req.param.id) throwError(res)
     let data= await updateCountryDetail(req.param.id);
     console.log('data from controller',data);
     return sendSuccess(res,data)
    }
    catch(err){
        console.log(err);
       return  throwError(res,err);
    } 
 
 };

module.exports = { importData, getCountryData, saveCountry, updateCountry };

