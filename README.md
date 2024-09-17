# Meal-Finder

Meals Finder is a web application that allows users to search for recipes, explore meals based on categories, and view detailed information about each meal, including ingredients, measurements, and preparation instructions. The app integrates with the TheMealDB API to fetch meal data dynamically.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [File Structure](#file-structure)
- [Setup Instructions](#setup-instructions)
- [Usage](#usage)
- [API Integration](#api-integration)

## Features

- **Search Recipes:** Search for meals by name from the home page.
- **Meal Categories:** Browse meals based on specific categories such as Beef, Chicken, Vegan, etc.
- **Meal Details:** View detailed information about a selected meal, including its category, ingredients, measures, and instructions.
- **Responsive Design:** The web app is responsive and works on different screen sizes.

## Technologies Used

- **HTML:** For structuring the web pages.
- **CSS:** For styling the web pages.
- **JavaScript:** For adding interactivity and fetching data from the API.
- **TheMealDB API:** Used for fetching meal data, categories, and meal details.

## File Structure

- **index.html:** The main homepage where users can search for meals or browse categories​.
- **category.html:** Lists meals under a selected category​.
- **mealDetails.html:** Displays the details of a selected meal, including its ingredients, measurements, and instructions​.
- **script.js:** Contains the JavaScript code to fetch data from TheMealDB API, manage search functionality, and display meal data dynamically​.

## Usage

- **Search for Meals:** On the homepage (index), you can search for meals using the search bar. The search results will be displayed dynamically based on the input​.
- **Browse Categories:** Click on a category from the list to view meals within that category. The meals are fetched and displayed using the category-specific API calls​.
- **View Meal Details:** Click on any meal from the search results or category listing to see detailed information, including ingredients, measures, and instructions​.

## API Integration

- This app uses TheMealDB API to fetch data for meals, categories, and meal details.
