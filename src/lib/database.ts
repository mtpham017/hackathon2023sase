// Import the necessary modules using ESM syntax
import Database from 'better-sqlite3';

// Create or open a SQLite database file
const db = new Database('mydatabase.db', { verbose: console.log });
export let isConnected = false;
// Define the schema for the CATEGORIES table
const createCategoriesTable = db.prepare(`
  CREATE TABLE IF NOT EXISTS CATEGORIES (
    category_id INTEGER PRIMARY KEY AUTOINCREMENT,
    category_name TEXT NOT NULL
  )
`);

const createUserTable = db.prepare(`
  CREATE TABLE IF NOT EXISTS USER (
    user_id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT NOT NULL,
    password TEXT NOT NULL
  )
`);

// Define the schema for the ITEM table
const createItemTable = db.prepare(`
  CREATE TABLE IF NOT EXISTS ITEM (
    item_id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    barcode INT,
    expiration_date DATE,
    category_id INTEGER REFERENCES CATEGORIES(category_id),
    user_id INTEGER REFERENCES USER(user_id),
    image INT
  )
`);

// Create the recipe table
const createRecipeTable = db.prepare(`
    CREATE TABLE IF NOT EXISTS recipe (
      recipe_id INTEGER PRIMARY KEY AUTOINCREMENT,
      recipe_name TEXT NOT NULL,
      user_id INTEGER REFERENCES USER (user_id)
    )
`);

// Create the junction table for recipes and items with quantities
const createRecipeItemTable = db.prepare(`
    CREATE TABLE IF NOT EXISTS recipe_item (
      recipe_id INTEGER NOT NULL,
      item_id INTEGER NOT NULL,
      quantity INTEGER,
      FOREIGN KEY (recipe_id) REFERENCES recipe (recipe_id),
      FOREIGN KEY (item_id) REFERENCES item (item_id)
    )
`);
export function signup(email: string, password: string) {
  const insertUser = db.prepare(`
    INSERT INTO USER (email, password) VALUES (?, ?)
  `);

  const result = insertUser.run(email, password)

  if (result.changes === 1) {
    return { success: true, message: 'User registered successfully' };
  } else {
    return { success: false, message: 'User registration failed' };
  }
}

export function login(email: string, password: string) {
  const findUser = db.prepare(`
    SELECT * FROM USER WHERE email = ? AND password = ?
  `);

  const user = findUser.get(email, password) as { email: string, password: string };

  if (user) {
    return { success: true, message: 'Login successful', user } ;
  } else {
    return { success: false, message: 'Invalid email or password' };
  }
}


function insertCategory(categoryName: string): void {
    const insertCategoryStmt = db.prepare(`
      INSERT INTO CATEGORIES (category_name)
      VALUES (?)
    `);
    
    insertCategoryStmt.run(categoryName);
  }

  
  function insertUser(username: string): void {
    const insertUserStmt = db.prepare(`
      INSERT INTO USER (username)
      VALUES (?)
    `);
    
    insertUserStmt.run(username);
  }

interface InsertItemParams { 
    name: string, barcode: number, expirationDate: string, categoryId: number, userId: number, image: Buffer

}
function insertItem(items: InsertItemParams): void {
    const insertItemStmt = db.prepare(`
      INSERT INTO ITEM (name, barcode, expiration_date, category_id, user_id, image)
      VALUES (?, ?, ?, ?, ?, ?)
    `);
    const { name, barcode, expirationDate, categoryId, userId, image } = items;
    insertItemStmt.run(name, barcode, expirationDate, categoryId, userId, image);
}
  
//close database 
export const close = () => {
    console.log("closing!")
    return db.close();
}

export {
    insertCategory,
    insertUser,
    insertItem
};

//This is Nathan work



// Exported function to insert a new recipe with items and quantities
export function insertRecipe(recipeName:string, itemsWithQuantity, user_id: number) {
  const insertRecipeStmt = db.prepare(`
    INSERT INTO recipe (recipe_name)
    VALUES (?)
  `);

  const insertRecipeItemStmt = db.prepare(`
    INSERT INTO recipe_item (recipe_id, item_id, quantity)
    VALUES (?, ?, ?)
  `);

  // Serialize the array to JSON before inserting it into the database
  const itemsJson = JSON.stringify(itemsWithQuantity);

  db.transaction(() => {
    insertRecipeStmt.run(recipeName);
    const recipeId = db.prepare('SELECT last_insert_rowid()').get()['last_insert_rowid()'];
    itemsWithQuantity.forEach(item => {
      insertRecipeItemStmt.run(recipeId, item.item_id, item.quantity);
    });
  })();
}

export function getItemsByUserId(userId: number) {
  const query = db.prepare('SELECT * FROM ITEM WHERE user_id = ?');
  const items = query.all(userId);
  return items;
}

// Exported function to get a recipe by ID, including items and quantities
export function getRecipeById(recipeId:number) {
  const getRecipeStmt = db.prepare(`
    SELECT recipe.recipe_id, recipe.recipe_name, recipe_item.quantity
    FROM recipe
    LEFT JOIN recipe_item ON recipe.recipe_id = recipe_item.recipe_id
    LEFT JOIN item ON recipe_item.item_id = item.item_id
    WHERE recipe.recipe_id = ?
  `);

  const rows = getRecipeStmt.all(recipeId);

  if (rows.length > 0) {
    const recipe = {
      recipe_id: rows[0].recipe_id,
      recipe_name: rows[0].recipe_name,
      items: rows.map(row => ({
        item_name: row.item_name,
        quantity: row.quantity,
      })),
    };
    return recipe;
  } else {
    return null; // Recipe not found
  }
}

export function getRecipesByUserId (user_id: number) {

}


const connect = () => { 

    db.pragma('journal_mode = WAL');

    // Create the CATEGORIES table
    createCategoriesTable.run();
    createUserTable.run();
    createRecipeTable.run();
    createRecipeItemTable.run();
    // Create the ITEM table
    createItemTable.run();
    isConnected = true;

}

connect();
