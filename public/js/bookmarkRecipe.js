const bookmarkRecipe = async (event, req) => {
    event.preventDefault();
  
   // userId value is set from handlebars and written to a div at the top of profile.handlebarsnpm u 
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
  
      // if (response.ok) {
      //   // If successful, redirect the browser to the dashboard page
      //   document.location.reload();
      // } else {
      //   alert('Login failed, please try again!');
      // }
    }
  };

  document
  .querySelector('#bookmark-button')
  .addEventListener('click', bookmarkRecipe);