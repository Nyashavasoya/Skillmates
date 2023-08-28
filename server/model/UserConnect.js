const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const connectSchema=new Schema({

userID:{
    type:String,
    required:true

},

followerID:{

      type:String,
      requires:true

},


followerUserName:{

  type:String,
  requires:false

},



});

module.exports= mongoose.model('UserConnect',connectSchema);