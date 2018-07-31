
async function returnSelf(req,res){
    console.log(req.user);
  }
  
  async function createUser (req,res){
  
      try{
      let {name,email,password} = req.body;
      password = bcrypt.hashSync(password,10);
      let user = await User.create({name,email,password});
      console.log('user is ',user);
     // throw new Error('something wrong occured');
      const token = jwt.sign({email:user.email},'supersecret',{
          expiresIn:86400
      })
      res.send({user,token});
      }
        catch (err){
          console.log(err);
         res.status(500).send("There was a problem finding the users.")
      }
  }
  
  
  
  
  // RETURNS ALL THE USERS IN THE DATABASE
  router.get('/', function (req, res) {
      User.find({}, function (err, users) {
          if (err) return res.status(500).send("There was a problem finding the users.");
          res.status(200).send(users);
      });
  });
  
  // GETS A SINGLE USER FROM THE DATABASE
  router.get('/:id', function (req, res) {
      User.findById(req.params.id, function (err, user) {
          if (err) return res.status(500).send("There was a problem finding the user.");
          if (!user) return res.status(404).send("No user found.");
          res.status(200).send(user);
      });
  });
  
  
  // DELETES A USER FROM THE DATABASE
  router.delete('/:id', function (req, res) {
      User.findByIdAndRemove(req.params.id, function (err, user) {
          if (err) return res.status(500).send("There was a problem deleting the user.");
          res.status(200).send("User: "+ user.name +" was deleted.");
      });
  });
  
  // UPDATES A SINGLE USER IN THE DATABASE
  router.put('/:id', function (req, res) {
      User.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, user) {
          if (err) return res.status(500).send("There was a problem updating the user.");
          res.status(200).send(user);
      });
  });