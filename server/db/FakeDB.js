

export class Dog {
  constructor(data) {
    this.id = data.id
    this.name = data.name
    this.color = data.color
    this.size = data.size
    this.isGoodDog = true
  }
}

class FakeDB {
  dogs = [
    new Dog({
      id: 1,
      name: "Max",
      color: "Brown",
      size: "Medium"
    }),
    new Dog({
      id: 2,
      name: "Sparky",
      color: "Gray",
      size: "Medium"
    }),
    new Dog({
      id: 3,
      name: "Pippin",
      color: "Orange",
      size: "Small"
    }),
    new Dog({
      id: 4,
      name: "Sam",
      color: "Orange",
      size: "Small"
    }),
    new Dog({
      id: 5,
      name: "Sato",
      color: "Black",
      size: "Large"
    })
  ]
}

export const fakeDb = new FakeDB()