import React, { useEffect, useState } from 'react';
import { Typography } from 'antd';
import './App.css';
import kehoe from './images/Kehoe Mcconnell Roe B&W.png';

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
        {isImageLoaded && <div className="blur-background"></div>}
        <div className="photo-section">
          <img src={kehoe} alt="Mike Kehoe" className="photo" style={{ width: 700 }} onLoad={() => setIsImageLoaded(true)} />
        </div>
        <div className="slide-in-text">
          <Title level={3} style={{ fontFamily: 'Roboto', color: '#333', textAlign: 'center', marginTop: '20px', fontSize: '28px', fontWeight: 'bold', textTransform: 'uppercase' }}>
            Missouri Lieutenant Governor Mike Kehoe's payments to Axiom Strategies are concerning.
          </Title>
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