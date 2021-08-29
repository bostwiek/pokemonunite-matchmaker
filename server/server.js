// server.js File 
const express = require('express'); // Importing express module 
var cors = require("cors");

const app = express(); // Creating an express object 
const port = 8000; // Setting an port for this application

app.use(cors());

let allParties = [];

// Starting server using listen function 
app.listen(port, function (err) { 
    if(err){ 
        console.log("Error while starting server"); 
    } 
    else{ 
        console.log("Server has been started at "+port); 
    } 
}) 

// listen for get in base directory
app.get('/:id', function (req, res) {
    // console.log(req.params);
    let urlString = req.params.id.split('&');
    if(urlString.indexOf(undefined) >= 0 || urlString.indexOf('favicon.ico') >= 0) {
        // res.send('error')
    } else {
        allParties.push(urlString[0]);
        allParties.push(urlString[1]);
    }
    if(allParties.length > 9) {
        res.send(allParties.join(','))
    }
    res.send("Still waiting for " + (10 - allParties.length) + " players to join");
})