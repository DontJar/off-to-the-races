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

  renderAvgValues(){
    return`
    <div class="ui two padded grid">
      <div class= "five wide column">
        <div class= "ui segment" padding: 25px 50px 75px 100px>
          <h3 id='partyName'></h3>
          <center>
            <img id='partyImage' height='200'>
          </center>
        </div>
      </div>
        <div class= "eleven wide column">
          <div class= "ui segment">
          <table class="ui red table">
            <thead>
              <tr>
                <th></th>
                <th>Values We Hold</th>
                <th>Average Conviction</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><img src="./images/noun_Flag_797458.svg" height="50" border="1px"></td>
                <td>Flag Respect</td>
                <td id='flagAvg'></td>
              </tr>
              <tr>
                <td><img src="./images/noun_Family_851647.svg" height="50" border="1px"></td>
                <td>Family</td>
                <td id='famAvg'></td>
              </tr>
              <tr>
                <td><img src="./images/noun_Earth Environment_1277712.svg" height="50" border="1px"></p></td>
                <td>Environment</td>
                <td id='envAvg'></td>
              </tr>
              <tr>
                <td><img src="./images/noun_Money_1346173.svg" height="50" border="1px"></p></td>
                <td>Economy</td>
                <td id='econAvg'></td>
              </tr>
            </tbody>
            </table>
          </div>
          <br>
        </div>
    </div>
    `
  }

  static onlyUnique(value, index, self) {
      return self.indexOf(value) === index;
  }

    avgMath(partyId){
      let partyCandidates = []
      let partyCandidatesCV = []
      let flag = []
      let fam = []
      let env = []
      let econ = []
      Candidate.all.forEach(function (candidate){
        if (candidate.party_id === partyId){
          partyCandidates.push(candidate)
        }
      })
      partyCandidates.forEach(function (candidate){
        for (let i=0; i<partyCandidates.length; i++){
          partyCandidatesCV.push(partyCandidates[i].candidate_values)
        }
      })
      partyCandidatesCV.forEach(function (cv){
        for (let i=0; i<partyCandidatesCV.length; i++){
            flag.push(partyCandidatesCV[i][0].conviction)
            fam.push(partyCandidatesCV[i][1].conviction)
            env.push(partyCandidatesCV[i][2].conviction)
            econ.push(partyCandidatesCV[i][3].conviction)
        }
      })
      let flagAvg = flag.reduce((a,b) => a+b, 0)/(flag.length)
      let famAvg = fam.reduce((a,b) => a+b, 0)/(fam.length)
      let envAvg = env.reduce((a,b) => a+b, 0)/(env.length)
      let econAvg = econ.reduce((a,b) => a+b, 0)/(econ.length)
      document.getElementById('flagAvg').innerText = flagAvg.toFixed(2)
      document.getElementById('famAvg').innerText = famAvg.toFixed(2)
      document.getElementById('envAvg').innerText = envAvg.toFixed(2)
      document.getElementById('econAvg').innerText = econAvg.toFixed(2)
    }

}

Party.all = []
