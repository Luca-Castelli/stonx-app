import React, { useState, useEffect } from 'react';

function StockPrice() {
  const [currentPrice, setCurrentPrice] = useState(0);

  useEffect(() => {
    fetch('/SPY').then(res => res.json()).then(data => {
      setCurrentPrice(data.price);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>The current price is {currentPrice}.</p>
      </header>
    </div>
  );
}

export default StockPrice;