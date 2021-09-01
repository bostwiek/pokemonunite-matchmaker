const express = require('express');
const cors = require('cors');
const e = require('express');
const app = express();
const port = 8000;

let allParties = [],
    party = [],
    partyLoopCount = 0;

app.use(cors());

app.use(function (req, res, next) {
res.header('Access-Control-Allow-Origin', '*')
res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next()
});

app.get('/',
    function (req, res, next) {
        res.send("What up GET")
    }
);

app.post('/',
    function (req, res, next) {
        partyLoopCount++;
        if(party.length <= 5) {
            party.push(partyLoopCount);
            res.send(partyLoopCount + " has joined the party (" + party.join(', ') + ")");
        } else {
            res.send('Party is full ' + partyLoopCount + ', ' + party.join(', ') + ' are your team mates.');
            allParties.push(party);
            party = [];
        }
    }
);

app.listen(port, function (err) { 
    if(err){ 
        console.log("Error while starting server"); 
    } 
    else{ 
        console.log("Server has been started at "+port); 
    } 
});