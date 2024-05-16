import React, { useState } from 'react';
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
import amdreampacads from './images/American Dream PAC Ad Buy Numbers.png'
import jeffroebling from './images/jeff-roe-bling.png'

const payments = [
  { date: '1/30/2024', type: 'Media Buy', paid: '74,000.00', image: pymt1 },
  { date: '2/12/2024', type: 'Media Buy', paid: '72,750.00', image: pymt2 },
  { date: '2/21/2024', type: 'Media Buy', paid: '115,713.00', image: pymt3 },
  { date: '3/11/2024', type: 'Media Buy', paid: '161,875.00', image: pymt4 },
];

const retainerImages = [
  { src: retainer1 },
  { src: retainer2 },
  { src: retainer4 },
  { src: retainer5 },
  { src: retainer6 },
  { src: retainer7 },
  { src: retainer8 },
  { src: retainer9 },
  { src: retainer10 },
  { src: retainer11 },
  { src: retainer12 },
  { src: retainer13 },
  { src: retainer14 }
];

function PaymentTable() {
  const [visibleDisclosure, setVisibleDisclosure] = useState(null);

  const toggleDisclosure = (index) => {
    setVisibleDisclosure(visibleDisclosure === index ? null : index);
  };

  return (
    <div className="payment-info">
      <table className="payment-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Transaction</th>
            <th>Amount Paid</th>
          </tr>
        </thead>
        <tbody>
          {payments.map((payment, index) => (
            <tr key={index}>
              <td>{payment.date}</td>
              <td>{payment.type}</td>
              <td>
                ${payment.paid}
                <sup onClick={() => toggleDisclosure(index)} className="citation">
                  [{index + 1}]
                </sup>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {payments.map((payment, index) => (
        visibleDisclosure === index && (
          <div key={index} className="disclosure">
            <img src={payment.image} alt={`Disclosure ${index + 1}`} />
          </div>
        )
      ))}
      <div className="summary">
        All transactions are for AX Media, 800 W 47th St, Kansas City MO 64112
      </div>
    </div>
  );
}

function App() {
  const [visibleDisclosure, setVisibleDisclosure] = useState(null);

  const toggleDisclosure = (index) => {
    setVisibleDisclosure(visibleDisclosure === index ? null : index);
  };

  return (
    <div className="App">
      <header className="App-header">
      <div className="background-image" style={{ backgroundImage: `url(${dcswamp})` }}></div>
        <div className="photo-section">
          <img src={kehoe} alt="Mike Kehoe" className="photo" />
          <div className="overlay-text">
          <span className="fadeIn">
            MO Governor Candidate Mike Kehoe's<br />
            <span className="fadeIn">$530,000</span>
            <br />of payments to Anti-Trump Jeff Roe are concerning...
          </span>
          </div>
        </div>
        <br />
        <PaymentTable />
        <div className="slide-in-text">
          <div style={{ fontFamily: 'Roboto', color: '#333', textAlign: 'center', marginTop: '20px', fontSize: '28px', fontWeight: 'bold', textTransform: 'uppercase' }}>
            ...with 12 months of payments dating back to March 20th, 2023<br />
            {retainerImages.map((image, index) => (
              <sup key={index} onClick={() => toggleDisclosure(index)} className="citation">
                [{index + 1}]
              </sup>
            ))}
          </div>
        </div>
        <div className="payment-boxes">
          {retainerImages.map((image, index) => (
            <div key={index} className="payment-box" style={{ display: visibleDisclosure === index ? 'block' : 'none' }}>
              <img src={image.src} alt={image.alt} />
            </div>
          ))}
        </div>
        <img src={jeffroebling} style={{ maxWidth: '100%', height: 'auto' }} />

        {/*
        <div className="slide-in-text">
          <div style={{ fontFamily: 'Roboto', color: '#333', textAlign: 'center', marginTop: '20px', fontSize: '28px', fontWeight: 'bold', textTransform: 'uppercase' }}>
            That's not all - <br />Kehoe still owes Roe more than $700,000 and counting...<br /><br />
            <img src={amdreampacads} style={{ maxWidth: '100%', height: 'auto' }} />
            <br /><br />How much money is enough, Jeff?
          </div>
        </div>
        */}

      </header>
    </div>
  );
}

export default App;
