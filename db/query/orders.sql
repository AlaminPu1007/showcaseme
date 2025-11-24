
-- name: CreateOrder :one
INSERT INTO orders (
    user_id, total_amount
) VALUES(
    $1, $2
) RETURNING id, user_id, total_amount, status, created_at;

-- name: GetOrderById :one
SELECT *
FROM orders
WHERE id = $1
LIMIT 1;

-- name: ListOrdersByUser :many
SELECT * FROM orders
WHERE user_id = $1
ORDER BY id DESC
LIMIT $2 -- NUMBER OF ROWS TO RETURN
OFFSET $3 -- NUMBER OF ROWS TO SKIP
;

-- name: CountOrdersByUser :one
SELECT COUNT(*) 
FROM orders 
WHERE user_id = $1;

-- name: UpdateOrderStatus :one
UPDATE orders
SET status = $2
WHERE id = $1
RETURNING *;