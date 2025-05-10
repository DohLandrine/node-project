const express = require('express');

const router = express.Router();
// get a list of ninjas from the db
router.get('/ninjas', (request, respond) => {
    respond.send( {type:'GET'}  )
});

//add a new ninja to the db
router.post('/ninjas', (request, respond) => {
    respond.send( {type:'POST'}  )
});

//update a ninja in the db
router.put('/ninjas/:id', (request, respond) => {
    respond.send( {type:'PUT'}  )
});

// delete a ninja from a db
router.delete('/ninjas/:id', (request, respond) => {
    respond.send( {type:'DELETE'}  )
});

module.exports = router;