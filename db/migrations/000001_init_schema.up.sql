--  CREATE A USERS TABLE --
CREATE TABLE "users" (
  "id" SERIAL PRIMARY KEY,
  "username" varchar UNIQUE NOT NULL,
  "role" varchar NOT NULL DEFAULT 'admin',
  "password" varchar NOT NULL,
  "full_name" varchar NOT NULL,
  "email" varchar UNIQUE NOT NULL,
  "is_email_verified" bool NOT NULL DEFAULT false,
  "password_changed_at" timestamptz NOT NULL DEFAULT '0001-01-01',
  "created_at" timestamptz NOT NULL DEFAULT now()
);

-- CREATE ORDER TABLE WITH WHERE USER_ID IS FOREIGN KEY --
CREATE TABLE "orders" (
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    total_amount NUMERIC(10,2) NOT NULL CHECK (total_amount >= 0),
    status VARCHAR(50) NOT NULL DEFAULT 'pending', -- ('pending', 'confirmed', 'shipped', 'cancelled')
    created_at TIMESTAMP DEFAULT NOW()
);

ALTER TABLE "orders" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

CREATE INDEX "idx_orders_user_id" ON "orders" ("user_id");



-- CREATE CATEGORIES TABLE --
CREATE TABLE "categories" (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE
);

CREATE INDEX "idx_categories_name" ON "categories" ("name");



-- CREATE PRODUCT TABLE --
CREATE TABLE "products" (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    price NUMERIC(10,2) NOT NULL CHECK (price >= 0),
    quantity INT NOT NULL CHECK (quantity >= 0),
    category_id INT NOT NULL
);

-- Foreign key
ALTER TABLE "products"
ADD CONSTRAINT fk_products_category
FOREIGN KEY ("category_id") REFERENCES "categories"("id")
ON DELETE RESTRICT; -- CASCADE to also removed product that are connected with category, while try to removed specific category

-- Indexes
CREATE INDEX "idx_products_category_id" ON "products"("category_id");
CREATE INDEX "idx_products_name" ON "products"("name");




-- CREATE ORDER ITEMS TABLE --
CREATE TABLE "order_items" (
    id SERIAL PRIMARY KEY,
    order_id INT NOT NULL,
    product_id INT NOT NULL,
    quantity INT NOT NULL CHECK (quantity > 0),
    price NUMERIC(10,2) NOT NULL CHECK (price >= 0)
);

-- Foreign keys
ALTER TABLE "order_items"
ADD CONSTRAINT fk_order_items_order
FOREIGN KEY ("order_id") REFERENCES "orders" ("id")
ON DELETE CASCADE;

ALTER TABLE "order_items"
ADD CONSTRAINT fk_order_items_product
FOREIGN KEY ("product_id") REFERENCES "products" ("id")
ON DELETE RESTRICT;

-- Indexes
CREATE INDEX "idx_order_items_order_id" ON "order_items"("order_id");
CREATE INDEX "idx_order_items_product_id" ON "order_items"("product_id");