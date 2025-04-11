// src/components/Header.js
import React from 'react';

const Header = ({ balance, lotSize, setLotSize, onConnect }) => {
  return (
    <div style={{
      backgroundColor: 'black',
      color: 'white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '1rem 2rem',
      fontFamily: 'sans-serif'
    }}>
      <div style={{ fontWeight: 'bold', color: '#00ff90' }}>💹 2 PC Algo</div>
      <div>Zerodha Balance: <strong>₹{balance}</strong></div>
      <div>
        Add Lot: 
        <input 
          type="number" 
          value={lotSize} 
          onChange={(e) => setLotSize(e.target.value)} 
          style={{
            margin: '0 1rem',
            padding: '0.3rem',
            width: '60px'
          }}
        />
        <button onClick={onConnect}>Connect Zerodha</button>
      </div>
    </div>
  );
};

export default Header;

