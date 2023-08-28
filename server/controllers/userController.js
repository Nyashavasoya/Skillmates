const User=require('../model/User');
const getUser = async (req,res) =>{
   const username = req.params.username;
   const user = await User.findOne({username : username})
   res.json(user)
}
const getUserByID = async(req, res) => {
    
   if(!req?.params?.userID)return res.status(400).json({'message':' userID is required'})
    const user = await User.findOne({_id:req.params.userID})
   if (!user ) {
       return res.status(400).json({ "message": `no user matches ID ${req.params.userID} not found` });
   }
   res.json(user);
}

module.exports = { getUser, getUserByID};