package api

import (
	"fmt"

	db "github.com/alaminpu1007/inventory-system/db/sqlc"
	"github.com/alaminpu1007/inventory-system/token"
	"github.com/alaminpu1007/inventory-system/utils"
	"github.com/gin-gonic/gin"
)

// Serve http request for our banking service
type Server struct {
	config     utils.Config
	store      *db.Store
	tokenMaker token.Maker
	router     *gin.Engine
}

func NewServer(config utils.Config, store *db.Store) (*Server, error) {

	// create a token maker
	// if you want to use JWT token maker, just replace the method with: token.NewJWTMaker()

	tokenMaker, err := token.NewJWTMaker(config.TokenSymmetricKey)

	if err != nil {
		return nil, fmt.Errorf("can not create token maker: %w", err)
	}

	server := &Server{
		store:      store,
		tokenMaker: tokenMaker,
		config:     config, // we will get token maker related info
	}

	server.setupRouter()

	return server, nil
}

// ALL INITIALIZED ROUTER WILL BE GOES HERE
func (server *Server) setupRouter() {

	router := gin.Default()

	// public routes
	userRoutes := router.Group("/users")
	{
		// create a user
		userRoutes.POST("/register", server.createUser)

		// login user
		userRoutes.POST("/login", server.loginUser)
	}

	// Protected routes (requires auth)
	authRoutes := router.Group("/")
	authRoutes.Use(authMiddleware(server.tokenMaker))

	// CATEGORY ROUTES GOES HERE : CATEGORY ROUTES GROUP
	categoryRoutes := authRoutes.Group("/category", adminMiddleware())
	{
		// create category
		categoryRoutes.POST(`/create`, server.createCategory)

		// update category by id
		categoryRoutes.PATCH("/update/:id", server.updateCategoryById)

		// search category by name
		categoryRoutes.GET("/search", server.searchCategoryByName)

		// get list of category by {limit, offset}
		categoryRoutes.GET("/categories", server.listCategory)

		// get category by id
		categoryRoutes.GET("/:id", server.getCategoryById)

		// removed category by it's id
		categoryRoutes.DELETE("/:id", server.deleteCategoryById)
	}

	// PRODUCTS ROUTES GOES HERE : PRODUCT ROUTE GROUPS
	productsRoutes := authRoutes.Group("/product", adminMiddleware())
	{
		// create product
		productsRoutes.POST("/create", server.createProducts)

		// update product by id
		productsRoutes.PATCH("/update/:id", server.updateProductById)

		// get lists of products
		productsRoutes.GET("/products", server.listProducts)

		// search product by {name or category_id}
		productsRoutes.GET("/search", server.searchProducts)

		// get product by id
		productsRoutes.GET("/:id", server.getProductById)

		// remove item by id
		productsRoutes.DELETE("/:id", server.deleteProductById)
	}

	server.router = router
}

// START: runs the HTTP server on a specif address
func (server *Server) Start(address string) error {
	return server.router.Run(address)
}

// CREATE ERROR HANDLER TO SERVER ERROR JSON GLOBALLY
func errorResponse(err error) gin.H {
	return gin.H{"error": err.Error()}
}
