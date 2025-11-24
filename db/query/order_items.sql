
-- name: CreateOrderItem :one
INSERT INTO order_items (
    order_id, product_id, quantity, price
    )
VALUES (
    $1, $2, $3, $4
    )
RETURNING *;

-- name: GetOrderItemsByOrderID :many
SELECT id, order_id, product_id, quantity, price, status
FROM order_items
WHERE order_id = $1
ORDER BY id;


-- name: UpdateOrderItemStatus :exec
UPDATE order_items
SET status = $2
WHERE id = $1;

-- name: DeleteOrderItem :exec
DELETE FROM order_items
WHERE id = $1;
