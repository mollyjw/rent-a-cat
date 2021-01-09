export class Cat {
  name: string
  breed: string
  age: string
  gender: string
  size: string
  coloring: string
  coat_length: string
  house_trained: string
  health: string
  description: string
  image: string
  id: any
  created_at: string
  updated_at: string

  constructor({
    name = '',
    breed = '',
    age = '',
    gender = '',
    size = '',
    coloring = '',
    coat_length = '',
    house_trained = '',
    health = '',
    description = '',
    image = '',
    id = null,
    created_at = '',
    updated_at = ''
  }) {
    Object.assign(this)
    this.name = name
    this.breed = breed
    this.age = age
    this.gender = gender
    this.size = size
    this.coloring = coloring
    this.coat_length = coat_length
    this.house_trained = house_trained
    this.health = health
    this.description = description
    this.image = image
    this.id = id
    this.created_at = created_at
    this.updated_at = updated_at
  }
}

