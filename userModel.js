const {Schema, model} = require('mongoose');

const user = new Schema({
    name: {type: String, required: true},
    age: {type: Number, required: true},
    phoneNumber: {type: String, required: false},
    DOB: {type: Date, required: true},
    password: {type:String,required:true}
},{
    toObject:{
        virtuals:true
    }
});
user.statics.getUserByName = async function(name){
 let user = await this.findOne({name});

 if(user){
     return user.toObject();
 } else {
     return false;
 }

}
user.statics.checkUserExists = async function(name){
    let exists = await this.exists({name});
    return exists;
}
module.exports = model('users', user);