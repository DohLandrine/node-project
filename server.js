const express = 
require('express'); 
const app = express(); 
const PORT = 3000; 
const path = require('path');

app.get("/", (req, res) => {
    return res.send('Hello, world!');
});

app.get("/html", (req, res) => {
    return res.sendFile(path.join(__dirname, './html_files/index.html'));
});


app.listen(
    PORT, 
    () => { console.log(`Server running at http://localhost:${PORT}`); }
); 