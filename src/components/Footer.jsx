import React from 'react';

const Footer = () => {
  return (
    <footer style={{backgroundColor: '#f8fafc', marginTop: '4rem', padding: '3rem 1rem 2rem', borderTop: '1px solid #e2e8f0'}}>
      <div style={{maxWidth: '1200px', margin: '0 auto'}}>
        
        {/* Pre-content Ad Banner */}
        <div style={{textAlign: 'center', marginBottom: '2rem'}}>
          <div id="footer-banner-ad" style={{
            width: '100%',
            maxWidth: '728px',
            height: '90px',
            margin: '0 auto',
            background: '#f1f5f9',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#64748b',
            fontSize: '0.8rem',
            border: '1px dashed #cbd5e1'
          }}>
            {/* Replace with actual ad code */}
            <span>Advertisement - 728x90 Banner</span>
          </div>
        </div>

        {/* Main content with sidebar ad */}
        <div style={{display: 'grid', gridTemplateColumns: '1fr 300px', gap: '2rem', alignItems: 'start'}}>
          
          {/* Left: SEO Content */}
          <div>
            <div style={{marginBottom: '2rem'}}>
              <h2 style={{fontSize: '1.3rem', fontWeight: '600', color: '#1e293b', marginBottom: '1rem', textAlign: 'center'}}>
                Why Choose Our QR Code Generator?
              </h2>
              <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '2rem'}}>
                <div style={{textAlign: 'center'}}>
                  <h3 style={{fontSize: '1rem', fontWeight: '600', color: '#334155', marginBottom: '0.5rem'}}>
                    🚀 Fastest Generator
                  </h3>
                  <p style={{color: '#64748b', fontSize: '0.9rem', lineHeight: '1.4'}}>
                    Create QR codes in seconds. Works on all devices.
                  </p>
                </div>
                <div style={{textAlign: 'center'}}>
                  <h3 style={{fontSize: '1rem', fontWeight: '600', color: '#334155', marginBottom: '0.5rem'}}>
                    🎨 Fully Customizable
                  </h3>
                  <p style={{color: '#64748b', fontSize: '0.9rem', lineHeight: '1.4'}}>
                    Custom colors and sizes for your brand.
                  </p>
                </div>
                <div style={{textAlign: 'center'}}>
                  <h3 style={{fontSize: '1rem', fontWeight: '600', color: '#334155', marginBottom: '0.5rem'}}>
                    🔒 Privacy First
                  </h3>
                  <p style={{color: '#64748b', fontSize: '0.9rem', lineHeight: '1.4'}}>
                    Generated locally. No data sent to servers.
                  </p>
                </div>
              </div>
            </div>

            {/* QR Types */}
            <div style={{backgroundColor: '#fff', padding: '1.5rem', borderRadius: '8px', marginBottom: '2rem'}}>
              <h3 style={{fontSize: '1.1rem', fontWeight: '600', color: '#1e293b', marginBottom: '1rem', textAlign: 'center'}}>
                Supported QR Code Types
              </h3>
              <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', fontSize: '0.85rem', color: '#64748b'}}>
                <div>📱 <strong>URL QR Codes</strong> - Website links</div>
                <div>📶 <strong>WiFi QR Codes</strong> - Network sharing</div>
                <div>👤 <strong>Contact vCard</strong> - Business cards</div>
                <div>💬 <strong>Text QR Codes</strong> - Messages & info</div>
              </div>
            </div>
          </div>

          {/* Right: Sidebar Ads */}
          <div style={{display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>
            {/* Square Ad */}
            <div id="sidebar-ad-1" style={{
              width: '300px',
              height: '250px',
              background: '#f1f5f9',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#64748b',
              fontSize: '0.8rem',
              border: '1px dashed #cbd5e1',
              textAlign: 'center'
            }}>
              {/* Replace with actual ad code */}
              <span>Advertisement<br/>300x250</span>
            </div>

            {/* Vertical Ad */}
            <div id="sidebar-ad-2" style={{
              width: '300px',
              height: '600px',
              background: '#f1f5f9',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#64748b',
              fontSize: '0.8rem',
              border: '1px dashed #cbd5e1',
              textAlign: 'center'
            }}>
              {/* Replace with actual ad code */}
              <span>Advertisement<br/>300x600<br/>Sidebar</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div style={{textAlign: 'center', color: '#64748b', fontSize: '0.8rem', borderTop: '1px solid #e2e8f0', paddingTop: '1rem', marginTop: '2rem'}}>
          <p>© 2024 QR Handy Tools - Free QR Code Generator | No Registration Required</p>
          <p style={{marginTop: '0.5rem'}}>
            Generate QR codes for URLs, WiFi, text, and contacts instantly. Best free online QR code maker.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 