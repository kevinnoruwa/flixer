const express = require('express')
const route = express.Router()
const DB = require('../database/connection.js')


route.get('/',(req, res) => {
    res.render('home.ejs')
  
})



module.exports = route