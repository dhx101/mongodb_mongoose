const mongoose = require('mongoose');

// const Schema = mongoose.Schema()

// const alumnosScheme = new Schema(
//     {
//         nombre: {type:String, require:true},
//         surname: {type:String, require:true},
//         age: {type:Number,require:true},
//         email:{type:String, require:true},
//         asignaturas: {type:Array, require:true}
//     },
//     {
//         timestamps:true
//     }
// )

const alumnosScheme = new mongoose.Schema(
    {
        nombre: {type:String, require:true},
        surname: {type:String, require:true},
        age: {type:Number,require:true},
        email:{type:String, require:true},
        asignaturas: {type:Array, require:true}
    },
    {
        timestamps:true
    }
)

const Alumnos = mongoose.model('alumnos', alumnosScheme)

module.exports = Alumnos