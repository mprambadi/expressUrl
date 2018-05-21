var express = require('express')
var url = express.Router()

// middleware that is specific to this router
url.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})
// define the home page route
url.get('/', function (req, res) {
  res.send('Birds home page')
})
// define the about route
url.get('/about', function (req, res) {
  res.send('About birds')
})

module.exports = url