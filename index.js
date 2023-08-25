
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
require('dotenv').config()
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');
const { getAll,createUser,userDelete,userUpdate,login } = require('./controllers/user');
const {get, Premiosdb} = require('./controllers/Negocio.controllers')
const cors = require('cors');

// || or, && and
//127.0.0.1:27017 = localhost
app.use(express.json())
app.use(cors({origin:'*'}));
app.use(bodyParser.urlencoded({extended:true}));

mongoose.connect('mongodb+srv://pinupstudiosmty:w9E8apxNn5s0ZDE9@cluster0.ehgkejv.mongodb.net/cluster0?retryWrites=true&w=majority').then(() => {
    console.log('mongodb connect')
}).catch(err => {
    console.log(err)
})

//ruta 
app.get('/userRuleta', getAll);
app.get('/negocio', get)
app.post('/userRuleta', createUser);
app.post('/userRuleta/login', login);
app.post('/negocio/Premiosdb', Premiosdb);
app.put('/userRuleta/:id', userUpdate);
app.delete('/user/:id', userDelete);



app.listen(port, () => {
    console.log('servicio funcionando puerto:' + port);
})

