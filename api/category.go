package api

import (
	"database/sql"
	"errors"
	"math"
	"net/http"

	db "github.com/alaminpu1007/inventory-system/db/sqlc"
	"github.com/alaminpu1007/inventory-system/internal/models"
	"github.com/gin-gonic/gin"
	"github.com/lib/pq"
)

/* CREATE NEW CATEGORY */
type createCategoryParams struct {
	Name string `json:"name"`
}

func (server *Server) createCategory(ctx *gin.Context) {
	var req createCategoryParams

	if err := ctx.ShouldBindJSON(&req); err != nil {
		NewResponse(ctx, http.StatusBadRequest, err.Error(), nil)
		return
	}

	category, err := server.store.CreateCategory(ctx, req.Name)

	if err != nil {
		if pqErr, ok := err.(*pq.Error); ok {
			switch pqErr.Code.Name() {
			case "unique_violation", "foreign_key_violation":
				NewResponse(ctx, http.StatusForbidden, err.Error(), nil)
				return
			}
		}

		NewResponse(ctx, http.StatusInternalServerError, err.Error(), nil)
		return
	}

	// send custom response to the user
	NewResponse(ctx, http.StatusOK, "Created successfully", category)
}

/* UPDATE CATEGORY BY NAME */
type updateCategoryParams struct {
	Id   int32  `uri:"id" binding:"required,min=1"`
	Name string `json:"name"`
}

func (server *Server) updateCategoryById(ctx *gin.Context) {
	var req updateCategoryParams

	// Bind URI
	if err := ctx.ShouldBindUri(&req); err != nil {
		NewResponse(ctx, http.StatusBadRequest, err.Error(), nil)
		return
	}

	if err := ctx.ShouldBindJSON(&req); err != nil {
		NewResponse(ctx, http.StatusBadRequest, err.Error(), nil)
		return
	}

	// get category
	category, err := server.store.GetCategory(ctx, req.Id)

	if err != nil {
		if err == sql.ErrNoRows {
			NewResponse(ctx, http.StatusNotFound, err.Error(), nil)
			return
		}
		NewResponse(ctx, http.StatusForbidden, err.Error(), nil)
	}

	arg := db.PatchCategoryParams{
		ID:   int32(req.Id),
		Name: req.Name,
	}

	category, err = server.store.PatchCategory(ctx, arg)

	if err != nil {
		if err == sql.ErrNoRows {
			value := errors.New("The name is already exists")
			NewResponse(ctx, http.StatusNotFound, value.Error(), nil)
			return
		}
		NewResponse(ctx, http.StatusForbidden, err.Error(), nil)
		return
	}

	// send custom response to the user
	NewResponse(ctx, http.StatusOK, "Updated successfully", category)
}

/* SEARCH CATEGORY BY ID */

type searchCategoryQuery struct {
	Name   string `form:"name" binding:"required"`
	Size   int32  `form:"size" binding:"required,min=1,max=100"` // page_size
	PageNo int32  `form:"page_no" binding:"required,min=0"`      // page number, 0-based
}

func (server *Server) searchCategoryByName(ctx *gin.Context) {
	var req searchCategoryQuery

	if err := ctx.ShouldBindQuery(&req); err != nil {
		NewResponse(ctx, http.StatusBadRequest, err.Error(), nil)
		return
	}

	arg := db.SearchCategoryParams{
		Column1: req.Name,
		Limit:   req.Size,
		Offset:  (req.PageNo - 1) * req.Size,
	}

	categories, err := server.store.SearchCategory(ctx, arg)

	if err != nil {
		NewResponse(ctx, http.StatusInternalServerError, err.Error(), nil)
		return
	}

	totalCount, err := server.store.CountSearchCategories(ctx, req.Name)
	totalPages := int32(math.Ceil(float64(totalCount) / float64(req.Size)))

	if err != nil {
		NewResponse(ctx, http.StatusInternalServerError, err.Error(), nil)
		return
	}

	if len(categories) == 0 {
		categories = make([]db.Category, 0)
	}

	var message string

	if len(categories) == 0 {
		message = "No category found"
	} else {
		message = "Categories found"
	}

	data := map[string]interface{}{
		"categories": categories,
		"limit":      req.Size,
		"page":       req.PageNo,
		"totalCount": totalCount,
		"totalPages": int32(totalPages),
	}

	// Send custom response
	NewResponse(ctx, http.StatusOK, message, data)
}

/* GET CATEGORY BY ID */
func (server *Server) getCategoryById(ctx *gin.Context) {
	var req models.GetByIdParams

	if err := ctx.ShouldBindUri(&req); err != nil {
		NewResponse(ctx, http.StatusBadRequest, err.Error(), nil)
		return
	}

	category, err := server.store.GetCategory(ctx, req.ID)

	if err != nil {

		if err == sql.ErrNoRows {
			NewResponse(ctx, http.StatusNotFound, err.Error(), nil)
			return
		}

		NewResponse(ctx, http.StatusInternalServerError, err.Error(), nil)
		return
	}

	NewResponse(ctx, http.StatusOK, "Data is found", category)
}

/* LIST CATEGORY */

func (server *Server) listCategory(ctx *gin.Context) {
	var req models.PaginationQuery

	if err := ctx.ShouldBindQuery(&req); err != nil {
		NewResponse(ctx, http.StatusBadRequest, err.Error(), nil)
		return
	}

	arg := db.ListCategoryParams{
		Limit:  req.Size,
		Offset: (req.PageNo - 1) * req.Size,
	}

	categories, err := server.store.ListCategory(ctx, arg)

	if err != nil {
		NewResponse(ctx, http.StatusInternalServerError, err.Error(), nil)
		return
	}

	totalCount, err := server.store.CountListCategory(ctx)

	if err != nil {
		NewResponse(ctx, http.StatusInternalServerError, err.Error(), nil)
		return
	}

	totalPages := int32(math.Ceil(float64(totalCount) / float64(req.Size)))

	data := map[string]interface{}{
		"categories": categories,
		"limit":      req.Size,
		"page":       req.PageNo,
		"totalCount": totalCount,
		"totalPages": totalPages,
	}

	NewResponse(ctx, http.StatusOK, "Data found", data)
}

/* REMOVED CATEGORY BY ID */
func (server *Server) deleteCategoryById(ctx *gin.Context) {
	var req models.GetByIdParams

	if err := ctx.ShouldBindUri(&req); err != nil {
		NewResponse(ctx, http.StatusBadRequest, err.Error(), nil)
		return
	}

	// find item to check it's validity
	_, err := server.store.GetCategory(ctx, req.ID)

	if err != nil {

		if err == sql.ErrNoRows {
			NewResponse(ctx, http.StatusNotFound, err.Error(), nil)
			return
		}

		NewResponse(ctx, http.StatusInternalServerError, err.Error(), nil)
		return
	}

	category, err := server.store.RemoveCategory(ctx, req.ID)

	if err != nil {
		NewResponse(ctx, http.StatusBadRequest, err.Error(), nil)
		return
	}

	NewResponse(ctx, http.StatusOK, "Data deleted successfully", category)
}
