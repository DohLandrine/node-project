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

app.get(
    "/json", 
    (req, res) => {
    return res.json({ 
        message: "Hello, world!",
        status: 200,
        data: {
            name: "John Doe",
            age: 30,
            city: "New York"
        }
    });  }
)

app.get(
    "/about", 
    (req, res) => {
    return res.json({ 
        message: "Hello, about!",
        status: 200,
        data: {
            name: "John Doe",
            age: 30,
            city: "New York"
        }
    });  }
)

app.listen(
    PORT, 
    () => { console.log(`Server running at http://localhost:${PORT}`); }
); 