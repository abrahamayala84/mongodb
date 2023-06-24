
const userModel = require('../models/user');

const getAll = async (req, res) => {
    const users = await userModel.find();
    console.log(users)
    res
    .status(200)
    .json({users:users})
    .send()
}


const createUser = async (req, res) => {

    const {name, email, password,age} = req.body;
 
    const user = new userModel({
    name: name,
    email: email,
    password: password,
    age: age
    })
 await user.save();
 res
 .status(201)
 .json({menssage: 'success'})
 .send()
 }
 
 
 
 const userUpdate = async (req, res) => {
 const {id} = req.params;
 const {name, email, password,age} = req.body;
 await userModel.findByIdAndUpdate(id,{
     name: name,
     email: email,
     password: password,
     age: age   
 });
res
.status(200)
.json({menssage: ' change success'})

 }
 
 const userDelete = async (req, res) => {
     const {id} = req.params;
    
     await userModel.findByIdAndDelete(id)
     res
     .status(200)
     .json({menssage: 'delete success'})
     .send()
 }

module.exports = {getAll,createUser,userDelete,userUpdate
};
