// Here you are requiring files, etc. to be used IN this file defined by locations of other files within the app or by
// dependencies in your base package.json file

let express = require('express') // this requires the express library to be brought into this file
let bodyParser = require('body-parser')
let path = require('path')  // this requires the files created for 'dist' to be brought into this file, you need to let the app use this below

let api_routes = require('./routes/api.js') // this requires routes/api.js file to be accessed by this file, you need to let the app use this below

// app config
let app = express() // this defines the web app

// below are how you define the items you've required above
app.use(express.static(path.join(__dirname, 'student-sign-in-client', 'dist'))) // this tells our app to use the "minified" static files created in preparing 
// our files for production by using the joined directory name 'student-sign-in-client' and 'dist'. 
// These are coming from the path required above

app.use(bodyParser.json())

app.use('/api', api_routes) // this tells our app to use the routes/api.js routes we have required in this file above

// error handlers - for route not found
app.use(function(req, res, next){
    res.status(404).send('Not Found')
})

// error handler for server errors
app.use(function(err, req, res, next){
    console.error(err.stack)
    res.status(500).send('Server error')
})

// this starts server running, process.env.PORT tells us what port to run, otherwise use 3000
let server = app.listen(process.env.PORT || 3000, function() {
    console.log('Express server running on port', server.address().port )  // this fuction gives us feedback to know what port the server is running on
})