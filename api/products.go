package api

import (
	"database/sql"
	"errors"
	"math"
	"net/http"

	db "github.com/alaminpu1007/inventory-system/db/sqlc"
	"github.com/alaminpu1007/inventory-system/internal/models"
	"github.com/alaminpu1007/inventory-system/utils"
	"github.com/gin-gonic/gin"
)

/* CREATE PRODUCTS */
type createProductsParams struct {
	Name        string  `json:"name" binding:"required,min=1,max=50"`
	Description *string `json:"description,omitempty"`
	Price       string  `json:"price" binding:"required,min=1,max=9223372036854775807"`
	Quantity    int32   `json:"quantity" binding:"required,max=5000"`
	CategoryID  int32   `json:"category_id" binding:"required"`
}

func (server *Server) createProducts(ctx *gin.Context) {
	var req createProductsParams

	if err := ctx.ShouldBindJSON(&req); err != nil {
		NewResponse(ctx, http.StatusBadRequest, err.Error(), nil)
		return
	}

	// check description validity
	var dbDescription sql.NullString

	if req.Description != nil {
		dbDescription = sql.NullString{
			String: *req.Description,
			Valid:  true,
		}
	} else {
		dbDescription = sql.NullString{
			Valid: false,
		}
	}

	_, err := server.store.GetCategory(ctx, req.CategoryID)

	if err != nil {
		if err == sql.ErrNoRows {
			value := errors.New("Invalid category")
			NewResponse(ctx, http.StatusNotFound, value.Error(), nil)
			return
		}
		NewResponse(ctx, http.StatusInternalServerError, err.Error(), nil)
		return
	}

	arg := db.CreateProductParams{
		Name:        req.Name,
		Description: dbDescription,
		Price:       req.Price,
		Quantity:    req.Quantity,
		CategoryID:  req.CategoryID,
	}

	product, err := server.store.CreateProduct(ctx, arg)

	if err != nil {
		NewResponse(ctx, http.StatusInternalServerError, err.Error(), nil)
		return
	}

	NewResponse(ctx, http.StatusOK, "Product created successfully", utils.ToProductResponse(product))
}

/* UPDATE PRODUCTS */
type updateProductURI struct {
	ID int32 `uri:"id" binding:"required,min=1"`
}

type updateProductParams struct {
	Name        string  `json:"name" binding:"required,min=1,max=50"`
	Description *string `json:"description,omitempty"`
	Price       string  `json:"price" binding:"required,min=1,max=9223372036854775807"`
	Quantity    int32   `json:"quantity" binding:"required,max=5000"`
	CategoryID  int32   `json:"category_id" binding:"required"`
}

func (server *Server) updateProductById(ctx *gin.Context) {
	var req updateProductParams
	var ID updateProductURI

	if err := ctx.ShouldBindUri(&ID); err != nil {
		NewResponse(ctx, http.StatusBadRequest, err.Error(), nil)
		return
	}

	if err := ctx.ShouldBindJSON(&req); err != nil {
		NewResponse(ctx, http.StatusBadRequest, err.Error(), nil)
		return
	}

	_, err := server.store.GetCategory(ctx, req.CategoryID)

	if err != nil {
		if err == sql.ErrNoRows {
			ctx.JSON(http.StatusNotFound, errorResponse(err))
			NewResponse(ctx, http.StatusNotFound, err.Error(), nil)
			return
		}
		NewResponse(ctx, http.StatusInternalServerError, err.Error(), nil)
		return
	}

	_, err = server.store.GetProductById(ctx, ID.ID)

	if err != nil {
		if err == sql.ErrNoRows {
			NewResponse(ctx, http.StatusNotFound, err.Error(), nil)
			return
		}
		NewResponse(ctx, http.StatusInternalServerError, err.Error(), nil)
		return
	}

	// check description validity
	var dbDescription sql.NullString

	if req.Description != nil {
		dbDescription = sql.NullString{
			String: *req.Description,
			Valid:  true,
		}
	} else {
		dbDescription = sql.NullString{
			Valid: false,
		}
	}

	arg := db.UpdateProductParams{
		ID:          ID.ID,
		Name:        req.Name,
		Description: dbDescription,
		CategoryID:  req.CategoryID,
		Price:       req.Price,
		Quantity:    req.Quantity,
	}

	product, err := server.store.UpdateProduct(ctx, arg)

	if err != nil {
		NewResponse(ctx, http.StatusInternalServerError, err.Error(), nil)
		return
	}

	NewResponse(ctx, http.StatusOK, "Updated successfully", utils.ToProductResponse(product))
}

