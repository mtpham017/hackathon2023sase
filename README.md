#Virtual Kitchen Helper (SHAHUL)

Welcome to Virtual Kitchen Helper SHAHUL, your digital kitchen assistant for identifying ingredients, sharing nutritional facts, recommending recipes, and assisting you in planning meals wisely.

##Table of Contents
-[Getting Started](#getting-started)
-[Prerequisites](#prerequisites)
-[Installation](#installation)
-[Usage](#usage)
-[Sign Up](#sign-up)
-[Log In](#log-in)
-[Fridge Management](#fridge-management)
-[Recipe Recommendations](#recipe-recommendations)
-[Contributing](#contributing)


##Getting Started

###Prerequisites

Before you begin, ensure you have met the following requirements:

-Node.js installed
-SQLite database set up (instructions below)

###Installation

Clone the repository:
git clone https://github.com/mtpham017/hackathon2023sase.git

Navigate to the project directory:

cd hackathon2023sase

Install the required dependencies:

npm install

Configure environment variables:

Create a .env file in the project directory.
Define environment variables for database connection and other sensitive information.
copy paste to .env file 
OPENFOODREPO_API_KEY="Enter Your API key" "Please request key from Owner"
KEY="Enter your Key" "Please request key from Owner"
npm run dev
Your Virtual Kitchen Helper app should now be running locally at your localhost

Usage

Sign Up
Access the app at localhost
Click on the "Sign Up" button.
Fill in your user information and preferences.
Click "Sign Up" to create your account.

Log In
Access the app at localhost
Click on the "Log In" button.
Enter your credentials (username and password).
Click "Log In" to access your account.

Fridge Management
After logging in, go to the "Fridge" section.
Add ingredients to your virtual fridge by searching or scanning barcodes.
View and manage your ingredient inventory.

Recipe Recommendations
Explore the "Recipes" section to discover recipes.
Use the "What's in My Fridge?" feature to find recipes based on your available ingredients.
Access nutritional facts, ingredients, and preparation instructions for each recipe.


Contributing
Contributions are what make the open-source community an amazing place to be, learn, and grow. We welcome contributions from the community.

Fork the project.
Create your feature branch: git checkout -b feature/feature-name.
Commit your changes: git commit -m 'Add some feature'.
Push to the branch: git push origin feature/feature-name.
Open a pull request.
