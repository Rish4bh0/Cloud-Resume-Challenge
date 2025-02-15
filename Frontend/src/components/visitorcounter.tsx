"use client";
import { useState, useEffect } from "react";
import axios from "axios";

type VisitorResponse = {
  visitorCount: number;
};

const VisitorCounter = () => {
  const [visitorCount, setVisitorCount] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  // Fetch visitor count and increment it with a GET request
  const fetchAndIncrementVisitorCount = async () => {
    try {
      setLoading(true);

      // Send the GET request which will both increment and return the updated visitor count
      const response = await axios.get<VisitorResponse>(
        `https://6l9qf0a8kj.execute-api.us-east-1.amazonaws.com/start?pageId=homepage`
      );
      

      
      setVisitorCount(response.data.visitorCount); // Update the state with the visitor count
     
    } catch (error) {
      console.error("Error fetching and incrementing visitor count:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAndIncrementVisitorCount(); // Call the function on component mount
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  return (
    <div style={{ textAlign: "center", marginTop: 'auto' }}>
   
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <p>Visitors: {visitorCount}</p>
        </>
      )}
    </div>
  );
};

export default VisitorCounter;
