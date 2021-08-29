import './App.css';
import { v4 as uuidv4 } from 'uuid';
import { isTerminatorless } from '@babel/types';

/*

async selectResponse(item) {
  if(!this.select) {
    this.select = true;
    try {
      // throws a request to quiz/server, and checks if the name clicked matches any of the server's keys
      const response = await fetch('http://localhost:8000/' + item.text);
      const data = response.json();
      data.then( arr => { arr.length > 0 ? this.addScore(item, 1) : this.addScore(item, 0) });
    } catch {
      console.error
    }
  }
},

*/

const uuid = uuidv4(),
      output = document.getElementById('output');

let partyLeader = false,
    lobbyID = 0,
    username = "",
    playerIsReady = false,
    party = [],
    partyPlayers = {}; // ["uuid", "uuid" ... x5]

function playerReady() {

  // check if party is full
  if(party.length > 4) {
    console.log("Party is full!");
    finalizeParty()
  } else {
    let un = document.getElementById('username').value,
        lob = document.getElementById('lobbyID').value,
        ptLeaderOK = document.getElementById('partyLeaderOK').checked;
    let x = {
      id: uuidv4(),
      username: un,
      lobbyID: lob,
      leader: ptLeaderOK
    };
    party.push(x);
    console.log(party);
  }
}

function finalizeParty() {
  let partyOutput = '';
  party.forEach((p, i) => {
    partyOutput += `player: ${p.username}, id: ${p.id}, partyLeader: ${p.leader}, lobbyID: ${p.lobbyID} || `
  })
  output.innerText = partyOutput;
}

// would want to know username, and optionally "if party leader" and if so "lobbyID"

//

// need function that
// serves uuid
// handles connects/disconnects
// server needs to know all connected uuids
// after array is completed, a timeout function is started that "frees" the uuids (i assume we would want each one to be unique in connecting)
// 
 
function App() {
  return (
    <>
      <main>
        <p>
          
          I'm OK with being a party leader: <input type="checkbox" id="partyLeaderOK" />
          

          <br />

          <label for="username">Username: </label>
          <input type="text" name="username" id="username" />

          <br />

          <label for="lobbyID">Lobby ID: </label>
          <input type="text" name="lobbyID" id="lobbyID" placeholder="********" />

          <br />

          <button id="readyBtn" onClick={()=>{playerReady()}}>Ready!</button>

          <br />

          <textarea id="output" style={{width:'300px',height:'300px'}} />

        </p>
      </main>
    </>
  );
}

export default App;
