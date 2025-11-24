package api

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

type APIResponse struct {
	Status     string      `json:"status"`
	StatusCode int         `json:"status_code"`
	Message    string      `json:"message"`
	Data       interface{} `json:"data,omitempty"`
}

func NewResponse(ctx *gin.Context, statusCode int, message string, data interface{}) {
	status := "success"
	if statusCode >= http.StatusBadRequest {
		status = "error"
	}

	ctx.JSON(statusCode, APIResponse{
		Status:     status,
		StatusCode: statusCode,
		Message:    message,
		Data:       data,
	})
}
