package main

import (
	"cloudresume/aws-lambda/pkg/handlers"

	"github.com/aws/aws-lambda-go/lambda"
)

func main() {
	// Entry point for the API
	lambda.Start(handlers.VisitorHandler)
}
