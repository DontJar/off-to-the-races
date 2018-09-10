document.addEventListener('DOMContentLoaded', () => {
  console.log("connected")
  fetchAllParties()
  // fetchAllValues()
  // showAllCandidates()
})

function fetchAllParties(){
  const endPoint = 'http://localhost:3000/api/v1/parties';
  fetch(endPoint)
  .then(res => res.json())
  .then(json => {
    json.forEach(party => {
      const newParty = new Party(party);
      document.querySelector('#parties_contaner').innerHTML += newParty.renderPartyContainer()
      // document.getElementById(`partyId_${party.id}`).addEventListener('click', renderPartyPage)
    });
  });
}

function renderPartyPage(partyId){
  console.log(partyId)
}


function showAllCandidates(){
  const endPoint = 'http://localhost:3000/api/v1/candidates';
  fetch(endPoint)
    .then(res => res.json())
    .then(json => {
      json.forEach(candidate => {
        const newCandidate = new Candidate(candidate);
        document.querySelector('#candidates_table').innerHTML += newCandidate.renderTableRow();
      });
    });
}

function fetchAllValues(){
  const endPoint = 'http://localhost:3000/api/v1/values';
  fetch(endPoint)
  .then(res => res.json())
  .then(json => {
    json.forEach(value => {
      const newValue = new Value(value);
    });
  });
}
