const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())

app.use('/api', require('./router'))

require('./utils/first-run')()

app.listen(8080, function () {
  console.log('Listening on 8080!')
})