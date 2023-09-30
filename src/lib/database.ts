// Import the necessary modules using ESM syntax
import Database from 'better-sqlite3';

// Create or open a SQLite database file
const db = new Database('mydatabase.db');

// Define the schema for the CATEGORIES table
const createCategoriesTable = db.prepare(`
  CREATE TABLE IF NOT EXISTS CATEGORIES (
    category_id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    description TEXT
  )
`);

// Define the schema for the ITEM table
const createItemTable = db.prepare(`
  CREATE TABLE IF NOT EXISTS ITEM (
    item_id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    price REAL,
    category_id INTEGER,
    FOREIGN KEY (category_id) REFERENCES CATEGORIES(category_id)
  )
`);

// Create the CATEGORIES table
createCategoriesTable.run();

// Create the ITEM table
createItemTable.run();