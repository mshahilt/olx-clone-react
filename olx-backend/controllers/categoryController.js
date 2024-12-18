const Category = require("../models/CategoryModel");

const insertCategory = async (req, res) => {
  try {
    const { name, fields } = req.body;

    const category = new Category({ name, fields });
    await category.save();

    res.status(201).json({ message: "Category created successfully", category });
  } catch (error) {
    res.status(500).json({ message: "Error creating category", error });
  }
};

const getCategoryFields = async (req, res) => {
  try {
    const { name } = req.params;


    const category = await Category.findOne({ name });
    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }

    res.status(200).json(category.fields);
  } catch (error) {
    res.status(500).json({ message: "Error fetching fields", error });
  }
};

module.exports = { insertCategory, getCategoryFields };
