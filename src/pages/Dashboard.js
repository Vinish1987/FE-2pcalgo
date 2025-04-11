// src/pages/Dashboard.js
import React, { useState } from 'react';
import Header from '../components/Header';
import Chart from '../components/Chart';
import TrapZones from '../components/TrapZones';

const Dashboard = () => {
  const [lotSize, setLotSize] = useState(1);
  const [balance, setBalance] = useState(20000);

  const handleConnect = () => {
    alert("Connecting to Zerodha...");
  };

  return (
    <div style={{ background: 'black', minHeight: '100vh', color: 'white' }}>
      <Header 
        balance={balance}
        lotSize={lotSize}
        setLotSize={setLotSize}
        onConnect={handleConnect}
      />
      <Chart />
      <TrapZones />
    </div>
  );
};

export default Dashboard;

