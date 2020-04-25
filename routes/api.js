// routes match the requests coming from the server and match them up with the code that runs to return the response

let express = require('express') // this requires the express library to be brought into this file
let db = require('../models')
let Sequelize = require('sequelize')
let Student = db.Student

let router = express.Router() // this call creates an object to understand how to match paths/requests and the fuctions that can respond to the requests

// this route fetches data from api/students
router.get('/students', function(req, res, next){
    Student.findAll( { order: ['starID'] } ).then( students => {  // finds all students in the database
        return res.json(students) // returns a json response for all students
    }).catch( err => next(err))
})

// this route pushes data to api/students
router.post('/students', function(req, res, next){
    Student.create(req.body).then( (data) => {
        return res.status(201).send('Successfully created')
    }).catch( err => {
        if (err instanceof Sequelize.ValidationError) {
            let messages = err.errors.map( e => e.message )
            // 400 - bad request from user
            return res.status(400).json(messages)
        }
        return next(err)
    })
})

router.patch('/students/:id', function(req, res, next){
    Student.update( req.body, {where: { id: req.params.id } } )
        .then( rowsModified => {
            if (!rowsModified[0]) {
                return res.status(404).send('Not found')
            } else {
                return res.send('Successfully updated')
            }
        }).catch( err => {
            if (err instanceof Sequelize.ValidationError) {
                let messages = err.errors.map( (e) => e.message)
                return res.status(400).json(messages)
            }
            return next(err)
        })
    })

router.delete('/students/:id', function(req, res, next){
    Student.destroy( {where: { id: req.params.id } } )
        .then( rowsModified => {
            return res.send('Successfully deleted')
    }).catch( err => next(err) )
})

module.exports = router // exports router object so that other files can access the responses
