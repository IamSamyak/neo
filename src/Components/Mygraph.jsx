import React, { useState } from 'react';
import Graph from 'react-graph-vis';
import './GraphComponent.css';

const GraphComponent = () => {
  const [graph, setGraph] = useState({
    nodes: [
      { id: 1, label: 'Project A', group: 1 },
      { id: 2, label: 'Project B', group: 1 },
      { id: 3, label: 'Task 1.1', group: 2 },
      { id: 4, label: 'Task 1.2', group: 2 },
      { id: 5, label: 'Task 2.1', group: 2 },
      { id: 6, label: 'Developer 1', group: 3 },
      { id: 7, label: 'Developer 2', group: 3 },
    ],
    edges: [
      { from: 1, to: 3 }, // Project A -> Task 1.1
      { from: 1, to: 4 }, // Project A -> Task 1.2
      { from: 2, to: 5 }, // Project B -> Task 2.1
      { from: 3, to: 6 }, // Task 1.1 -> Developer 1
      { from: 4, to: 7 }, // Task 1.2 -> Developer 2
      { from: 5, to: 6 }, // Task 2.1 -> Developer 1
    ],
  });

  const options = {
    nodes: {
      shape: 'dot',
      color: [
        { border: '#222222', background: '#cccccc' }, // Project (gray)
        { border: '#222222', background: '#99ccff' }, // Task (light blue)
        { border: '#222222', background: '#ff9999' }, // Developer (light red)
      ],
    },
    edges: {
      color: '#aaaaaa',
      arrows: 'to',
    },
  };

  return (
    <div style={{ height: '500px',  }}>
      <h1>Complex Graph</h1>
      <Graph graph={graph} options={options} />
    </div>
  );
};

export default GraphComponent;
