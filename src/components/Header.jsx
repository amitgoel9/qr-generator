import React from 'react';

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="header-content">
          <h1 className="title">
            Free QR Code Generator - Create QR Codes Online
          </h1>
          <p className="subtitle">
            Generate QR codes instantly for URLs, WiFi, text, and contacts. Best free QR code generator with instant download. No registration required.
          </p>
          <div className="features">
            <span className="feature">✓ Free QR Code Maker</span>
            <span className="feature">✓ URL & WiFi QR Codes</span>
            <span className="feature">✓ Custom Colors & Sizes</span>
            <span className="feature">✓ Instant PNG Download</span>
          </div>
        </div>
      </header>
      
      {/* SEO Content Section */}
      <section className="seo-content" style={{maxWidth: '1200px', margin: '2rem auto', padding: '0 1rem'}}>
        <div style={{backgroundColor: '#f8fafc', padding: '2rem', borderRadius: '12px', marginBottom: '2rem'}}>
          <h2 style={{fontSize: '1.5rem', fontWeight: '600', color: '#1e293b', marginBottom: '1rem'}}>
            Why Use Our QR Code Generator?
          </h2>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem'}}>
            <div>
              <h3 style={{fontSize: '1.1rem', fontWeight: '600', color: '#334155', marginBottom: '0.5rem'}}>
                🚀 Fastest QR Code Generator
              </h3>
              <p style={{color: '#64748b', fontSize: '0.9rem', lineHeight: '1.5'}}>
                Create QR codes in under 2 seconds. Our online QR code generator is optimized for speed and works on all devices - desktop, mobile, and tablet.
              </p>
            </div>
            <div>
              <h3 style={{fontSize: '1.1rem', fontWeight: '600', color: '#334155', marginBottom: '0.5rem'}}>
                🎨 Customizable QR Codes
              </h3>
              <p style={{color: '#64748b', fontSize: '0.9rem', lineHeight: '1.5'}}>
                Personalize your QR codes with custom colors and sizes. Perfect for business cards, flyers, posters, and marketing materials.
              </p>
            </div>
            <div>
              <h3 style={{fontSize: '1.1rem', fontWeight: '600', color: '#334155', marginBottom: '0.5rem'}}>
                🔒 Privacy & Security First
              </h3>
              <p style={{color: '#64748b', fontSize: '0.9rem', lineHeight: '1.5'}}>
                All QR codes are generated locally in your browser. No data is sent to our servers. Your information stays completely private and secure.
              </p>
            </div>
          </div>
        </div>
        
        <div style={{backgroundColor: '#fff', padding: '2rem', borderRadius: '12px', border: '1px solid #e2e8f0'}}>
          <h2 style={{fontSize: '1.5rem', fontWeight: '600', color: '#1e293b', marginBottom: '1rem'}}>
            Popular QR Code Types We Support
          </h2>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.2rem'}}>
            <div>
              <h4 style={{fontSize: '1rem', fontWeight: '600', color: '#475569', marginBottom: '0.3rem'}}>
                📱 URL QR Codes
              </h4>
              <p style={{color: '#64748b', fontSize: '0.85rem'}}>
                Convert any website link into a QR code. Perfect for sharing websites, landing pages, and online content.
              </p>
            </div>
            <div>
              <h4 style={{fontSize: '1rem', fontWeight: '600', color: '#475569', marginBottom: '0.3rem'}}>
                📶 WiFi QR Codes
              </h4>
              <p style={{color: '#64748b', fontSize: '0.85rem'}}>
                Generate WiFi QR codes for easy network sharing. Great for cafes, restaurants, and guest networks.
              </p>
            </div>
            <div>
              <h4 style={{fontSize: '1rem', fontWeight: '600', color: '#475569', marginBottom: '0.3rem'}}>
                👤 Contact vCard QR
              </h4>
              <p style={{color: '#64748b', fontSize: '0.85rem'}}>
                Share contact information instantly. Add name, phone, email, and address to business cards.
              </p>
            </div>
            <div>
              <h4 style={{fontSize: '1rem', fontWeight: '600', color: '#475569', marginBottom: '0.3rem'}}>
                💬 Text QR Codes
              </h4>
              <p style={{color: '#64748b', fontSize: '0.85rem'}}>
                Encode any text, messages, or instructions. Perfect for event details and product information.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
