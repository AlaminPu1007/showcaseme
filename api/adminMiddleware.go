package api

import (
	"errors"
	"net/http"
	"strings"

	"github.com/alaminpu1007/inventory-system/token"
	"github.com/gin-gonic/gin"
)

func adminMiddleware() gin.HandlerFunc {
	return func(ctx *gin.Context) {
		payload := ctx.MustGet(authorizationPayloadKey).(*token.Payload)

		if strings.ToLower(payload.Role) != "admin" {
			err := errors.New("account doesn't belong to the authenticated user")
			ctx.JSON(http.StatusForbidden, errorResponse(err))
			ctx.Abort()
			return
		}

		ctx.Next()
	}
}
