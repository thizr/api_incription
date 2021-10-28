const express = require('express')

const cors = require('cors')
const bodyParser = require('body-parser')

const router = require('./routes/etudiant')
const db = require('./db/db')

const app = express()

app.use(bodyParser.urlencoded());

app.use(bodyParser.json());

app.use(cors({
    origin: '*',
    methods : ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    allowHeaders: 'content-type, Authorization, X-Requested-With, Origin, accept'
}))

app.use('/api-inscription', router)


app.use((req, res, next)=>{
    res.send('app running')
    next()
})

module.exports = app