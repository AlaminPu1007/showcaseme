
-- Add new column on existing table:"order_items"
ALTER TABLE order_items
ADD COLUMN status VARCHAR(20) NOT NULL DEFAULT 'active';