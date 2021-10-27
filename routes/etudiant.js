const express = require('express')
const router = express.Router()

const etudiantCTRL = require('../controllers/etudiant')

router.get('/get-etudiants', etudiantCTRL.getEtudiant)

router.get('/get-etudiant/:id_etudiant', etudiantCTRL.getEtudiantByID)

router.post('/post-etudiant', etudiantCTRL.postEtudiant)

module.exports = router