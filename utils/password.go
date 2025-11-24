package utils

import (
	"fmt"

	"golang.org/x/crypto/bcrypt"
)

// hashPassword return the bcrypt hash of the password
func HashedPassword(password string) (string, error) {
	hashPassword, err := bcrypt.GenerateFromPassword([]byte(password), bcrypt.DefaultCost) //  bcrypt.DefaultCost = 10

	if err != nil {
		return "", fmt.Errorf("failed to hash password %w", err)
	}

	return string(hashPassword), nil
}

// checks if the provided password is correct or not
func CheckPassword(password string, hashPassword string) error {
	return bcrypt.CompareHashAndPassword([]byte(hashPassword), []byte(password))
}
