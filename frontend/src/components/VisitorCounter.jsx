import React, { useState, useEffect } from "react";

const VisitorCounter = () => {
  const [visitorCount, setVisitorCount] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVisitorCount = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_BASE_URL}/visitor-count`
        );
        const data = await response.json();
        setVisitorCount(data.uniqueVisitors);
      } catch (error) {
        console.error("Error fetching visitor count:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchVisitorCount();
  }, []);

  if (loading) {
    return (
      <div className="fixed bottom-4 right-4 bg-black/80 text-white px-3 py-2 rounded-lg text-sm z-50">
        Loading...
      </div>
    );
  }

  return (
    <div className="w-full p-6 md:p-8 lg:p-10 text-center">
      <div className="text-gray-400 text-sm">
        Unique visitors: {visitorCount || 0}
      </div>
    </div>
  );
};

export default VisitorCounter;
