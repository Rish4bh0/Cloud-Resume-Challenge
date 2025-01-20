package utils

import (
	"cloudresume/aws-lambda/pkg/models"
	"fmt"
	"strconv"

	"github.com/aws/aws-sdk-go/aws"
	"github.com/aws/aws-sdk-go/aws/session"
	"github.com/aws/aws-sdk-go/service/dynamodb"
	"github.com/aws/aws-sdk-go/service/dynamodb/dynamodbattribute"
)

// GetVisitorCount retrieves the visitor count for a given PageID
func GetVisitorCount(tableName, pageID string) (models.VisitorCount, error) {
	dynamoClient := getDynamoClient()
	result, err := dynamoClient.GetItem(&dynamodb.GetItemInput{
		TableName: aws.String(tableName),
		Key: map[string]*dynamodb.AttributeValue{
			"PageID": {S: aws.String(pageID)},
		},
	})
	if err != nil {
		return models.VisitorCount{}, fmt.Errorf("failed to get item: %v", err)
	}

	if result.Item == nil {
		return models.VisitorCount{PageID: pageID, VisitorCount: 0}, nil
	}

	var visitorCount models.VisitorCount
	err = dynamodbattribute.UnmarshalMap(result.Item, &visitorCount)
	if err != nil {
		return models.VisitorCount{}, fmt.Errorf("failed to unmarshal result: %v", err)
	}

	return visitorCount, nil
}

// UpdateVisitorCount updates the visitor count for a given PageID
func UpdateVisitorCount(tableName string, visitorCount models.VisitorCount) error {
	dynamoClient := getDynamoClient()
	_, err := dynamoClient.PutItem(&dynamodb.PutItemInput{
		TableName: aws.String(tableName),
		Item: map[string]*dynamodb.AttributeValue{
			"PageID":       {S: aws.String(visitorCount.PageID)},
			"VisitorCount": {N: aws.String(strconv.Itoa(visitorCount.VisitorCount))},
		},
	})
	if err != nil {
		return fmt.Errorf("failed to update item: %v", err)
	}
	return nil
}

// Helper function to initialize DynamoDB client
func getDynamoClient() *dynamodb.DynamoDB {
	return dynamodb.New(session.Must(session.NewSession()))
}
