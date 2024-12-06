import express from 'express';
import { getAllRecipes, updateRecipe, createRecipe, deleteRecipe } from '../controllers/recipeController';

const router = express.Router();

/**
 * @swagger
 * /recipes:
 *   get:
 *     summary: get all recipes.
 *     description: return all recipes.
 *     responses:
 *       200:
 *         description: all recipes returned successfully.
 *       500:
 *         description: error to get all recipes.
 */
router.get('/', getAllRecipes);

/**
 * @swagger
 * /recipes:
 *   post:
 *     summary: add a new recipe.
 *     description: create a new recipe using the provided data.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - id
 *               - name
 *             properties:
 *               id:
 *                 type: string
 *                 description: recipe id.
 *               name:
 *                 type: string
 *                 description: recipe name.
 *     responses:
 *       201:
 *         description: recipe created successfully.
 *       400:
 *         description: data is not valid.
 *       500:
 *         description: error to create recipe.
 */
router.post('/', createRecipe);


/**
 * @swagger
 * /recipes/{id}:
 *   patch:
 *     summary: update a new recipe.
 *     description: update a new recipe using the provided data.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: id of the recipe.
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *             properties:
 *               name:
 *                 type: string
 *                 description: recipe name.
 *         
 *     responses:
 *       200:
 *         description: recipes updated successfully.
 *       400:
 *         description: data is not valid.
 *       404:
 *         description: recipe not found.
 *       500:
 *         description: error to update recipes.
 */
router.patch('/:id', updateRecipe);

/**
 * @swagger
 * /recipes/{id}:
 *   delete:
 *     summary: delete an existing recipe.
 *     description: delete an existing recipe using the provided id.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: id of the recipe.
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: recipe deleted successfully.
 *       404:
 *         description: recipe not found.
 *       500:
 *         description: Error to delete recipe.
 */
router.delete('/:id', deleteRecipe);

export default router;