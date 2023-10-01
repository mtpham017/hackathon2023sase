// Import the necessary modules using ESM syntax
import Database from 'better-sqlite3';

// Create or open a SQLite database file
const db = new Database('mydatabase.db', { verbose: console.log });
export let isConnected = false;

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
    nutrient_ID INT REFERENCES NUTRIENT(nutrient_ID),
    user_id INTEGER REFERENCES USER(user_id),
    image TEXT
  )
`);


const createNutrientTable = db.prepare(`
  CREATE TABLE IF NOT EXISTS NUTRIENT (
    nutrient_ID INTEGER PRIMARY KEY AUTOINCREMENT,
    fat TEXT,
    sodium TEXT,
    carbs TEXT,
    fiber TEXT,
    calories TEXT
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
    name: string, barcode: number, nutrient_ID: number, categoryId: number, userId: number, image: Buffer,
    quantity: number

}

interface NutrientData {
  fat: string;
  sodium: string;
  carbs: string;
  fiber: string;
  calories: string;
}

function insertItem(items: InsertItemParams) {
    const insertItemStmt = db.prepare(`
      INSERT INTO ITEM (name, barcode, nutrient_ID, user_id, image)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `);
    const { name, barcode, nutrient_ID, userId, image, quantity } = items;
    return insertItemStmt.run(name, barcode, nutrient_ID, userId, image);
}

function insertNutrient(nutrientData: NutrientData) {
  const insertQuery = db.prepare(
    `
    INSERT INTO NUTRIENT (fat, sodium, carbs, fiber, calories)
    VALUES (?, ?, ?, ?, ?)
  `
  );

  const result = insertQuery.run(
    nutrientData.fat,
    nutrientData.sodium,
    nutrientData.carbs,
    nutrientData.fiber,
    nutrientData.calories
  );

  if (result.changes === 1) {
    // Successfully inserted, fetch the inserted row
    const nutrientId = result.lastInsertRowid;
    const insertedNutrient = db.prepare(
      `
      SELECT * FROM NUTRIENT WHERE nutrient_ID = ?
    `
    ).get(nutrientId);

    return insertedNutrient;
  } else {
    // Insertion failed
    return null;
  }
}

function updateQuantityOnItem(item_id:number, diff: number) {
  const updateQuantity = db.prepare(`
    UPDATE ITEM
    SET quantity = salary * ?
    WHERE item_id = ?
  `);
  updateQuantity.run(diff, item_id)
}
//close database 
export const close = () => {
    console.log("closing!")
    return db.close();
}

export {
    insertCategory,
    insertUser,
    insertItem,
    updateQuantityOnItem,
    insertNutrient
};

//This is Nathan work



// Exported function to insert a new recipe with items and quantities
export function insertRecipe(recipeName:string, item_ids: number[], user_id: number) {
  const insertRecipeStmt = db.prepare(`
    INSERT INTO recipe (recipe_name, user_id)
    VALUES (?, ?)
    RETURNING *
  `);

  const data = insertRecipeStmt.get(recipeName, user_id)
  for(const id of item_ids) {
    const insertRecipeItemStmt = db.prepare(`
      INSERT INTO recipe_item (recipe_id, item_id)
      VALUES (?, ?)
    `);
    console.log(id)
    insertRecipeItemStmt.run(data.recipe_id, id)
  }

  
}

export function getRecipesByUserId (user_id: number) {
  const query = db.prepare(`
    SELECT ri.*, r.recipe_name
    FROM recipe_item AS ri
    JOIN recipe AS r ON ri.recipe_id = r.recipe_id
    WHERE r.user_id = ?`.trim());
  const recipes = query.all(user_id);
  
  return recipes;
}

export function getItemsByUserId(user_id: number) {
  const query = db.prepare("SELECT * FROM ITEM WHERE user_id = ?");
  return query.all(user_id);
}

const connect = () => { 

    db.pragma('journal_mode = WAL');

    // Create the CATEGORIES table
    //createCategoriesTable.run();
    createNutrientTable.run();
    createUserTable.run();
    createRecipeTable.run();
    createRecipeItemTable.run();
    // Create the ITEM table
    createItemTable.run();
    isConnected = true;

}

connect();
