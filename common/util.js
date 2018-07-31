async function resolve(promise) {
    let response = {};
    try{
    let data = await promise;
    if(data) response["data"] = data;
    }
    catch(err){
        response["error"] = err;
    }
    return response;
}

module.exports = {resolve};