const express = require('express'); 
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


const app = express(); 
const PORT = 3000; 
const path = require('path');

// Connect to mongodb
mongoose.connect('mongodb://localhost/ninjago');
mongoose.Promise = global.Promise; // mongoose promise is deprecated
 
// getting request body middleware
app.use(bodyParser.json());

// initialise routes (middlewares)
app.use('/api', require("./routes/api"));

// Error handling middleware
app.use(function(error, request, response, next){

    // Sends the error message to the client, and changes
    // the status code from 200 (OK) to 422 (Unprocessable entity).
    response.status(422).send({
        error : error.message
    }) 
});

// listen for request
app.listen(PORT,
    () => { console.log(`Server running at http://localhost:${PORT}`); }
); 
