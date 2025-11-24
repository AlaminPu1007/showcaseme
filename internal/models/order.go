package models

type CreateOrderRequest struct {
	UserID     int32   `json:"user_id" binding:"required,min=1"`
	TotalPrice float64 `json:"total_price" binding:"required,min=0"`
}

type UpdateOrderStatusRequest struct {
	Status string `json:"status" binding:"required"`
}

type ListOrderQuery struct {
	Size   int32 `form:"size" binding:"required,min=1,max=100"`
	PageNo int32 `form:"page_no" binding:"required,min=0"`
}
