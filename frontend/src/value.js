class Value{
  constructor(data){
      this.id = data.id
      this.name = data.name
      this.description = data.description
      this.image = data.image

      Value.all.push(this)
  }

  static findById(id) {
    return this.all.find(value => value.id === id);
  }

  static valueRowBuilder(){
    return `
    <thead>
      <tr>
        <th>     </th>
        <th>Flag Respect</th>
        <th>Family</th>
        <th>Environment</th>
        <th>Economy</th>
        <th>     </th>
      </tr>
    </thead>
    <tbody id='tableBody'>
    </tbody>
    `
  }

}

Value.all = []
