document.getElementById('menu-btn').addEventListener('click', function () {
document.getElementById('side-menu').style.width = '250px';
});

document.getElementById('close-btn').addEventListener('click', function () {
document.getElementById('side-menu').style.width = '0';
});





let imgElements = document.getElementsByClassName('img');
let categoryLinks = document.querySelectorAll('.categ-items a');
fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
.then(response => response.json())
.then(data => {
    let categories = data.categories;
    for (let i = 0; i < imgElements.length && i < categories.length; i++) {
        imgElements[i].setAttribute('src', categories[i].strCategoryThumb);
        categoryLinks[i].setAttribute('href', `category.html?category=${categories[i].strCategory}`);
    }
})
.catch(error => {
    console.error('Error fetching data:', error);
});





fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
.then(response => response.json())
.then(data => {
    const categories = data.categories;
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');
    const selectedCategory = categories.find(cat => cat.strCategory === category);
    const mealNameElement = document.querySelector('.category-name');
    const mealDescriptionElement = document.querySelector('.description');
    if (selectedCategory) {
        mealNameElement.textContent = selectedCategory.strCategory; 
        mealDescriptionElement.textContent = selectedCategory.strCategoryDescription; 
    } 
    else {
        mealNameElement.textContent = 'Category not found';
        mealDescriptionElement.textContent = '';
    }
})
.catch(error => {
    console.error('Error fetching categories:', error);
});





let arr = [
'https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef', 
'https://www.themealdb.com/api/json/v1/1/filter.php?c=Chicken', 
'https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert',
'https://www.themealdb.com/api/json/v1/1/filter.php?c=Lamb', 
'https://www.themealdb.com/api/json/v1/1/filter.php?c=Miscellaneous', 
'https://www.themealdb.com/api/json/v1/1/filter.php?c=Pasta', 
'https://www.themealdb.com/api/json/v1/1/filter.php?c=Pork',
'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood', 
'https://www.themealdb.com/api/json/v1/1/filter.php?c=Side', 
'https://www.themealdb.com/api/json/v1/1/filter.php?c=Starter', 
'https://www.themealdb.com/api/json/v1/1/filter.php?c=Vegan', 
'https://www.themealdb.com/api/json/v1/1/filter.php?c=Vegetarian',
'https://www.themealdb.com/api/json/v1/1/filter.php?c=Breakfast',
'https://www.themealdb.com/api/json/v1/1/filter.php?c=Goat'
];
const mealContainer = document.getElementById('meal-items');
let mealCount = 0; 

const urlParams = new URLSearchParams(window.location.search);
const selectedCategory = urlParams.get('category');
const categoryUrl = arr.find(url => url.includes(`c=${selectedCategory}`));

if (categoryUrl) {
fetch(categoryUrl)
    .then(response => response.json())
    .then(data => {
        const meals = data.meals;
        mealContainer.innerHTML = ''; 
        meals.forEach(meal => {
            const mealDiv = document.createElement('div');
            mealDiv.classList.add('meal');
            const mealImg = document.createElement('img');
            mealImg.setAttribute('src', meal.strMealThumb);
            mealImg.setAttribute('alt', meal.strMeal);
    
            const mealName = document.createElement('div');
            mealName.classList.add('meal-name');
            mealName.textContent = meal.strMeal;
    
            mealDiv.appendChild(mealImg);
            mealDiv.appendChild(mealName);
    
            mealContainer.appendChild(mealDiv);

            mealCount++; 
        });
    })
    .catch(error => {
        console.error('Error fetching meals:', error);
    });
} else {
console.error('Category URL not found');
}

        

        
