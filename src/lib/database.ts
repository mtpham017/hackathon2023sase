// Import the necessary modules using ESM syntax
import Database from 'better-sqlite3';

// Create or open a SQLite database file
const db = new Database('mydatabase.db', { verbose: console.log });

// Define the schema for the CATEGORIES table
const createCategoriesTable = db.prepare(`
  CREATE TABLE IF NOT EXISTS CATEGORIES (
    category_id INTEGER PRIMARY KEY AUTOINCREMENT,
    category_name TEXT NOT NULL
  )
`);

const createUserTable = db.prepare(`
  CREATE TABLE IF NOT EXISTS USERS (
    user_id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL,
  )
`);

// Define the schema for the ITEM table
const createItemTable = db.prepare(`
  CREATE TABLE IF NOT EXISTS ITEM (
    item_id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    barcode INT,
    expiration_date DATE,
    category_id INTEGER,
    FOREIGN KEY (user_id) REFERENCES USER(user_id)
    FOREIGN KEY (category_id) REFERENCES CATEGORIES(category_id)
    image BLOB
  )
`);

//connect and create table if not exists
export const connect = () => {
    db.pragma('journal_mode = WAL');

    // Create the CATEGORIES table
    createCategoriesTable.run();
    createUserTable.run();
    // Create the ITEM table
    createItemTable.run();
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
      INSERT INTO USERS (username)
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