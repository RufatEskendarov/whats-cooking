const User = require('./User');
const Recipes = require('./Recipes');
const Cuisine = require('./Cuisine');
const Meals = require('./Meals');
const UserRecipes = require('./UserRecipes');

//Export your models so that it can be required in the server.js
// and/or routes files
Recipes.belongsTo(Cuisine, {
    foreignKey: 'cuisine_id'
});

Recipes.belongsTo(Meals, {
    foreignKey: 'meal_id'
});

Recipes.belongsToMany(User, {
    through: {
        model: UserRecipes,
        unique: false
    },
    as: 'user_recipes'
});

User.belongsToMany(Recipes, {
    through: {
        model: UserRecipes,
        unique: false
    },
    as: 'recipe_users'
});



module.exports = { User, Recipes, Cuisine, Meals, UserRecipes };
