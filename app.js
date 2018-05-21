const express = require('express')
const app = express()
const url = require('./route/url')
const user = require('./route/user')


app.use('/',url)
app.user('/user', user)

app.listen(3000, () => console.log('Example app listening on port 3000!'))

//this is comments
//adding comment 