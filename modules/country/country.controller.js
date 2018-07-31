const {importDataWebService} = require('./country.service');
const  {sendSuccess,throwError }  = require('../../common/response.handler') ;


async function importData(req,res) {
   try{
    let data= await importDataWebService();
    return sendSuccess(res,data)
   }
   catch(err){
       console.log(err);
      return  throwError(res,err);
   } 

};

module.exports  = {importData};

