const {Schema, model, Types} = require('mongoose')

const userSchema = new Schema({
    id: Types.ObjectId,
    name: {type: String, required: true,maxlength: 100,minlength:3 },
    email:{type: String,require:true, unique: true, maxlength: 100, minlength:5},
    password:{type: String,require:true, minlength:10}   
})

const userModel = model('userRuleta', userSchema)

module.exports = userModel;

