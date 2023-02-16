const recipeSearch = async (event) => {
    event.preventDefault();
  
    // Collect values from the login form
    const search = document.querySelector('#search-input').value.trim();
  
    if (search) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/recipes/');
      const data = response.json();
      console.log(data);
  
    //   if (response.ok) {
    //     // If successful, redirect the browser to the dashboard page
    //     document.location.replace('/profile');
    //   } else {
    //     alert('Login failed, please try again!');
    //   }
    }
  };

  document
    .querySelector('#search-form')
    .addEventListener('submit', recipeSearch);