const bookmarkRecipe = async (event, req) => {
    event.preventDefault();
  
    // Collect values from the login form
    // const userId = req.session.user_id;
   const userId = document.querySelector('#user-info').dataset.userId;
   console.log(userId);
   const recipeId = 2;
  
    if (userId) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/userrecipes', {
        method: 'POST',
        body: JSON.stringify({ userId, recipeId }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // If successful, redirect the browser to the dashboard page
        document.location.replace('/profile');
      } else {
        alert('Login failed, please try again!');
      }
    }
  };

  document
  .querySelector('#bookmark-button')
  .addEventListener('click', bookmarkRecipe);