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
      </div>
    </header>
  );
};

export default Header;
