package handlers

import (
	"cloudresume/aws-lambda/pkg/utils"
	"context"
	"encoding/json"
	"fmt"
	"net/http"
	"os"

	"github.com/aws/aws-lambda-go/events"
)

func VisitorHandler(ctx context.Context, req events.APIGatewayProxyRequest) (events.APIGatewayProxyResponse, error) {
	pageID := req.QueryStringParameters["pageId"]
	fmt.Printf("Page ID: %s\n", pageID)
	if pageID == "" {
		return events.APIGatewayProxyResponse{
			StatusCode: http.StatusBadRequest,
			Body:       "Missing 'pageId' query parameter",
			Headers: map[string]string{
				"Access-Control-Allow-Origin": "*", // Allow requests from any origin, adjust to your needs
			},
		}, nil
	}

	tableName := os.Getenv("DYNAMODB_TABLE")

	// Retrieve visitor count
	visitorCount, err := utils.GetVisitorCount(tableName, pageID)
	if err != nil {
		return events.APIGatewayProxyResponse{
			StatusCode: http.StatusInternalServerError,
			Body:       fmt.Sprintf("Error retrieving visitor count: %v", err),
			Headers: map[string]string{
				"Access-Control-Allow-Origin": "*", // Allow requests from any origin, adjust to your needs
			},
		}, nil
	}

	// Increment the visitor count
	visitorCount.VisitorCount++
	err = utils.UpdateVisitorCount(tableName, visitorCount)
	if err != nil {
		return events.APIGatewayProxyResponse{
			StatusCode: http.StatusInternalServerError,
			Body:       fmt.Sprintf("Error updating visitor count: %v", err),
			Headers: map[string]string{
				"Access-Control-Allow-Origin": "*", // Allow requests from any origin, adjust to your needs
			},
		}, nil
	}

	// Respond with the updated count
	respJSON, _ := json.Marshal(visitorCount)
	return events.APIGatewayProxyResponse{
		StatusCode: http.StatusOK,
		Body:       string(respJSON),
		Headers: map[string]string{
			"Content-Type":                 "application/json",
			"Access-Control-Allow-Origin":  "*",                           // Allow requests from any origin, adjust to your needs
			"Access-Control-Allow-Methods": "GET, POST, OPTIONS",          // Allow GET, POST, and OPTIONS methods
			"Access-Control-Allow-Headers": "Content-Type, Authorization", // Allow headers you need
		},
	}, nil
}
