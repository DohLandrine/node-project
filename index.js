const express = 
require('express'); 
const bodyParser = require('body-parser')


const app = express(); 
const PORT = 3000; 
const path = require('path');

//
app.use(bodyParser.json());

// initialise routes (middlewares)
app.use('/api', require("./routes/api"));

// listen for request
app.listen(PORT, 
    () => { console.log(`Server running at http://localhost:${PORT}`); }
); 
