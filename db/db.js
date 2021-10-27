const mongo = require('mongoose')

mongo.connect('mongodb://localhost:27017/etudiant', (err)=>{
    if (err) {
        console.log("erreur de connexion a mongodb");
        return
    }
    console.log("Connexion reussie");
})