/* LIST OF PRODUCTS */
func (server *Server) listProducts(ctx *gin.Context) {
	var req models.PaginationQuery

	if err := ctx.ShouldBindQuery(&req); err != nil {
		NewResponse(ctx, http.StatusBadRequest, err.Error(), nil)
		return
	}

	arg := db.ListProductsParams{
		Limit:  req.Size,
		Offset: (req.PageNo - 1) * req.Size,
	}

	products, err := server.store.ListProducts(ctx, arg)

	if err != nil {
		NewResponse(ctx, http.StatusInternalServerError, err.Error(), nil)
		return
	}

	// get total products page
	totalCount, err := server.store.CountListProducts(ctx)

	if err != nil {
		NewResponse(ctx, http.StatusInternalServerError, err.Error(), nil)
		return
	}

	totalPages := int32(math.Ceil(float64(totalCount) / float64(req.Size)))

	// override description
	var resp []utils.ProductResponse

	for _, p := range products {
		resp = append(resp, utils.ToProductResponse(p))
	}

	data := map[string]interface{}{
		"products":   resp,
		"limit":      req.Size,
		"page":       req.PageNo,
		"totalCount": totalCount,
		"totalPages": totalPages,
	}

	NewResponse(ctx, http.StatusOK, "Data found", data)
}

/* SEARCH PRODUCT BY NAME OR CATEGORY_ID */
type searchProductQuery struct {
	Name       string `form:"name"`
	CategoryID int32  `form:"category_id"`
	Size       int32  `form:"size" binding:"required,min=1,max=100"` // page_size
	PageNo     int32  `form:"page_no" binding:"required,min=0"`      // page number, 0-based
}

func (server *Server) searchProducts(ctx *gin.Context) {
	var req searchProductQuery

	if err := ctx.ShouldBindQuery(&req); err != nil {
		NewResponse(ctx, http.StatusBadRequest, err.Error(), nil)
		return
	}

	arg := db.SearchProductsParams{
		Column1: req.Name,
		Column2: req.CategoryID,
		Limit:   req.Size,
		Offset:  (req.PageNo - 1) * req.Size,
	}

	products, err := server.store.SearchProducts(ctx, arg)

	if err != nil {
		NewResponse(ctx, http.StatusInternalServerError, err.Error(), nil)
		return
	}

	countArg := db.CountSearchProductsParams{
		Column1: req.Name,
		Column2: req.CategoryID,
	}

	totalCount, err := server.store.CountSearchProducts(ctx, countArg)
	totalPages := int32(math.Ceil(float64(totalCount) / float64(req.Size)))

	if err != nil {
		NewResponse(ctx, http.StatusInternalServerError, err.Error(), nil)
		return
	}

	// override description
	var resp []utils.ProductResponse

	for _, p := range products {
		resp = append(resp, utils.ToProductResponse(p))
	}

	if resp == nil {
		resp = []utils.ProductResponse{}
	}

	var message string

	if len(resp) == 0 {
		message = "No products found"
	} else {
		message = "Products found"
	}

	data := map[string]interface{}{
		"categories": resp,
		"limit":      req.Size,
		"page":       req.PageNo,
		"totalCount": totalCount,
		"totalPages": int32(totalPages),
	}

	// Send custom response
	NewResponse(ctx, http.StatusOK, message, data)
}

/* GET PRODUCT BY ID */
func (server *Server) getProductById(ctx *gin.Context) {
	var req models.GetByIdParams

	if err := ctx.ShouldBindUri(&req); err != nil {
		NewResponse(ctx, http.StatusBadRequest, err.Error(), nil)
		return
	}

	product, err := server.store.GetProductById(ctx, req.ID)

	if err != nil {

		if err == sql.ErrNoRows {
			NewResponse(ctx, http.StatusNotFound, err.Error(), nil)
			return
		}

		NewResponse(ctx, http.StatusInternalServerError, err.Error(), nil)
		return
	}

	NewResponse(ctx, http.StatusOK, "Product is found", utils.ToProductResponse(product))
}

/* REMOVE / DELETE PRODUCT BY ID*/
func (server *Server) deleteProductById(ctx *gin.Context) {
	var req models.GetByIdParams

	if err := ctx.ShouldBindUri(&req); err != nil {
		NewResponse(ctx, http.StatusBadRequest, err.Error(), nil)
		return
	}

	// find item to check it's validity
	_, err := server.store.GetProductById(ctx, req.ID)

	if err != nil {

		if err == sql.ErrNoRows {
			NewResponse(ctx, http.StatusNotFound, err.Error(), nil)
			return
		}

		NewResponse(ctx, http.StatusInternalServerError, err.Error(), nil)
		return
	}

	product, err := server.store.RemoveProduct(ctx, req.ID)

	if err != nil {
		NewResponse(ctx, http.StatusBadRequest, err.Error(), nil)
		return
	}

	NewResponse(ctx, http.StatusOK, "Product removed successfully", utils.ToProductResponse(product))
}
