export interface Recipe {
    id: number;
    name: string;
}


import fs from 'fs';

const JSON_FILE_PATH = './src/apps/recipes/data-access/recipes.json';

export const readRecipeFromFile = async (): Promise<Recipe[]> => {
    const data = await fs.promises.readFile(JSON_FILE_PATH, 'utf-8');
    return JSON.parse(data);
};

export const writeRecipeToFile = async (recipes: Recipe[]): Promise<void> => {
    await fs.promises.writeFile(JSON_FILE_PATH, JSON.stringify(recipes, null, 2));
};