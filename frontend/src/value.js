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

}

Value.all = []
