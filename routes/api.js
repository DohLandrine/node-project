const express = require('express');
const Ninja = require('../model/ninja');

const router = express.Router();
// get a list of ninjas from the db
router.get('/ninjas', (request, respond, next) => {
    Ninja.aggregate([
        {
            $geoNear: {
                near: { type: "Point", coordinates: [parseFloat(request.query.lng), parseFloat(request.query.lat)] },
                distanceField: "dist.calculated",
                maxDistance: 1000000, // Adjust the distance in meters as needed
                spherical: true
            }
        }
    ]).then((ninjas) => {
        respond.send(ninjas);
    }).catch(next);
});

//add a new ninja to the db
router.post('/ninjas', (request, respond, next) => {
    // the parameter 'next' basically says I am done here, 
    // now I want you to go to the next middleware.(For our)
    // post, it's the middleware for error handling.

    // Creating a new collection with the requesst body.
    Ninja.create(request.body).then(
        function(ninja) {
            respond.send(ninja);
        }
    ).catch(next); 
    // if the Ninja.create fails, it runs
    // whatever function in the catch();
});

//update a ninja in the db
router.put('/ninjas/:id', (request, respond, next) => {
    Ninja.findByIdAndUpdate({_id: request.params.id}, request.body).then(
        ()=>{
            Ninja.findById({_id : request.params.id}).then(
                (ninja) => {
                    respond.send(ninja);
                }
            ).catch(next);         
        }
    ).catch(next);
});

// delete a ninja from a db
router.delete('/ninjas/:id', (request, respond, next) => {
    Ninja.findByIdAndDelete({_id: request.params.id}).then(
        function (ninja) {
            respond.send(ninja)
        }
    ).catch(next);
});

// exporting our router   
module.exports = router;