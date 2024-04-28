const {Schema,model}= require('mongoose');
let session = new Schema({});
module.exports = model('session',session);