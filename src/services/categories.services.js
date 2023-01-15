const Categories = require("../models/categories.models")


class CategoriesServices {
  static async getCategories() {
    try {
      const result = await Categories.findAll();
      return result;
    } catch (error) {
      throw error;
    }
  };

  static async createCategories(NewCategorie) {
    try {
      const result = await Categories.create(NewCategorie);
      return result;
    } catch (error) {
      throw error;
    }
  };

  static async deleteCategories(id) {
    try {
      const result = await Categories.destroy({
        where:{id}
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

}

module.exports = CategoriesServices