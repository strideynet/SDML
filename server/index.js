const express = require('express')

const app = express()

app.use('/api', require('./router'))

app.listen(8080, function () {

})