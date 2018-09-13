class Party{
  constructor(data){
      this.id = data.id
      this.name = data.name
      this.slogan = data.slogan
      this.colors = data.colors
      this.image = data.image
      this.candidates = data.candidates

      Party.all.push(this)
  }

  static findById(id) {
    return this.all.find(party => party.id === id);
  }

  renderPartyContainer() {
    // debugger
    return`
      <div id='partyId_${this.id}' class='column'>
      <a href='#' onclick='renderPartyPage(${this.id})'>
        <img src=${this.image} height='200'>
      </a>
      <h3>${this.slogan}</h3>
      </div>
      `
  }

  renderPartyHeader(){
    return`
    <a href='#' onclick='renderPartyPage(${this.id})'>
      <img src=${this.image} height='15'>
    </a>
    `
  }

  static addNewBtn(){
    return`
    <button id='newCandidateForParty' class='ui basic button'>
      Add New Candidate
    </button>`
  }

  static addPartiesToNewPartyForm(){
    Party.all.forEach(function (party){
      document.getElementById('partySelect').innerHTML += `
      <option value='${party.id}'>${party.name}</option>`
    })
  }




    //debugger
    // let partyCandidateArray = this.candidates
    // partyCandidateArray.forEach(function(cand){
    //   let cc = Candidate.findById(cand.id)
    //   console.log(cc.candidate_values[0])
    // })
    //^ in an effort to render Party Values; we stopped en media res

    //<h3>Where we stand</h3>
    // <table id="values_table">
    //   <tr>
    //     <th>Name</th>
    //     <th>Average Conviction</th>
    //   <tr>
    // </table>

//     return `
//     <div id='partydetails'>
//     <h3>${this.name}</h3>
//     <img src=${this.image}>
//     <ul>
//       <li>
//     `
//   }
}

Party.all = []
