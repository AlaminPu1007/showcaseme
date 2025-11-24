package models

type GetByIdParams struct {
	ID int32 `uri:"id" binding:"required,min=1"`
}
