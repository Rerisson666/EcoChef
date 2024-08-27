const express = require('express');
const router = express.Router();
const RecipeController = require('../controllers/RecipeController');

// Get all recipes
router.get('/', RecipeController.getAllRecipes);

// Get recipe by ID
router.get('/:id', RecipeController.getRecipeById);

module.exports = router;
