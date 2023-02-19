const resultUl = document.querySelector('.results');

const recipeSearch = async (event) => {
    event.preventDefault();
  
    // Collect values from the search form
    const search = document.querySelector('#search-input').value.trim();
  
    if (search) {
      const resrecipes = await fetch(`/api/recipes?search=${search}`).then((res) =>
        res.json()
      );
      console.log(resrecipes);
      for (var i = 0; i < resrecipes.length; i++) {
        // console.log(resrecipes[i].id);
        resultUl.appendChild
      }

    }
  };

  document
    .querySelector('#search-form')
    .addEventListener('submit', recipeSearch);