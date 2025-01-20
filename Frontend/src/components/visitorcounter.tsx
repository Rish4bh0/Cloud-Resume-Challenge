"use client";
import { useState, useEffect } from "react";
import axios from "axios";

type VisitorResponse = {
  count: number; 
};

const VisitorCounter = () => {
  const [visitorCount, setVisitorCount] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  // Fetch visitor count from the API and increment it
  const fetchAndIncrementVisitorCount = async () => {
    try {
      setLoading(true);

      // Increment the visitor count by making a POST request
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}`);

      // Fetch the updated visitor count
      const response = await axios.get<VisitorResponse>(
        `${process.env.NEXT_PUBLIC_API_URL}`
      );
      setVisitorCount(response.data.count);
    } catch (error) {
      console.error("Error fetching and incrementing visitor count:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAndIncrementVisitorCount();
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Visitor Counter</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <p>Number of visitors: {visitorCount}</p>
        </>
      )}
    </div>
  );
};

export default VisitorCounter;
