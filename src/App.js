import React from 'react';
import { Typography } from 'antd';
import './App.css';
import kehoe from './images/KEHOE AND ROE - SWAMP 2.png';
import dcswamp from './images/DC Swamp.png'
import pymt1 from './images/AX Media 013024.png'
import pymt2 from './images/AX Media 021224.png'
import pymt3 from './images/AX Media 022124.png'
import pymt4 from './images/AX Media 031124.png'
import retainer1 from './images/AXiom Payment 032023.png';
import retainer2 from './images/AXiom Payment 040523.png';
import retainer4 from './images/AXiom Payment 053123.png';
import retainer5 from './images/AXiom Payment 060223.png';
import retainer6 from './images/AXiom Payment 070523.png';
import retainer7 from './images/AXiom Payment 080123.png';
import retainer8 from './images/AXiom Payment 091123.png';
import retainer9 from './images/AXiom Payment 100223.png';
import retainer10 from './images/AXiom Payment 110623.png';
import retainer11 from './images/AXiom Payment 122523.png';
import retainer12 from './images/AXiom Payment 010324.png';
import retainer13 from './images/AXiom Payment 020524.png';
import retainer14 from './images/AXiom Payment 031224.png';

const { Title } = Typography;

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div className="background-image" style={{ backgroundImage: `url(${dcswamp})` }}></div>
        <div className="photo-section">
          <img src={kehoe} alt="Mike Kehoe" className="photo" />
          <div className="overlay-text">
          <Title level={3} className="fadeIn">
            Missouri Lieutenant Governor Mike Kehoe's
            <Title level={2} className="fadeIn">$530,000</Title>
            of payments to Anti-Trump Jeff Roe are concerning...
          </Title>
          </div>
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
          <div className="payment-box">
            <img src={retainer4} alt="Payment 4" />
          </div>
          <div className="payment-box">
            <img src={retainer5} alt="Payment 5" />
          </div>
          <div className="payment-box">
            <img src={retainer6} alt="Payment 6" />
          </div>
          <div className="payment-box">
            <img src={retainer7} alt="Payment 7" />
          </div>
          <div className="payment-box">
            <img src={retainer8} alt="Payment 8" />
          </div>
          <div className="payment-box">
            <img src={retainer9} alt="Payment 9" />
          </div>
          <div className="payment-box">
            <img src={retainer10} alt="Payment 10" />
          </div>
          <div className="payment-box">
            <img src={retainer11} alt="Payment 11" />
          </div>
          <div className="payment-box">
            <img src={retainer12} alt="Payment 12" />
          </div>
          <div className="payment-box">
            <img src={retainer13} alt="Payment 13" />
          </div>
          <div className="payment-box">
            <img src={retainer14} alt="Payment 14" />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;