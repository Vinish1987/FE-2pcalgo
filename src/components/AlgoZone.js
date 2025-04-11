import React from 'react';

const AlgoZone = () => {
  return (
    <div style={{ padding: '10px', margin: '10px' }}>
      <div style={{ height: '50px', backgroundColor: '#faa', borderRadius: '10px', marginBottom: '5px' }}>🔴 CE Trap Zone</div>
      <div style={{ height: '50px', backgroundColor: '#add8e6', borderRadius: '10px', marginBottom: '5px' }}>🔵 Neutral Zone</div>
      <div style={{ height: '50px', backgroundColor: '#90ee90', borderRadius: '10px' }}>🟢 PE Trap Zone</div>
    </div>
  );
};

export default AlgoZone;
