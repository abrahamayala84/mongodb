
const {Schema, model, Types} = require('mongoose')

const NegocioSchema = new Schema({
    
    premios: [''],
    nombre:{require:true, type: 'string'},
     genero:{require:true, type: 'string'},
     telefonos:{require:true, type: 'string'},
     id: Types.ObjectId
})

const NegocioModel = model('negocio', NegocioSchema)

module.exports = NegocioModel;