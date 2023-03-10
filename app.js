const express = require('express')
const app = express()

const cors = require('cors')
const bodyParser = require('body-parser')
const userRoutes = require('./routes/users')


app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/users', userRoutes)


module.exports = app



