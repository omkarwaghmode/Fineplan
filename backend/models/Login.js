const mongoose = require('mongoose');
const {Schema} = mongoose;
 
const LoginSchema = new Schema({
name:{
    type:String,
    require:true
},
description:{
    type:String,
    require:true
},
date:{
    type:Date,
    default:Date.now
}
  }
);

module.exports = mongoose.model('login',LoginSchema);