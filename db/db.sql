
-- =================================
-- COLLEGE CANTEEN PRE-ORDER SYSTEM
-- DATABASE CREATION
-- =================================

-- 1. Create Menu Table

CREATE TABLE IF NOT EXISTS menu_items (
    item_id INTEGER PRIMARY KEY AUTOINCREMENT,
    item_name TEXT NOT NULL,
    price REAL NOT NULL,
    availability INTEGER DEFAULT 1
);

-- 2. Create Orders Table

CREATE TABLE IF NOT EXISTS orders (
    order_id INTEGER PRIMARY KEY AUTOINCREMENT,
    student_name TEXT NOT NULL,
    total_amount REAL NOT NULL,
    order_status TEXT DEFAULT 'Pending',
    order_date TEXT DEFAULT CURRENT_TIMESTAMP
);

-- 3. Create Order Details Table

CREATE TABLE IF NOT EXISTS order_details (
    detail_id INTEGER PRIMARY KEY AUTOINCREMENT,
    order_id INTEGER,
    item_id INTEGER,
    quantity INTEGER NOT NULL,
    subtotal REAL NOT NULL,

    FOREIGN KEY (order_id) REFERENCES orders(order_id),
    FOREIGN KEY (item_id) REFERENCES menu_items(item_id)
);

-- =================================
-- INSERT SAMPLE FOOD ITEMS
-- =================================

INSERT INTO menu_items (item_name, price)
VALUES
('Veg Sandwich', 30),
('Masala Dosa', 40),
('Idli', 25),
('Fried Rice', 50),
('Tea', 10),
('Coffee', 15),
('Veg Burger', 45),
('Lemon Rice', 35);

-- =================================
-- VIEW FOOD MENU
-- =================================

SELECT * FROM menu_items;
