const express = require('express')
const router = express.Router()
const Book = require('../models/book')  //Author model add

//All BOOKS ROUTE
router.get('/', async (req, res) => {
    res.send('All Books')
})

//New BOOK route
router.get('/new', (req, res) => {
    res.send('NewBooks')

})

//Create Book route -----POST
router.post('/', async (req, res) => {
    res.send('Create Books')
})

module.exports = router