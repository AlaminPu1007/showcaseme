
-- name: CreateProduct :one
INSERT INTO products (
    name, description, price, quantity, category_id
) VALUES (
    $1, $2, $3, $4, $5
) RETURNING *;

-- name: GetProductById :one
SELECT *
FROM products
WHERE id = $1
LIMIT 1;

-- name: ListProducts :many
SELECT *
FROM products
ORDER BY id
LIMIT $1 -- NUMBER OF ROWS TO RETURN
OFFSET $2 -- NUMBER OF ROWS TO SKIP
;

-- name: UpdateProduct :one
UPDATE products
SET 
    name = COALESCE($2, name),
    description = COALESCE($3, description),
    price = COALESCE($4, price),
    category_id = COALESCE($5, category_id),
    quantity = COALESCE($6, quantity)
WHERE 
    id = $1
RETURNING *;

-- name: CountListProducts :one
SELECT COUNT(*)
FROM products;

-- name: SearchProducts :many
SELECT *
FROM products
WHERE ($1 = '' OR name ILIKE '%' || $1 || '%')
  AND ($2 = 0 OR category_id = $2)
ORDER BY name
LIMIT $3 -- NUMBER OF ROWS TO RETURN
OFFSET $4 -- NUMBER OF ROWS TO SKIP
;

-- name: CountSearchProducts :one
SELECT COUNT(*)
FROM products
WHERE 
    ($1::text IS NULL OR name ILIKE '%' || $1 || '%')
AND ($2::int IS NULL OR category_id = $2);


-- name: RemoveProduct :one
DELETE FROM products
WHERE id = $1
RETURNING *;