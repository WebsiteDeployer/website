import React from 'react';
import { Typography } from 'antd';
import './App.css';
import kehoe from './images/Kehoe Mcconnell Roe B&W.png';
import dcswamp from './images/DC Swamp.png'
import pymt1 from './images/AX Media 013024.png'
import pymt2 from './images/AX Media 021224.png'
import pymt3 from './images/AX Media 022124.png'
import pymt4 from './images/AX Media 031124.png'
import retainer1 from './images/AXiom Payment 031224.png'
import retainer2 from './images/AXiom Payment 032023.png'

const { Title } = Typography;

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div className="background-image" style={{ backgroundImage: `url(${dcswamp})`, backgroundSize: 'cover', backgroundPosition: 'center', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}></div>
        <div className="photo-section">
          <img src={kehoe} alt="Mike Kehoe" className="photo" style={{ width: 600 }} />
        </div>
        <div className="slide-in-text">
          <Title level={3} style={{ fontFamily: 'Roboto', color: '#333', textAlign: 'center', marginTop: '20px', fontSize: '28px', fontWeight: 'bold', textTransform: 'uppercase' }}>
            Missouri Lieutenant Governor Mike Kehoe's $530,000 of payments to Axiom Strategies are concerning...
          </Title>
        </div>
        <div className="payment-boxes">
          <div className="payment-box">
            <img src={pymt1} alt="Payment 1" />
          </div>
          <div className="payment-box">
            <img src={pymt2} alt="Payment 2" />
          </div>
          <div className="payment-box">
            <img src={pymt3} alt="Payment 3" />
          </div>
          <div className="payment-box">
            <img src={pymt4} alt="Payment 4" />
          </div>
        </div>
        <div className="slide-in-text">
          <Title level={3} style={{ fontFamily: 'Roboto', color: '#333', textAlign: 'center', marginTop: '20px', fontSize: '28px', fontWeight: 'bold', textTransform: 'uppercase' }}>
            ... with Campaign Retainer Payments dating back to March 20th, 2023
          </Title>
        </div>
        <div className="payment-boxes">
          <div className="payment-box">
            <img src={retainer1} alt="Payment 1" />
          </div>
          <div className="payment-box">
            <img src={retainer2} alt="Payment 2" />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;