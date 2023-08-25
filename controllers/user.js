
const userModel = require('../models/user');

const bcrypt = require('bcrypt');
const { generatejwt } = require('../utils/jwt.js');

const getAll = async (req, res) => {
    const users = await userModel.find();
    console.log(users)
    res
    .status(200)
    .json({users:users})
    
}


const createUser = async (req, res) => {
    const {name, email, password,age} = req.body;

    const hash = bcrypt.hashSync(password, 10);
 
    const user = new userModel({
    name: name,
    email: email,
    password: hash,
    age: age
    })
 await user.save();
 res
 .status(201)
 .json({menssage: 'success',
user:user
})
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

 //login / post login

 const login = async (req, res) => {
    const { email, password} = req.body; 
    console.log(email, password)
    const user = await userModel.findOne({email: email});

    if(!user){
       return res
        .status(404)
        .json({menssage: 'usuario no encontrado'})
        .send()

    }

    const isMatch = bcrypt.compareSync(password, user.password);
 
    if(isMatch){
        
       const token = generatejwt(user._id) ;

       return res.status(200)

       .json({
        user:user,
           token:token,
           menssage: "ususrario logeado correctamente",
           isAuth: true
         })
       .send()   
    }else{
        return res
        .status(401)
       .json({
        menssage: "usuario incorrecto",
         isAuth: false  
         })
       .send() 
    }
    
 }


module.exports = {getAll,createUser,userDelete,userUpdate,login
};
