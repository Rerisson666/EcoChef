const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  ingredients: [String],
  instructions: [String],
  impactScore: Number, // e.g., environmental impact score
});

module.exports = mongoose.model('Recipe', recipeSchema);
