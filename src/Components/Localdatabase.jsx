import React, { useState, useEffect } from 'react';
import Graph from 'react-graph-vis';
import axios from 'axios'; // Assuming you're using Axios for API calls

const GraphComponent = () => {
  const [graph, setGraph] = useState({ nodes: [], edges: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/nodes'); // Replace with your actual server address and endpoint
        const data = response.data;

        // Process and format the fetched data for the graph component
        const nodes = data.map((item) => ({
          id: item.id,
          label: item.label,
          // ... other properties for nodes as needed
        }));
        const edges = [];
        // ... Define logic to create edges based on data
        // (Adapt this based on your specific relationships)

        setGraph({ nodes, edges });
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const options = {
    // ... same options definition from previous example
  };

  return (
    <div className="container">
      {/* Left side content (replace with your desired content) */}
      <div className="left-content">
        {/* Your content here */}
      </div>
      <div className="graph-container">
        <h1>Complex Graph</h1>
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error fetching data: {error.message}</p>
        ) : (
          <Graph graph={graph} options={options} style={{ width: '500px', height: '500px' }} />
        )}
      </div>
    </div>
  );
};

export default GraphComponent;
