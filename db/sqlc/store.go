package db

import (
	"database/sql"
)

type Store struct {
	*Queries
	db *sql.DB
}

// return new Store object
func NewStore(db *sql.DB) *Store {
	return &Store{
		db:      db,
		Queries: New(db),
	}
}
