import React from 'react';
import { Typography } from 'antd';
import './App.css';

const { Title } = Typography;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="photo-section">
          <img src="KEHOE B&W FINAL 041624.png" alt="Mike Kehoe" />
        </div>
        <div className="slide-in-text">
          <Title level={3}>Missouri Lieutenant Governor Mike Kehoe's payments to Axiom Strategies are concerning.</Title>
        </div>
        <div className="payment-boxes">
          <div className="payment-box">
            <img src="payment1.jpg" alt="Payment 1" />
            <p>Payment 1 Description</p>
          </div>
          <div className="payment-box">
            <img src="payment2.jpg" alt="Payment 2" />
            <p>Payment 2 Description</p>
          </div>
          <div className="payment-box">
            <img src="payment3.jpg" alt="Payment 3" />
            <p>Payment 3 Description</p>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
