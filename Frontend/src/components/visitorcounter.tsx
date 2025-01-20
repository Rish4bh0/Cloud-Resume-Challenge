import { useState, useEffect } from "react";
import axios from "axios";

type VisitorResponse = {
  count: number; 
};


const VisitorCounter = () => {
  const [visitorCount, setVisitorCount] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  // Fetch visitor count from the API
  const fetchVisitorCount = async () => {
    try {
      setLoading(true);
      const response = await axios.get<VisitorResponse>(
        `${process.env.NEXT_PUBLIC_API_URL}`
      );
      setVisitorCount(response.data.count);
    } catch (error) {
      console.error("Error fetching visitor count:", error);
    } finally {
      setLoading(false);
    }
  };

  // Increment visitor count
  const incrementVisitorCount = async () => {
    try {
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}`);
      fetchVisitorCount(); // Refresh count after incrementing
    } catch (error) {
      console.error("Error incrementing visitor count:", error);
    }
  };

  useEffect(() => {
    fetchVisitorCount();
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Visitor Counter</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <p>Number of visitors: {visitorCount}</p>
          <button onClick={incrementVisitorCount} style={{ padding: "10px 20px", fontSize: "16px" }}>
            Increase Visitor Count
          </button>
        </>
      )}
    </div>
  );
};

export default VisitorCounter;
