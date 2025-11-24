
-- 1️) Drop order_items first (depends on orders and products)
DROP INDEX IF EXISTS idx_order_items_order_id;
DROP INDEX IF EXISTS idx_order_items_product_id;
DROP TABLE IF EXISTS order_items;

-- 2) Drop orders table (depends on users)
DROP INDEX IF EXISTS idx_orders_user_id;
DROP TABLE IF EXISTS orders;

-- 3️) Drop products table (depends on categories)
DROP INDEX IF EXISTS idx_products_category_id;
DROP INDEX IF EXISTS idx_products_name;
DROP TABLE IF EXISTS products;

-- 4️) Drop categories table
DROP INDEX IF EXISTS idx_categories_name;
DROP TABLE IF EXISTS categories;

-- 5️) Drop users table
DROP TABLE IF EXISTS users;