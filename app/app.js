
const bodyParser = require('body-parser')
const router = require('./routes.js')
const express = require('express')
const app = express()


app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use('/', router)





app.listen(3000, () => {
    console.log('server has started')
})