-- name: CreateCategory :one
INSERT INTO categories (name)
VALUES ($1)
RETURNING *;

-- name: GetCategory :one
SELECT *
FROM categories
WHERE id = $1
LIMIT 1;

-- name: PatchCategory :one
UPDATE categories
SET name = COALESCE($2, name)
WHERE id = $1
RETURNING *;

-- name: ListCategory :many
SELECT * FROM categories
ORDER BY id
LIMIT $1 -- NUMBER OF ROWS TO RETURN
OFFSET $2 -- NUMBER OF ROWS TO SKIP
;

-- name: CountListCategory :one
SELECT COUNT(*)
FROM categories;

-- name: SearchCategory :many
SELECT * FROM categories
WHERE name ILIKE '%' || $1::text || '%'
ORDER BY id
LIMIT $2 -- NUMBER OF ROWS TO RETURN
OFFSET $3 -- NUMBER OF ROWS TO SKIP
;

-- name: CountSearchCategories :one
SELECT COUNT(*) 
FROM categories
WHERE name ILIKE '%' || $1::text || '%';

-- name: RemoveCategory :one
DELETE FROM categories
WHERE id = $1
RETURNING *;