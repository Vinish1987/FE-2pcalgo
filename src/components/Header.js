import React from 'react';

const Header = () => {
  return (
    <div style={{ padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div><strong>💹 2 PC Algo</strong></div>
      <div>Zerodha Balance: Rs 20,000</div>
      <div>
        Add Lot: <input type="number" style={{ width: '60px', marginRight: '10px' }} />
        <button>Connect Zerodha</button>
      </div>
    </div>
  );
};

export default Header;
