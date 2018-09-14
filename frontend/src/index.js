document.addEventListener('DOMContentLoaded', () => {
  console.log("connected")
  fetchAllParties()
  fetchAllValues()
  document.getElementById('newCandidate').addEventListener('click', renderForm)
})

function fetchAllParties(){
  const endPoint = 'http://localhost:3000/api/v1/parties';
  fetch(endPoint)
  .then(res => res.json())
  .then(json => {
    json.forEach(party => {
      const newParty = new Party(party);
      document.getElementById('parties_contaner').innerHTML += newParty.renderPartyContainer()
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
  if (document.getElementById("newCandidateForm")){
    document.getElementById("newCandidateForm").innerHTML = ""
  }

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

function addEditBtn(){
  let btnCollection = document.getElementsByClassName('editBtn')
  let btnArr = Array.from(btnCollection)

  btnArr.forEach(function (oneBtn){
    oneBtn.addEventListener('click', handleEdit)
  })
}

function handleEdit(){
  let candidateId = parseInt(event.target.id.split("_")[1])
  let cc = Candidate.findById(candidateId)
  document.getElementById(`candidateRowId_${candidateId}`).innerHTML = cc.renderEditInTable()
  document.getElementById(`editCandidateid_${candidateId}`).addEventListener("click", patchFetch)
  document.getElementById(`deleteCandidateid_${candidateId}`).addEventListener('click', deleteFetch)
}

function patchFetch(){
  ccId = parseInt(event.path[1].children[0].id.split("_")[1])
  let thisCandidate = Candidate.findById(ccId)
  let partyId = thisCandidate.party_id
  cvIdFlag = parseInt(document.getElementById(`candidateRowId_${ccId}`).children[2].children[0].id.split("_")[1])
  cvIdFamily = parseInt(document.getElementById(`candidateRowId_${ccId}`).children[3].children[0].id.split("_")[1])
  cvIdEnv = parseInt(document.getElementById(`candidateRowId_${ccId}`).children[4].children[0].id.split("_")[1])
  cvIdEcon = parseInt(document.getElementById(`candidateRowId_${ccId}`).children[5].children[0].id.split("_")[1])

  let newFlagConv = parseInt(document.getElementById(`candidateRowId_${ccId}`).children[2].children[0].value)
  let newFamilyConv = parseInt(document.getElementById(`candidateRowId_${ccId}`).children[3].children[0].value)
  let newEnvironmentConv = parseInt(document.getElementById(`candidateRowId_${ccId}`).children[4].children[0].value)
  let newEconomyConv = parseInt(document.getElementById(`candidateRowId_${ccId}`).children[5].children[0].value)

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
                })
              )
            )
          )
          .then (renderPartyPage(partyId))
}

function deleteFetch(){
  ccId = parseInt(event.path[1].children[0].id.split("_")[1])
  let thisCandidate = Candidate.findById(ccId)
  let partyId = thisCandidate.party_id
  // debugger
  fetch(`http://localhost:3000/api/v1/candidates/${ccId}`,{
    method: 'DELETE'
  })
  .then (renderPartyPage(partyId))
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

function goBackToFront(){
  document.getElementById('main').innerHTML =
  `<div id='parties_contaner' class='ui two column grid' >
  </div>

  <div id='oneParty_container'>
    <div id='partydetails'>
      <div id='candidate_form' class='ui form'>
      <h3 id='partyName'></h3>
      <img id='partyImage' height='200'>
      <table class='ui table' id='candidateValuesTable'>
    </table>
  </div>
  </div>
  </div>`

  Party.all.forEach(function(party){
    document.getElementById('parties_contaner').innerHTML += party.renderPartyContainer()
  })
}

function renderForm(){
  goBackToFront()
  document.getElementById('candidate_form').innerHTML +=
  Candidate.renderNewCandidateForm()
  document.getElementById('newCCSubmit').addEventListener('click', newSubmit)
  Party.addPartiesToNewPartyForm()
}

function newSubmit(){
  newName = document.getElementById('firstInitialSelect').value + ". " + document.getElementById('lastNameSelect').value
  newFlagRespectValue = parseInt(document.getElementById('newFlagRespectValue').value)
  newFamilyValue = parseInt(document.getElementById('newFamilyValue').value)
  newEconomyValue = parseInt(document.getElementById('newEconomyValue').value)
  newEnvironmentValue = parseInt(document.getElementById('newEnvironmentValue').value)
  newPartyId = parseInt(document.getElementById('partySelect').value)

  //make a new Candidate
  fetch(`http://localhost:3000/api/v1/candidates`,{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'},
    body: JSON.stringify({
      name: newName,
      party_id: newPartyId})
      })

      .then(res => res.json())
      .then(jsonData => {
        let newCCId = jsonData.id
        fetch(`http://localhost:3000/api/v1/candidate_values`,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'},
        body: JSON.stringify({
          value_id: 1,
          candidate_id: newCCId,
          conviction: newFlagRespectValue})
          })

          .then(

          fetch(`http://localhost:3000/api/v1/candidate_values`,{
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'},
              body: JSON.stringify({
                value_id: 2,
                candidate_id: newCCId,
                conviction: newFamilyValue})
                })

              .then(

              fetch(`http://localhost:3000/api/v1/candidate_values`,{
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'},
                  body: JSON.stringify({
                    value_id: 3,
                    candidate_id: newCCId,
                    conviction: newEconomyValue})
                    })

                .then(

                fetch(`http://localhost:3000/api/v1/candidate_values`,{
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json'},
                    body: JSON.stringify({
                      value_id: 4,
                      candidate_id: newCCId,
                      conviction: newEnvironmentValue})
                    })
                  )
                )
              )
            }
          )
          .then(renderPartyPage(newPartyId))
  }
