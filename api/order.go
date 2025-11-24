package api

import (
	"fmt"
	"net/http"

	db "github.com/alaminpu1007/inventory-system/db/sqlc"
	"github.com/alaminpu1007/inventory-system/internal/models"
	"github.com/gin-gonic/gin"
)

func (server *Server) createOrder(ctx *gin.Context) {
	var req models.CreateOrderRequest

	if err := ctx.ShouldBindJSON(&req); err != nil {
		NewResponse(ctx, http.StatusBadRequest, err.Error(), nil)
		return
	}

	arg := db.CreateOrderParams{
		UserID:      req.UserID,
		TotalAmount: fmt.Sprintf("%.2f", req.TotalPrice),
	}

	order, err := server.store.CreateOrder(ctx, arg)

	if err != nil {
		NewResponse(ctx, http.StatusInternalServerError, err.Error(), nil)
		return
	}

	NewResponse(ctx, http.StatusOK, "Order created successfully", order)
}
