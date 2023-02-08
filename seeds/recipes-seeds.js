const { Recipes } = require('../models');

const RecipesData = [
    {
        name: 'Spaghetti',
        meal_id: 3,
        cuisine_id: 1,
    },
    {
        name: 'Pain au Chocolat',
        meal_id: 1,
        cuisine_id: 2,
    },
    {
        name: 'Tacos',
        meal_id: 2,
        cuisine_id: 4,
    },
    {
        name: 'Mandazi',
        meal_id: 3,
        cuisine_id: 1,
    },
    {
        name: 'Tteokbokki',
        meal_id: 5,
        cuisine_id: 5,
    },
];

const seedRecipes = () => Recipes.bulkCreate(RecipesData);

module.exports = seedRecipes;