import { Dog } from "../db/FakeDb.js";
import { dogsService } from "../services/DogsService.js";
import BaseController from "../utils/BaseController.js";


export class DogsController extends BaseController {
  constructor() {
    super('api/dogs')
    this.router
      .get('', this.fetchAllDogs)
      .get('/:dogId', this.fetchById)
      .delete('/:dogId', this.releaseDog)
      .post('', this.adoptDog)
  }

  async fetchAllDogs(req, res, next) {
    try {
      const dogs = await dogsService.fetchAllDogs()
      return res.send(dogs)
    } catch (error) {
      next(error)
    }
  }

  async fetchById(req, res, next) {
    try {
      const dogId = req.params.dogId
      const dog = await dogsService.fetchById(dogId)
      return res.send(dog)
    } catch (error) {
      next(error)
    }
  }

  async releaseDog(req, res, next) {
    try {
      const dogId = req.params.dogId
      await dogsService.releaseDog(dogId)
      return res.send('Dog successfully released (deleted)')
    } catch (error) {
      next(error)
    }
  }

  async adoptDog(req, res, next) {
    try {
      const dogData = req.body
      const dog = await dogsService.adoptDog(dogData)
      return res.send(dog)
    } catch (error) {
      next(error)
    }
  }
}