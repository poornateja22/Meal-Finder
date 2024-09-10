document.getElementById('menu-btn').addEventListener('click', function () {
    document.getElementById('side-menu').style.width = '250px';
});

document.getElementById('close-btn').addEventListener('click', function () {
    document.getElementById('side-menu').style.width = '0';
});

let img = document.getElementsByClassName('img');
let categoryLinks = document.querySelectorAll('.categ-items a');
fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
    .then(response => response.json())
    .then(data => {
        let categories = data.categories;
        for (let i = 0; i < img.length && i < categories.length; i++) {
            img[i].setAttribute('src', categories[i].strCategoryThumb);
            categoryLinks[i].setAttribute('href', `category.html?category=${categories[i].strCategory}`);
        }
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });






    fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
    .then(response => response.json())
    .then(data => {
      // Assume we are using the first meal from the fetched data
      const category = data.categories[0];
      
      // Get the HTML elements
      const mealNameElement = document.querySelector('.category-name');
      const mealDescriptionElement = document.querySelector('.description');

      // Update the HTML elements with meal data
      mealNameElement.textContent = category.strCategory; // Set the meal name
      mealDescriptionElement.textContent = category.strCategoryDescription; // Set the meal description
    })
    .catch(error => {
      console.error('Error fetching meal data:', error);
    });





    
    // const mealContainer = document.getElementById('meal-items');
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');
    // let arr=['https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef', 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Chicken', 'https://www.themealdb.com/api/json/v1/1/filter.php?c=dessert',
    // 'https://www.themealdb.com/api/json/v1/1/filter.php?c=lamb', 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef', 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef', 
    // 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef', 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef', 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef',
    // 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef', 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef', 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef',
    // 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef', 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef'];
    // for(let x of )
    // Fetching data from the API
    fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef')
        .then(response => response.json())
        .then(data => {
            document.querySelector('.category-name').textContent = category;
            const meals = data.meals;
            const mealContainer = document.getElementById('meal-items');
            // Loop through each meal and display its name and image
            meals.forEach(meal => {
                // Create a div for each meal
                const mealDiv = document.createElement('div');
                mealDiv.classList.add('meal');
    
                // Create an img element for the meal image
                const mealImg = document.createElement('img');
                mealImg.setAttribute('src', meal.strMealThumb);
                mealImg.setAttribute('alt', meal.strMeal);
    
                // Create a div for the meal name
                const mealName = document.createElement('div');
                mealName.classList.add('meal-name');
                mealName.textContent = meal.strMeal;
    
                // Append the image and name to the meal div
                mealDiv.appendChild(mealImg);
                mealDiv.appendChild(mealName);
    
                // Append the meal div to the container
                mealContainer.appendChild(mealDiv);
            });
        })
        .catch(error => {
            console.error('Error fetching meals:', error);
        });
    
