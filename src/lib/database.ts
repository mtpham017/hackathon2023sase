// Import the necessary modules using ESM syntax
import Database from 'better-sqlite3';

// Create or open a SQLite database file
const db = new Database('mydatabase.db');

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

// Create the CATEGORIES table
createCategoriesTable.run();

// Create the ITEM table
createItemTable.run();