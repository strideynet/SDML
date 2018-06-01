const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const app = express()

let dbURL = require('config').get('dbURL')
mongoose.connect(dbURL).then(() => {
  console.log('Database connected successfully')
}).catch((err) => {
  console.error(err)
  process.exit(1)
})

app.use(bodyParser.json())

app.use('/api', require('./router'))

require('./utils/first-run')()

app.listen(8080, function () {
  console.log('Listening on 8080!')
})
