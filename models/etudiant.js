const mongoose = require('mongoose')

const etudiantSchema = mongoose.Schema({
    first_name : {type : String},
    last_name : {type : String},
    id_etudiant : {type : String},
})

module.exports = mongoose.model('Etudiant', etudiantSchema)