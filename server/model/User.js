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
firstname:{

  type:String,
  requires:true

},
lastname:{

  type:String,
  requires:true

},



password:{
    type:String,
    required:true
},
BatchYear: {
  type: String,  
  required: true
},
skills: [String], 

interest: String, 

refreshToken:String




});

module.exports= mongoose.model('User',userSchema);