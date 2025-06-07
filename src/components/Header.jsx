import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="title">
          Free QR Code Generator
        </h1>
        <p className="subtitle">
          Create QR codes instantly for URLs, WiFi, text, and contacts. No registration required.
        </p>
        <div className="features">
          <span className="feature">✓ Free QR Code Maker</span>
          <span className="feature">✓ URL & WiFi QR Codes</span>
          <span className="feature">✓ Custom Colors & Sizes</span>
          <span className="feature">✓ Instant PNG Download</span>
        </div>
        
        {/* Top Banner Ad - High visibility */}
        <div className="ad-banner-top" style={{
          marginTop: '1rem',
          display: 'flex',
          justifyContent: 'center'
        }}>
          <div id="header-ad" style={{
            width: '728px',
            height: '90px',
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'rgba(255, 255, 255, 0.7)',
            fontSize: '0.8rem',
            border: '1px dashed rgba(255, 255, 255, 0.3)'
          }}>
            {/* Replace with actual ad code */}
            <span>Advertisement Space - 728x90</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
