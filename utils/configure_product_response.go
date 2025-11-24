package utils

import db "github.com/alaminpu1007/inventory-system/db/sqlc"

type ProductResponse struct {
	ID          int32   `json:"id"`
	Name        string  `json:"name"`
	Description *string `json:"description,omitempty"`
	Price       string  `json:"price"`
	Quantity    int32   `json:"quantity"`
	CategoryID  int32   `json:"category_id"`
}

func ToProductResponse(p db.Product) ProductResponse {
	var desc *string
	if p.Description.Valid {
		desc = &p.Description.String
	}
	return ProductResponse{
		ID:          p.ID,
		Name:        p.Name,
		Description: desc,
		Price:       p.Price,
		Quantity:    p.Quantity,
		CategoryID:  p.CategoryID,
	}
}
