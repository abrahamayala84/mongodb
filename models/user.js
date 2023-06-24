const {Schema, model, Types} = require('mongoose')

const userSchema = new Schema({
    id: Types.ObjectId,
    name: {type: String, required: true,maxlength: 100,minlength:3},
    email:{type: String,require:true, unique: true, maxlength: 100, minlength:5},
    password:{type: String,require:true, minlength:8},
    age:{type: Number, required: true,}
})

const userModel = model('user', userSchema)

module.exports = userModel;