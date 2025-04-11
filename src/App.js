import React from 'react';
import Header from './components/Header';
import ChartSection from './components/ChartSection';
import AlgoZone from './components/AlgoZone';

const App = () => {
  return (
    <div style={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      <Header />
      <ChartSection />
      <AlgoZone />
    </div>
  );
};

export default App;
