const userlogin = require("../Models/userlogin")

//Viewing a Data 
module.exports.userloginget = async (req, res) => {
    await userlogin.find({},{
        _id: 1,
        email: 1,
        password: 1
    })
    .then((login) =>{
        res.json(login);
    }).catch((err) => {
        res.status(500).json({ error: "Error getting User login"+err})
    });
}

module.exports.userlogingetbyid = async (req, res) => {
    const id = req.params.id;
    await userlogin.find({_id: id},{
        _id: 1,
        email: 1,
        password: 1
    })
    .then((user) => {
        res.json(user);
    })
    .catch((err) => {
        res.status(500).json({error: "Error getting userlogin by id"+ err});
    })
}

module.exports.userlogininsert = async (req, res) => {
    try{
        const { email, password } = req.body

        const newlogin = await userlogin.create({email, password});

        res.json(newlogin);
    }
    catch (err) {
        res.status(500).json({error: "Error saving userlogin" + err.message });
    }
};


//UPDATE4
module.exports.userloginupdate = async (req, res) => {
    try {
      const { id } = req.params;
      const { email, password } = req.body;
  
      // Build the update object based on the fields you want to update
      const updateObject = {};
      if (email) updateObject.email = email;
      if (password) updateObject.password = password;
     
    
  
      const updatedRecord = await userlogin.findByIdAndUpdate(id, updateObject, { new: true });
  
      if (!updatedRecord) {
        return res.status(404).json({ error: 'Record not found' });
      }
  
      // Step 4: Send Response
      res.json({ message: 'Record updated successfully', data: updatedRecord });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
//DELETE

  module.exports.userlogindelete = async (req, res) => {
    try {
      const { id } = req.params;
  
      const deletedRecord = await citymaster.findByIdAndDelete(id);
  
      if (!deletedRecord) {
        return res.status(404).json({ error: 'Record not found' });
      }
  
      res.json({ message: 'Record deleted successfully', data: deletedRecord });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
