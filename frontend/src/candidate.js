class Candidate{
  constructor(data){
    this.id = data.id;
    this.name = data.name;
    this.tagline = data.tagline;
    this.party_id = data.party_id;
    this.image = data.image
    this.candidate_values = data.candidate_values

    Candidate.all.push(this)
  }

  static findById(id) {
    return this.all.find(candidate => candidate.id === id)
  }

  renderTableRow() {
    return`
      <tr>
        <td>${this.name}</td>
        <td>${this.tagline}</td>
        <td>${Party.findById(this.party_id).name}</td>
      </tr>`
  }

  renderCandidate(){
    //debugger
     return `
     <tr id='candidateRowId_${this.id}'>
         <td>${this.name}</td>
         <td>${this.candidate_values.filter(c=>c.value_id===1)[0].conviction}</td>
         <td>${this.candidate_values.filter(c=>c.value_id===2)[0].conviction}</td>
         <td>${this.candidate_values.filter(c=>c.value_id===3)[0].conviction}</td>
         <td>${this.candidate_values.filter(c=>c.value_id===4)[0].conviction}</td>
         <td>
         <button class='editBtn' id='candidateid_${this.id}'>
          Edit
         </button>
         </td>
     </tr>
     `
  }


  renderEditInTable(){
       return `
       <tr id='candidateRowId_${this.id}'>
        <form class='ui form' id='editFormCandidate_${this.id}'>
        <td>${this.name}</td>
           <td>
              <input type='range' min='1' max='10' value='${this.candidate_values.filter(c=>c.value_id===1)[0].conviction}' id='cvid_${this.candidate_values.filter(c=>c.value_id===1)[0].id}' class='slider'>
            </td>
            <td>
              <input type='range' min='1' max='10' value='${this.candidate_values.filter(c=>c.value_id===2)[0].conviction}' id='cvid_${this.candidate_values.filter(c=>c.value_id===2)[0].id}' class='slider'>
            </td>
            <td>
              <input type='range' min='1' max='10' value='${this.candidate_values.filter(c=>c.value_id===3)[0].conviction}' id='cvid_${this.candidate_values.filter(c=>c.value_id===3)[0].id}' class='slider'>
            </td>
            <td>
              <input type='range' min='1' max='10' value='${this.candidate_values.filter(c=>c.value_id===4)[0].conviction}' id='cvid_${this.candidate_values.filter(c=>c.value_id===4)[0].id}' class='slider'>
            </td>
            <div class = "ui vertical buttons">
              <button class='ui black button' class='submitBtn' type='submit' id='editCandidateid_${this.id}'>
              Submit
              </button>
              <button class="ui red button" id='deleteCandidateid_${this.id}'>
              Delete
              </button>
            </div>
           </td>

        </form>
       </tr>
       `
  }

  static renderNewCandidateForm(){
    return `
    <div class="ui form" id="newCandidateForm">
    <h2>New Candidate</h2>

        <div class="field">
          <label>First initial</label>
          <input type="text" placeholder="First initial" id="firstInitialSelect" data-keeper-lock-id="k-rq4wbkqnnar">
        <keeper-lock id="k-rq4wbkqnnar" style="filter: grayscale(100%); top: 34px; left: 147px; z-index: 1; visibility: hidden; height: 16px !important;"></keeper-lock></div>

        <div class="field">
          <label>Last name</label>
          <input type="text" placeholder="Last name"
          id="lastNameSelect" data-keeper-lock-id="k-yw2guvwlpy">
        <keeper-lock id="k-yw2guvwlpy" style="filter: grayscale(100%); top: 34px; left: 338px; z-index: 1; visibility: hidden; height: 16px !important;"></keeper-lock></div>

          <div class="field">
            <label>Party</label>
            <select multiple="" class='ui dropdown' id='partySelect'>
            </select>
          </div>

        <div class="field">
          <label>Flag Respect</label>
          <input type='range' min='1' max='10' value='Flag Respect' id='newFlagRespectValue' class='slider'>
        </div>

        <div class="field">
          <label>Family</label>
          <input type='range' min='1' max='10' value='Family' id='newFamilyValue' class='slider'>
        </div>

        <div class="field">
          <label>Environment</label>
          <input type='range' min='1' max='10' value='Environment' id='newEnvironmentValue' class='slider'>
        </div>

        <div class="field">
          <label>Economy</label>
          <input type='range' min='1' max='10' value='Economy' id='newEconomyValue' class='slider'>
        </div>

      <button class="ui button" id="newCCSubmit" type="submit">Submit</button>
      </div>
    </div>
    `
  }
}

Candidate.all = []
