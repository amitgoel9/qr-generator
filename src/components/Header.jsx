import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="title">
          Free QR Code Generator
        </h1>
        <p className="subtitle">
          Create beautiful QR codes instantly - No registration required
        </p>
        <div className="features">
          <span className="feature">✓ Instant Generation</span>
          <span className="feature">✓ Multiple Types</span>
          <span className="feature">✓ Custom Colors</span>
          <span className="feature">✓ High Quality</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
