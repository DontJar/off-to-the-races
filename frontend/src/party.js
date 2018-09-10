class Party{
  constructor(data){
      this.id = data.id
      this.name = data.name
      this.slogan = data.slogan
      this.colors = data.colors
      this.image = data.image

      Party.all.push(this)
  }

  static findById(id) {
    return this.all.find(party => party.id === id);
  }

  renderPartyContainer() {
    // debugger
    return`
      <div id='partyId_${this.id}'>
      <a href='#' onclick='renderPartyPage(${this.id})'>
        <img src=${this.image}>
      </a>
      <h3>${this.slogan}</h3>
      </div>
      `
  }
}

Party.all = []
