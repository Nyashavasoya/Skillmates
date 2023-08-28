const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const projectSchema=new Schema({

userID:{
    type:String,
    required:true

},

projectName:{

      type:String,
      requires:true

},


projectURL:{

  type:String,
  requires:false

},
technology:{

  type:[String],
  requires:true

},

description:{
    type:String,
    required:false
},


});

module.exports= mongoose.model('project',projectSchema);