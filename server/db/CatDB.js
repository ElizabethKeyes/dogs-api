

export class Cat {
  constructor(data) {
    this.id = data.id
    this.name = data.name
    this.color = data.color
    this.personality = data.personality
    this.unpredictable = true
  }
}

class CatDB {
  cats = [
    new Cat({
      id: 1,
      name: "Opal",
      color: "Gray",
      personality: "Feisty"
    }),
    new Cat({
      id: 2,
      name: "Spinoza",
      color: "Gray",
      personality: "Friendly"
    }),
    new Cat({
      id: 3,
      name: "Monster",
      color: "Black",
      personality: "Angry"
    }),
    new Cat({
      id: 4,
      name: "Muffin",
      color: "White",
      personality: "Curious"
    }),
    new Cat({
      id: 5,
      name: "Amira",
      color: "Gray and White",
      personality: "Shy"
    })
  ]
}

export const catDb = new CatDB()