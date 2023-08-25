
const NegocioModel = require('../models/Negocio')


const get = async (req, res) => {
    const premioss = await NegocioModel.find();
    console.log(premioss)
    res
    .status(200)
    .json({premioss:premioss})
   
}

const Premiosdb = async (req, res) => {
    const {premios,nombre,genero,telefonos} = req.body

     const negocio = new NegocioModel(
   {premios:premios,
    nombre:nombre, 
    genero:genero,
    telefonos:telefonos})
     
  await negocio.save()
  console.log(negocio)
 res
 .status(201)
 .json({menssage: 'success', negocio:negocio,
    
})

 .send()
 }

 module.exports = {get, Premiosdb}