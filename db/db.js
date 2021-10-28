const mongo = require('mongoose')

const url = process.env.URLCONN || "mongodb://localhost:27017"

console.log(url);
mongo.connect(`${url}/etudiant`, (err)=>{
    console.log("url", url);
    if (err) {
        console.log("erreur de connexion a mongodb");
        return
    }
    console.log("Connexion reussie");
})