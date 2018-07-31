const {createUser} = require('./user.service');


async function create(req,res) {
    try{
    let {email,password,name} = req.body;
    let data = await createUser(email,password,name);
    res.status(200).send(data);
    }
    catch(err){
res.status(500).send(err);
    }
    
}

module.exports = {create};


