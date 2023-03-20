import { catsService } from "../services/CatsService.js";
import BaseController from "../utils/BaseController.js";


export class CatsController extends BaseController {
  constructor() {
    super('/api/cats')
    this.router
      .get('', this.fetchAllCats)
      .get('/:catId', this.fetchCatById)
      .delete('/:catId', this.releaseCat)
      .post('', this.adoptCat)
  }

  async fetchAllCats(req, res, next) {
    try {
      const cats = await catsService.fetchAllCats()
      res.send(cats)
    } catch (error) {
      next(error)
    }
  }

  async fetchCatById(req, res, next) {
    try {
      const catId = req.params.catId
      const cat = await catsService.fetchCatById(catId)
      res.send(cat)
    } catch (error) {
      next(error)
    }
  }

  async releaseCat(req, res, next) {
    try {
      const catId = req.params.catId
      await catsService.releaseCat(catId)
      res.send('Cat has been successfully released (deleted)')
    } catch (error) {
      next(error)
    }
  }

  async adoptCat(req, res, next) {
    try {
      let catData = req.body
      const cat = await catsService.adoptCat(catData)
      res.send(cat)
    } catch (error) {
      next(error)
    }
  }

}