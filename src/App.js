import React, { useEffect, useState } from 'react';
import { Typography } from 'antd';
import './App.css';
import kehoe from './images/Kehoe Mcconnell Roe B&W.png';
import dcswamp from './images/DC Swamp.png'
import pymt1 from './images/AX Media 013024.png'
import pymt2 from './images/AX Media 021224.png'
import pymt3 from './images/AX Media 022124.png'
import pymt4 from './images/AX Media 031124.png'

const { Title } = Typography;

function App() {
  const [photoWidth, setPhotoWidth] = useState(null);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = kehoe; // Use the rectangular image to calculate the width
    img.onload = () => {
      const aspectRatio = img.width / img.height;
      const calculatedWidth = 200 * aspectRatio; // Adjust the multiplier as needed
      setPhotoWidth(calculatedWidth);
    };
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div className="photo-section">
          <img src={kehoe} alt="Mike Kehoe" className="photo" style={{ width: 600 }} onLoad={() => setIsImageLoaded(true)} />
        </div>
        <div className="slide-in-text">
          <Title level={3} style={{ fontFamily: 'Roboto', color: '#333', textAlign: 'center', marginTop: '20px', fontSize: '28px', fontWeight: 'bold', textTransform: 'uppercase' }}>
            Missouri Lieutenant Governor Mike Kehoe's payments to Axiom Strategies are concerning.
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
      </header>
      
      <img src={dcswamp} alt="DC Swamp" onError={() => alert('Failed to load DC Swamp image')} style={{ display: 'none' }} />
    </div>
  );
}

export default App;