const User=require('../model/User');
const getUser = async (req,res) =>{
   const username = req.params.username;
   const user = await User.findOne({username : username})
   res.json(user)
}

module.exports = { getUser };