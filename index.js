
const express = require('express');
const app = express();
require('dotenv').config()
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');
const { getAll,createUser,userDelete,userUpdate } = require('./controllers/user');
// || or, && and

//127.0.0.1:27017 = localhost
 
app.use(express.json())

mongoose.connect(process.env.HOSTDB).then(() => {
    console.log('mongodb connect')
}).catch(err => {
    console.log(err)
})

//ruta 
app.get('/user', getAll);
app.post('/user', createUser);
app.put('/user/:id', userUpdate);
app.delete('/user/:id', userDelete);



app.listen(port, () => {
    console.log('servicio funcionando puerto:' + port);
})

