const express = require('express')
const router = express.Router()
const Author = require('../models/author')  //Author model add

//All autohrs route
router.get('/', async (req, res) => {
    let searchOp = {}
    if(req.query.name != null && req.query.name !== ''){
        searchOp.name = new RegExp(req.query.name, 'i')// i means "case insensetive" baboş
    }
    try{
        const authors = await Author.find({})
        res.render('authors/index', { 
        authors: authors,
        searchOp: req.query 
    })
    }catch{
        res.redirect('/')
    }
})

//New author route
router.get('/new', (req, res) => {
    res.render('authors/new', { author: new Author()})
})

//Create author route -----POST
router.post('/', async (req, res) => {
    const author = new Author({
        name: req.body.name
    })
    try{
        const newAuthor = await author.save()
    } catch {
        res.render('authors/new', {
            author: author,
            errorMessage: 'Error Creating AuthOr :('
        })
    }
})

module.exports = router