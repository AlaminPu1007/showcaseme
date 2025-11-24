package models

type PaginationQuery struct {
	Size   int32 `form:"size" binding:"required,min=1,max=100"` // page_size
	PageNo int32 `form:"page_no" binding:"required,min=0"`      // page number, 0-based
}
