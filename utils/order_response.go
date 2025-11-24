package utils

import db "github.com/alaminpu1007/inventory-system/db/sqlc"

type OrderResponse struct {
	ID          int32  `json:"id"`
	UserID      int32  `json:"user_id"`
	TotalAmount string `json:"total_amount"`
	Status      string `json:"status"`
	CreatedAt   string `json:"created_at"`
}

func ToOrderResponse(o db.Order) OrderResponse {
	return OrderResponse{
		ID:          o.ID,
		UserID:      o.UserID,
		TotalAmount: o.TotalAmount,
		Status:      o.Status,
		// CreatedAt:   o.CreatedAt.Format("2006-01-02 15:04:05"),
	}
}
