const Etudiant = require("../models/etudiant")


exports.postEtudiant = (req, res)=>{
    const etudiant = new Etudiant({
        ...req.body,
    })
    
    etudiant.save()
    .then(()=>{
        res.status(201).json({message : 'Etudiant Inscrit'})
    })
    .catch(()=>{
        req.status(500).json({message : 'Une erreur est survenue'})
    })
    
}

exports.getEtudiant = (req, res)=>{
    Etudiant.find()
    .then((etudiants)=>{
        res.status(201).json({results : etudiants})
    })
    .catch(()=>{
        req.status(500).json({message : 'Une erreur est survenue'})
    })
}

exports.getEtudiantByID = (req, res)=>{
    console.log("test");
    console.log(req.params.id_etudiant);
    Etudiant.findOne({id_etudiant: req.params.id_etudiant})
    .then((etudiants)=>{
        console.log(etudiants);
        if (etudiants) {
           return res.status(201).json({results : true})
        }
        res.status(201).json({results : false})
    })
    .catch(()=>{
        req.status(500).json({message : 'Une erreur est survenue'})
    })
}