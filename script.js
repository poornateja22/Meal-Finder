document.getElementById('menu-btn').addEventListener('click', function () {
    document.getElementById('side-menu').style.width = '250px';
});

document.getElementById('close-btn').addEventListener('click', function () {
    document.getElementById('side-menu').style.width = '0';
});

let img = document.getElementsByClassName('img');
fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
    .then(response => response.json())
    .then(data => {
        let categories = data.categories;
        for (let i = 0; i < img.length && i < categories.length; i++) {
            img[i].setAttribute('src', categories[i].strCategoryThumb);
        }
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
