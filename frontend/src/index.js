document.addEventListener('DOMContentLoaded', () => {
  console.log("connected")
  fetchAllParties()
  fetchAllValues()

})

function fetchAllParties(){
  const endPoint = 'http://localhost:3000/api/v1/parties';
  fetch(endPoint)
  .then(res => res.json())
  .then(json => {
    json.forEach(party => {
      const newParty = new Party(party);
      document.getElementById('parties_contaner').innerHTML += newParty.renderPartyContainer()
      document.getElementById('partiesHeader').innerHTML += newParty.renderPartyHeader()
      // document.getElementById(`partyId_${party.id}`).addEventListener('click', renderPartyPage)
    });
  });
}

function renderPartyPage(partyId){
  const endPoint = 'http://localhost:3000/api/v1/candidates';
  fetch(endPoint)
    .then(res => res.json())
    .then(json => {
      json.forEach(candidate => {
        const newCandidate = new Candidate(candidate);
      })
    })
  .then(finalRenderPartyPage(partyId))
}

function finalRenderPartyPage(partyId){
  document.querySelector('#parties_contaner').innerHTML = ""
  document.querySelector('#candidateValuesTable').innerHTML = ""
  let p = Party.findById(partyId)
  renderSingleParty(partyId)
}

function renderSingleParty(partyId){
  let p = Party.findById(partyId)
  document.getElementById('partyName').innerText = `${p.name}`
  document.getElementById('partyImage').src = `${p.image}`
  document.getElementById('candidateValuesTable').innerHTML += Value.valueRowBuilder()
  fetchAllCandidates(partyId)
}

function fetchAllCandidates(partyId){
  const endPoint = 'http://localhost:3000/api/v1/candidates';
  fetch(endPoint)
    .then(res => res.json())
    .then(json => {
      json.forEach(candidate => {
        const newCandidate = new Candidate(candidate)
        if (newCandidate.party_id === partyId){
          document.getElementById('tableBody').innerHTML += newCandidate.renderCandidate()
        }
      })
      addEditBtn()
    })
}

// function addNewCCBtn(){
//   debugger
//   let prtycont = document.getElementById('newCandidateBtn')
//   prtycont.innerHTML += Party.addNewBtn()
// }

function addEditBtn(){
  let btnArr = document.querySelectorAll("button")
  btnArr.forEach(function (oneBtn){
    oneBtn.addEventListener('click', handleEdit)
  })
}

function handleEdit(){
  let candidateId = parseInt(event.target.id.split("_")[1])
  let cc = Candidate.findById(candidateId)
  document.getElementById(`candidateRowId_${candidateId}`).innerHTML = cc.renderEditInTable()
  document.getElementById(`editCandidateid_${candidateId}`).addEventListener("click", patchFetch)
}

function patchFetch(){
  ccId = parseInt(event.path[1].children[0].id.split("_")[1])
  cvIdFlag = parseInt(event.path[1].children[2].children[0].id.split("_")[1])
  cvIdFamily = parseInt(event.path[1].children[3].children[0].id.split("_")[1])
  cvIdEnv = parseInt(event.path[1].children[4].children[0].id.split("_")[1])
  cvIdEcon = parseInt(event.path[1].children[5].children[0].id.split("_")[1])

  let newFlagConv = parseInt(event.path[1].children[2].children[0].value)
  let newFamilyConv = parseInt(event.path[1].children[3].children[0].value)
  let newEnvironmentConv = parseInt(event.path[1].children[4].children[0].value)
  let newEconomyConv = parseInt(event.path[1].children[5].children[0].value)
  // debugger
  fetch(`http://localhost:3000/api/v1/candidate_values/${cvIdFlag}`,{
    method: 'PATCH',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'},
    body: JSON.stringify({conviction: newFlagConv})
      })
      .then(

      fetch(`http://localhost:3000/api/v1/candidate_values/${cvIdFamily}`,{
        method: 'PATCH',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'},
        body: JSON.stringify({conviction: newFamilyConv})
          })
          .then(
  // .then(res => console.log(res))

          fetch(`http://localhost:3000/api/v1/candidate_values/${cvIdEnv}`,{
            method: 'PATCH',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'},
            body: JSON.stringify({conviction: newEnvironmentConv})
            })
            .then(
  // .then(res => console.log(res))

            fetch(`http://localhost:3000/api/v1/candidate_values/${cvIdEcon}`,{
              method: 'PATCH',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'},
              body: JSON.stringify({conviction: newEconomyConv})
                }))))
                .then(resetCc(ccId))
}

function resetCc(ccid){
  let cInstance = Candidate.findById(ccid)
  document.getElementById(`candidateRowId_${ccid}`).innerHTML = cInstance.renderCandidate()
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
