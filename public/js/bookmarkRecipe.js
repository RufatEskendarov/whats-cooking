const bookmarkRecipe = async (event, req) => {
    event.preventDefault();
  
   // userId value is set from handlebars and written to a div at the top of profile.handlebars
   const userId_str = document.querySelector('#user-id').textContent;
   const userId = parseInt(userId_str);
  //  console.log(userId);

   const url_str = window.location.pathname.split('/');
   const recipeIdString = url_str[2];
   const recipeId = parseInt(recipeIdString);
  //  console.log(recipeId);

    if (recipeId) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/userrecipes', {
        method: 'POST',
        body: JSON.stringify({ userId, recipeId }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        console.log('Bookmark added')
      } else {
        alert('Unable to add bookmark, please try again!');
      }
    }
  };

  document
  .querySelector('.btn--round')
  .addEventListener('click', bookmarkRecipe);