var express = require('express')
var user = express.Router()

// middleware that is specific to this router
user.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})
// define the home page route
user.get('/', function (req, res) {
  res.send('Birds home page')
})
// define the about route
user.get('/about', function (req, res) {
  res.send('About birds')
})

module.exports = user