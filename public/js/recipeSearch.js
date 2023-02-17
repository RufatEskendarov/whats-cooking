const recipeSearch = async (event) => {
    event.preventDefault();
  
    // Collect values from the login form
    const search = document.querySelector('#search-input').value.trim();
    console.log(search);
  
    if (search) {
      const response = await fetch(`/api/recipes?search=${search}`).then((res) =>
        res.json()
      );
      console.log(response);
    }
  };

  document
    .querySelector('#search-form')
    .addEventListener('submit', recipeSearch);