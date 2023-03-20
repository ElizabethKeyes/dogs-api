import { Cat, catDb } from "../db/CatDB.js"
import { BadRequest } from "../utils/Errors.js"


class CatsService {
  async fetchAllCats() {
    const cats = await catDb.cats
    return cats
  }

  async fetchCatById(catId) {
    const cat = await catDb.cats.find(c => c.id == catId)
    return cat
  }

  async releaseCat(catId) {
    const catIndex = catDb.cats.findIndex(c => c.id == catId)
    if (catIndex == -1) {
      throw new BadRequest()
    }
    catDb.cats.splice(catIndex, 1)
  }

  async adoptCat(catData) {
    const cat = new Cat(catData)
    catDb.cats.push(cat)
    return cat
  }
}

export const catsService = new CatsService()