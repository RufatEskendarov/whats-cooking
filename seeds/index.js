const seedCuisine = require('./cuisine-seeds');
const seedMeals = require('./meals-seeds');
const seedRecipes = require('./recipes-seeds');
const seedUser = require('./user-seeds');
const seedUserRecipes = require('./userRecipes-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
    await seedCuisine();
    console.log('\n----- CUISINE SEEDED -----\n');
  
    await seedMeals();
    console.log('\n----- MEALS SEEDED -----\n');
  
    await seedRecipes();
    console.log('\n----- RECIPES SEEDED -----\n');
  
    await seedUser();
    console.log('\n----- USER SEEDED -----\n');

    await seedUserRecipes();
    console.log('\n----- USERRECIPES SEEDED -----\n');
  
    process.exit(0);
  };
  
  seedAll();