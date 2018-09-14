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

  // static valueRowBuilder(){
  //   return `
  //   <thead>
  //     <tr>
  //       <th>     </th>
  //       <th>Flag Respect</th>
  //       <th>Family</th>
  //       <th>Environment</th>
  //       <th>Economy</th>
  //       <th>     </th>
  //     </tr>
  //   </thead>
  //   <tbody id='tableBody'>
  //   </tbody>
  //   `
  // }

  static valueRowBuilder(){
    return `
    <thead>
      <tr>
        <th>     </th>

        <th>Flag Respect
          <p style="float: left;">
          <img src="./images/noun_Flag_797458.svg" height="25" border="1px"></p>
        </th>

        <th>Family
          <p style="float: left;">
          <img src="./images/noun_Family_851647.svg" height="25" border="1px"></p>
        </th>

        <th>Environment
          <p style="float: left;">
          <img src="./images/noun_Earth Environment_1277712.svg" height="25" border="1px"></p>
        </th>

        <th>Economy
          <p style="float: left;">
          <img src="./images/noun_Money_1346173.svg" height="25" border="1px"></p>
        </th>

        <th>     </th>

      </tr>
    </thead>
    <tbody id='tableBody'>
    </tbody>
    `
  }


}

Value.all = []
