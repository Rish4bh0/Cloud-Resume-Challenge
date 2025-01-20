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
	if pageID == "" {
		return events.APIGatewayProxyResponse{
			StatusCode: http.StatusBadRequest,
			Body:       "Missing 'pageId' query parameter",
		}, nil
	}

	tableName := os.Getenv("DYNAMODB_TABLE")

	// Retrieve visitor count
	visitorCount, err := utils.GetVisitorCount(tableName, pageID)
	if err != nil {
		return events.APIGatewayProxyResponse{
			StatusCode: http.StatusInternalServerError,
			Body:       fmt.Sprintf("Error retrieving visitor count: %v", err),
		}, nil
	}

	// Increment the visitor count
	visitorCount.VisitorCount++
	err = utils.UpdateVisitorCount(tableName, visitorCount)
	if err != nil {
		return events.APIGatewayProxyResponse{
			StatusCode: http.StatusInternalServerError,
			Body:       fmt.Sprintf("Error updating visitor count: %v", err),
		}, nil
	}

	// Respond with the updated count
	respJSON, _ := json.Marshal(visitorCount)
	return events.APIGatewayProxyResponse{
		StatusCode: http.StatusOK,
		Body:       string(respJSON),
		Headers:    map[string]string{"Content-Type": "application/json"},
	}, nil
}
