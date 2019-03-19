var mongoose = require('mongoose')
var Schema = mongoose.Schema;



const GameSchema = Schema(
    {
        _id: { type: Schema.ObjectId, auto: true },
        nombre: String,
        precio: Number
    }
)

// exportamos el modelo
module.exports = mongoose.model('Game', GameSchema)