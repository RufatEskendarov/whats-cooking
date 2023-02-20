const btnIncreaseServings = document.getElementById("btn--increase");
const btnDecreaseServings = document.getElementById("btn--decrease");
console.log(btnIncreaseServings);

const updateServings = async function () {
  const getCurrentRecipe = async function () {
    const currentRecipeId = window.location.pathname.split("/")[2];

    const curRecipe = await fetch(`/api/recipes/${currentRecipeId}`).then(
      (res) => res.json()
    );
    return curRecipe;
  };

  let recipe = await getCurrentRecipe();

  const updatedServings = async function (newServings) {
    recipe.ingredients.forEach((ing) => {
      ing.quantity = (ing.quantity * newServings) / recipe.servings;
    });

    recipe.servings = newServings;
    return recipe;
  };

  btnIncreaseServings.addEventListener("click", async function (e) {
    e.preventDefault();
    newServings = recipe.servings + 1;

    await updatedServings(newServings).then((rec) => rec);
    const group = document.querySelectorAll(".recipe__quantity");

    for (let i = 0; i < group.length; i++) {
      if (group[i].innerHTML) {
        group[i].innerHTML = recipe.ingredients[i].quantity.toFixed(1);
      }
    }
    const servingSize = document.querySelector(".recipe__info-data--people");
    servingSize.innerHTML = newServings;
  });

  btnDecreaseServings.addEventListener("click", async function (e) {
    e.preventDefault();
    newServings = recipe.servings - 1;

    if (newServings <= 0) return;
    await updatedServings(newServings).then((rec) => rec);
    const group = document.querySelectorAll(".recipe__quantity");

    for (let i = 0; i < group.length; i++) {
      if (group[i].innerHTML) {
        group[i].innerHTML = recipe.ingredients[i].quantity.toFixed(1);
      }
    }

    const servingSize = document.querySelector(".recipe__info-data--people");
    servingSize.innerHTML = newServings;
  });
};

updateServings();
const bookmarkRecipe = async (event, req) => {
  event.preventDefault();

  // Collect values from the login form
  // const userId = req.session.user_id;
  const userId = document.querySelector("#user-info").dataset.userId;
  console.log(userId);
  const recipeId = 2;

  if (userId) {
    // Send a POST request to the API endpoint
    const response = await fetch("/api/userrecipes", {
      method: "POST",
      body: JSON.stringify({ userId, recipeId }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      // If successful, redirect the browser to the dashboard page
      document.location.replace("/profile");
    } else {
      alert("Login failed, please try again!");
    }
  }
};

// document
//   .querySelector(".bookmark-button")
//   .addEventListener("click", bookmarkRecipe);
