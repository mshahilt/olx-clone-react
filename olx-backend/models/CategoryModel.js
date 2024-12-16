const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  fields: [
    {
      name: { type: String, required: true },
      type: { type: String, required: true },
      enum: [String],
      required: { type: Boolean, default: false },
    },
  ],
});

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
