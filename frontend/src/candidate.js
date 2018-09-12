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
     return `
     <tr id='candidateRowId_${this.id}'>
         <td>${this.name}</td>
         <td>${this.candidate_values[0].conviction}</td>
         <td>${this.candidate_values[1].conviction}</td>
         <td>${this.candidate_values[2].conviction}</td>
         <td>${this.candidate_values[3].conviction}</td>
         <td>
         <button class='ui basic button' id='candidateid_${this.id}'>
          Edit
         </button>
         </td>
     </tr>
     `
  }



  renderEdit(){
    return `
    <div class='fields'>
      <div class='field'>
      <h2>${this.name}</h2>
        <label id='Flag Respect'>Flag Respect</label>
        <input type='integer' value='${this.candidate_values[0].conviction}' data-keeper-lock-id='k-vr2bmajs2t'>
        <keeper-lock id='k-vr2bmajs2t' style='filter: grayscale(100%); top: 34px; left: 147px; z-index: 1; visibility: hidden; height: 16px !important;'></keeper-lock>
        <label id='Family'>Family</label>
        <input type='integer' value='${this.candidate_values[1].conviction}' data-keeper-lock-id='k-vr2bmajs2t'>
        <keeper-lock id='k-vr2bmajs2t' style='filter: grayscale(100%); top: 34px; left: 147px; z-index: 1; visibility: hidden; height: 16px !important;'></keeper-lock>
        <label id='Environment'>Environment</label>
        <input type='integer' value='${this.candidate_values[2].conviction}' data-keeper-lock-id='k-vr2bmajs2t'>
        <keeper-lock id='k-vr2bmajs2t' style='filter: grayscale(100%); top: 34px; left: 147px; z-index: 1; visibility: hidden; height: 16px !important;'></keeper-lock>
        <label id='Economy'>Economy</label>
        <input type='integer' value='${this.candidate_values[3].conviction}' data-keeper-lock-id='k-vr2bmajs2t'>
        <br>
        <br>
        <keeper-lock id='k-vr2bmajs2t' style='filter: grayscale(100%); top: 34px; left: 147px; z-index: 1; visibility: hidden; height: 16px !important;'></keeper-lock>
        <button class='ui basic button' input type='submit' id='ccId_${this.id}'>
          Submit
        </button>
      </div>
    </div>`
  }

  //after td row fomr calls for <div field> but we took it out
  //maybe it will work
  renderEditInTable(){
       return `
       <tr id='candidateRowId_${this.id}'>
        <form class='ui form'>
        <td>${this.name}</td>
           <td>
              <input type = 'text' name='Molly' placeholder='molly' value='${this.candidate_values[0].conviction}'>
            </td>
            <td>
              <input type = 'text' name='Molly' placeholder='molly' value='${this.candidate_values[1].conviction}'>
            </td>
            <td>
              <input type = 'text' name='Molly' placeholder='molly' value='${this.candidate_values[2].conviction}'>
            </td>
            <td>
              <input type = 'text' name='Molly' placeholder='molly' value='${this.candidate_values[3].conviction}'>
            </td>
           <button class='ui basic button' type='submit' id='candidateid_${this.id}'>
           Submit
           </button>
           </td>

        </form>
       </tr>
       `
  }

}

// <td>${this.candidate_values[0].conviction}</td>

Candidate.all = []
