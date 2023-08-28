const connections =require('../model/UserConnect');


const getAllFollowers = async (req, res) => {
    const followers= await connections.find({"userID": req.body.userID});
    if(!followers) return res.status(204).json({'message':'No followers found.'})
    res.json(followers);
}

const addFollower = async(req, res) => {
     if(!req?.body?.userID || !req?.body?.followerID){
        return res.status(400).json({'message':'userID and followerID is required'})
     }
    try {
    const result=await connections.create({
     userID:req.body.userID,
     followerID: req.body.followerID,
     followerUserName: req.body.followerUserName,
     
    });
    res.status(201).json(result);
    }
    catch(err){
       console.log(err);
    }
   

    
}


                                                                            
module.exports = {
    getAllFollowers,
    addFollower
    
}
