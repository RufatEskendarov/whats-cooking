const { Recipes } = require('../models');

const RecipesData = [
    {
        id: '5ed6604591c37cdc054bcd09',
        title: 'Cauliflower Pizza Crust (with BBQ Chicken Pizza)',
        publisher: 'Closet Cooking',
        sourceUrl: 'http://feedproxy.google.com/~r/ClosetCooking/~3/xvkmVGnlXNQ/cauliflower-pizza-crust-with-bbq.html',
        img: 'http://forkify-api.herokuapp.com/images/BBQChickenPizzawithCauliflowerCrust5004699695624ce.jpg',
        servings: 4,
        cookingTime: 75,
        ingredients: [
            {
              "quantity": 1,
              "unit": "",
              "description": "medium head cauliflower cut into florets"
            },
            { "quantity": 1, "unit": "", "description": "egg" },
            {
              "quantity": 0.5,
              "unit": "cup",
              "description": "mozzarella shredded"
            },
            {
              "quantity": 1,
              "unit": "tsp",
              "description": "oregano or italian seasoning blend"
            },
            {
              "quantity": null,
              "unit": "",
              "description": "Salt and pepper to taste"
            },
            {
              "quantity": 1,
              "unit": "cup",
              "description": "chicken cooked and shredded"
            },
            { "quantity": 0.5, "unit": "cup", "description": "barbecue sauce" },
            {
              "quantity": 0.75,
              "unit": "cup",
              "description": "mozzarella shredded"
            },
            {
              "quantity": null,
              "unit": "",
              "description": "Red onion to taste thinly sliced"
            },
            {
              "quantity": null,
              "unit": "",
              "description": "Fresh cilantro to taste"
            }
          ]
    },
    {
        id: '5ed6604591c37cdc054bca5d',
        title: 'Veggie Pizza',
        publisher: 'All Recipes',
        sourceUrl: 'http://allrecipes.com/Recipe/Veggie-Pizza/Detail.aspx',
        img: 'http://forkify-api.herokuapp.com/images/391236ba85.jpg',
        servings: 4,
        cookingTime: 75,
        ingredients: [
            {
              "quantity": 2,
              "unit": "",
              "description": "packages refrigerated crescent rolls"
            },
            { "quantity": 1, "unit": "cup", "description": "sour cream" },
            {
              "quantity": 1,
              "unit": "",
              "description": "package cream cheese softened"
            },
            { "quantity": 1, "unit": "tsp", "description": "dried dill weed" },
            { "quantity": 0.25, "unit": "tsp", "description": "garlic salt" },
            {
              "quantity": 1,
              "unit": "",
              "description": "package ranch dressing mix"
            },
            {
              "quantity": 1,
              "unit": "",
              "description": "small onion finely chopped"
            },
            {
              "quantity": 1,
              "unit": "",
              "description": "stalk celery thinly sliced"
            },
            {
              "quantity": 0.5,
              "unit": "cup",
              "description": "halved and thinly-sliced radishes"
            },
            {
              "quantity": 1,
              "unit": "",
              "description": "red bell pepper chopped"
            },
            {
              "quantity": 1.5,
              "unit": "cups",
              "description": "fresh broccoli chopped"
            },
            { "quantity": 1, "unit": "", "description": "carrot grated" }
          ]
    },
];

const seedRecipes = () => Recipes.bulkCreate(RecipesData);

module.exports = seedRecipes;