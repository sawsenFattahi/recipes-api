import { Request, Response } from 'express';
import { Recipe, readRecipeFromFile, writeRecipeToFile } from '../../data-access/recipeModel' ;

export const getAllRecipes = async (req: Request, res: Response) => {
    try {
        const recipes: Recipe[] = await readRecipeFromFile();
        res.json(recipes);
    } catch (error) {
        res.status(500).json({ message: 'Error to get all recipes', error });
    }
};

export const updateRecipe = async (req: Request, res: Response) => {
    const recipeId = parseInt(req.params.id);
    const newName = req.body.name;

    if (isNaN(recipeId) || typeof newName !== 'string') {
        return res.status(400).json({ message: 'Data is not valid' });
    }

    try {
        let recipes: Recipe[] = await readRecipeFromFile();
        const updatedRecipes = recipes.map(recipe => {
            if (recipe.id === recipeId) {
                recipe.name = newName;
            }
            return recipe;
        });
        await writeRecipeToFile(updatedRecipes);
        res.json({ message: 'recipes updated successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error to update recipes', error });
    }
};

export const createRecipe = async (req: Request, res: Response) => {
    const newRecipeName = req.body.name;

    if (typeof newRecipeName !== 'string') {
        return res.status(400).json({ message: 'Data is not valid' });
    }

    try {
        const recipes: Recipe[] = await readRecipeFromFile();
        const newRecipe: Recipe = {
            id: recipes.length + 1,
            name: newRecipeName
        };
        recipes.push(newRecipe);
        await writeRecipeToFile(recipes);
        res.status(201).json({ message: 'recipe created successfully', newRecipe });
    } catch (error) {
        res.status(500).json({ message: 'error to create recipe', error });
    }
};

export const deleteRecipe = async (req: Request, res: Response) => {
    const recipeId = parseInt(req.params.id);
console.log("hello",recipeId);
    if (isNaN(recipeId)) {
        return res.status(400).json({ message: 'Data is not valid' });
    }

    try {
        let recipes: Recipe[] = await readRecipeFromFile();
        recipes = recipes.filter(recipe => recipe.id !== recipeId);
        await writeRecipeToFile(recipes);
        res.json({ message: 'deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'error to delete recipe', error });
    }
};