const express = 
require('express'); 


const app = express(); 
const PORT = 3000; 
const path = require('path');

// initialise routes
app.use('/api', require("./routes/api"));

// listen for request
app.listen(PORT, 
    () => { console.log(`Server running at http://localhost:${PORT}`); }
); 
