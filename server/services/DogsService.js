import { BadRequest } from "@bcwdev/auth0provider/lib/Errors.js"
import { Dog, fakeDb } from "../db/FakeDb.js"


class DogsService {

  async fetchAllDogs() {
    const dogs = await fakeDb.dogs
    return dogs
  }

  async fetchById(dogId) {
    let dog = await fakeDb.dogs.find(d => d.id == dogId)
    return dog
  }

  async releaseDog(dogId) {
    let dogIndex = await fakeDb.dogs.findIndex(d => d.id == dogId)
    if (dogIndex == -1) {
      throw new BadRequest()
    }
    fakeDb.dogs.splice(dogIndex, 1)
  }

  async adoptDog(dogData) {
    const newDog = new Dog(dogData)
    await fakeDb.dogs.push(newDog)
    return newDog
  }

}

export const dogsService = new DogsService()