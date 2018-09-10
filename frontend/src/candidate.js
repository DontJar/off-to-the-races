class Candidate{
  constructor(data){
    this.id = data.id;
    this.name = data.name;
    this.tagline = data.tagline;
    this.party_id = data.party_id;
    this.image = data.image


    Candidate.all.push(this)
    // debugger
  }

  renderTableRow() {
    // debugger
    return`
      <tr>
        <td>${this.name}</td>
        <td>${this.tagline}</td>
        <td>${Party.findById(this.party_id).name} 🎆</td>
      </tr>`
  }
}

Candidate.all = []
