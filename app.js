const express = require('express')
const app = express()
const url = require('./route/url')

app.use('/',url)

app.listen(3000, () => console.log('Example app listening on port 3000!'))