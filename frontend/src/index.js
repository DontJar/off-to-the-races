document.addEventListener('DOMContentLoaded', () => {
  console.log("connected")
  // fetchAllValues()
  // fetchAllCandidates()
  fetchAllParties()
  fetchAllValues()
//  fetchAllCandidates()
})

function fetchAllParties(){
  const endPoint = 'http://localhost:3000/api/v1/parties';
  fetch(endPoint)
  .then(res => res.json())
  .then(json => {
    json.forEach(party => {
      const newParty = new Party(party);
      document.getElementById('parties_contaner').innerHTML += newParty.renderPartyContainer()
      // document.getElementById(`partyId_${party.id}`).addEventListener('click', renderPartyPage)
    });
  });
}



// commented out while we attempt to rebuild this function using the new framework we've built right into index.html
// function renderSingleParty(partyId){
//   let partycontainer = document.querySelector('#oneParty_container')
//   partycontainer.innerHTML = ""
//   let partydiv = document.createElement('div')
//   partydiv.id = 'partydetails'
//   let partyname = document.createElement('h3')
//   let p = Party.findById(partyId)
//   partyname.innerHTML = `${p.name}`
//   let partyimage = document.createElement('img')
//   partyimage.src = `${p.image}`
//   partyimage.height='350'

//   let candidatetable = document.createElement('table')
//   candidatetable.className = 'ui table'
//   let cthead = document.createElement('thead')
//   let ctlabels = document.createElement('tr')
//   let ctname = document.createElement('th')
//   ctname.innerHTML = ""
//   let ctv1 = document.createElement('th')
//   ctv1.innerText = "Flag Respect"
//   // let ctv1i = document.createElement('img')
//   // ctv1.className = "ui image header"
//   // ctv1i.src = "./images/noun_Flag_797458.svg"
//   let ctv2 = document.createElement('th')
//   ctv2.innerText = "Family"
//   // let ctv2i = document.createElement('img')
//   // ctv2.className = "ui image header"
//   // ctv2i.src = "./images/noun_Family_851647.svg"
//   let ctv3 = document.createElement('th')
//   ctv3.innerText = "Environment"
//   // let ctv3i = document.createElement('img')
//   // ctv3.className = "ui image header"
//   // ctv3i.src = "./images/noun_Earth Environment_1277712.svg"
//   let ctv4 = document.createElement('th')
//   ctv4.innerText = "Economy"
//   // let ctv4i = document.createElement('img')
//   // ctv4.className = "ui image header"
//   // ctv4i.src = "./images/noun_Money_1346173.svg"
//   let ctcrud = document.createElement('th')
//   ctcrud.innerText = ""
//   partycontainer.appendChild(partydiv)
//   partydiv.appendChild(partyname)
//   partydiv.appendChild(partyimage)
//   partydiv.appendChild(candidatetable)
//   candidatetable.appendChild(cthead)
//   cthead.appendChild(ctlabels)
//   ctlabels.appendChild(ctname)
//   ctlabels.appendChild(ctv1)
//   // ctv1.appendChild(ctv1i)
//   ctlabels.appendChild(ctv2)
//   // ctv2.appendChild(ctv2i)
//   ctlabels.appendChild(ctv3)
//   // ctv3.appendChild(ctv3i)
//   ctlabels.appendChild(ctv4)
//   // ctv4.appendChild(ctv4i)
//   ctlabels.appendChild(ctcrud)
//   let ctbody = document.createElement('tbody')
//   candidatetable.appendChild(ctbody)
//
//   p.candidates.forEach(function(candidate){
//     let ctrow = document.createElement('tr')
//     ctbody.appendChild(ctrow)
//     let c = Candidate.findById(candidate.id)
//     ctrow.innerHTML += c.renderCandidates()
//     let ctedit = document.getElementById(`candidateid_${candidate.id}`)
//     ctedit.addEventListener('click', editCandidate)
//   })
// }

// old busted
// function editCandidate(){
//   document.querySelector('#oneParty_container').innerHTML = ""
//   let candidateId = parseInt(event.target.id.split("_")[1])
//   let cc = Candidate.findById(candidateId)
//   let ccform = document.getElementById('candidate_form')
//   // debugger
//   ccform.innerHTML += cc.renderEdit()
//   let ccfield = document.getElementById('ccId_${candidateId}')
//   ccfield.addEventListener('click', handleEdit)
// }


function renderPartyPage(partyId){
  const endPoint = 'http://localhost:3000/api/v1/candidates';
  // debugger
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
  let btnArr = document.querySelectorAll("button")
  btnArr.forEach(function (oneBtn){
    oneBtn.addEventListener('click', handleEdit)
  })
}

function handleEdit(){
  let candidateId = parseInt(event.target.id.split("_")[1])
  let cc = Candidate.findById(candidateId)
  document.getElementById(`candidateRowId_${candidateId}`).innerHTML = cc.renderEditInTable()

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
