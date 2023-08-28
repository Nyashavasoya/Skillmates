const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const userSchema=new Schema({


username:{

      type:String,
      requires:true

},
roles:{
  User:{
    type:Number,
    default:2001
  },
  Editor:Number,
  Admin: Number


},
  
password:{
    type:String,
    required:true
},
profilePicture: {
  type: String,  
  default: false
},
BatchYear: {
  type: String,  
  required: true
},
skills: [String], 

interest: String, 

refreshToken:String

  github_username: { type: String, required: true},
  refreshToken:String


});

module.exports= mongoose.model('User',userSchema);