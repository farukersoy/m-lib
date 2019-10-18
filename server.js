if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}
const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')
const mongoose = require('mongoose')

const indexRouter = require('./routes/index')
mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true})
const db = mongoose.connection
db.on('err', error => console.log(err))
db.once('open', () => console.log('Connected to DB'))

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))


app.use('/', indexRouter) 

app.listen(process.env.PORT || 3000)

