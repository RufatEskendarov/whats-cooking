const displayRecipeForm = (event) => {
    event.preventDefault();
  
    document.querySelector('.overlay').classList.remove('is-hidden');
    document.querySelector('.add-recipe-window').classList.remove('is-hidden');
  }

const addNewRecipe = (event) => {
  event.preventDefault();

  const userGenerated = true;
  const title = document.querySelector('#recipe-title').value.trim();
  const publisher = document.querySelector('#recipe-publisher').value.trim();
  const sourceUrl = document.querySelector('#recipe-url').value.trim();
  const image = document.querySelector('#recipe-image').value.trim();
  const servings = document.querySelector('#recipe-servings').value.trim();
  const cookingTime = document.querySelector('#recipe-cooking-time').value.trim();

  console.log(title);

  // const ingredientForm = document.querySelector('')
  const ingredientFields = document.querySelectorAll('#ingredient-column input');
  const ingredients = [];

  for (var i = 0; i < ingredientFields.length; i++) {
    const ingredient = ingredientFields[i].value;
    ingredients.push(ingredient);
    console.log(ingredients);
  }

  

  // const newRecipe = await fetcj('/api/recipes', {
  //   method: 'POST',
  //   body: JSON.stringify(req.body),
  //   headers: { 'Content-Type': 'application/json' },
  // });
}

document
  .querySelector('#add-recipe-button')
  .addEventListener('click', displayRecipeForm);

document
  .querySelector('.upload')
  .addEventListener('submit', addNewRecipe);