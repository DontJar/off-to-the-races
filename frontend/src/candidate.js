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

  //after td row fomr calls for <div field> but we took it out
  //maybe it will work
  renderEditInTable(){
    //debugger
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
           <button class='ui basic button' class='submitBtn' type='submit' id='editCandidateid_${this.id}'>
           Submit
           </button>
           </td>

        </form>
       </tr>
       `
  }

}

// <td>${this.candidate_values[0].conviction}</td>

// renderEdit(){
//   return `
//   <div class='fields'>
//   <div class='field'>
//   <h2>${this.name}</h2>
//   <label id='Flag Respect'>Flag Respect</label>
//   <input type='integer' value='${this.candidate_values[0].conviction}' data-keeper-lock-id='k-vr2bmajs2t'>
//   <keeper-lock id='k-vr2bmajs2t' style='filter: grayscale(100%); top: 34px; left: 147px; z-index: 1; visibility: hidden; height: 16px !important;'></keeper-lock>
//   <label id='Family'>Family</label>
//   <input type='integer' value='${this.candidate_values[1].conviction}' data-keeper-lock-id='k-vr2bmajs2t'>
//   <keeper-lock id='k-vr2bmajs2t' style='filter: grayscale(100%); top: 34px; left: 147px; z-index: 1; visibility: hidden; height: 16px !important;'></keeper-lock>
//   <label id='Environment'>Environment</label>
//   <input type='integer' value='${this.candidate_values[2].conviction}' data-keeper-lock-id='k-vr2bmajs2t'>
//   <keeper-lock id='k-vr2bmajs2t' style='filter: grayscale(100%); top: 34px; left: 147px; z-index: 1; visibility: hidden; height: 16px !important;'></keeper-lock>
//   <label id='Economy'>Economy</label>
//   <input type='integer' value='${this.candidate_values[3].conviction}' data-keeper-lock-id='k-vr2bmajs2t'>
//   <br>
//   <br>
//   <keeper-lock id='k-vr2bmajs2t' style='filter: grayscale(100%); top: 34px; left: 147px; z-index: 1; visibility: hidden; height: 16px !important;'></keeper-lock>
//   <button class='ui basic button' input type='submit' id='ccId_${this.id}'>
//   Submit
//   </button>
//   </div>
//   </div>`
// }

Candidate.all = []
