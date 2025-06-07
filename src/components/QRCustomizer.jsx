import React, { useState } from 'react';
import { Upload, X, Facebook, MessageCircle, CreditCard, Smartphone, Mail, Phone, MapPin, Wifi } from 'lucide-react';

const QRCustomizer = ({ settings, onSettingsChange, handleLogoUpload }) => {
  const [showPredefinedLogos, setShowPredefinedLogos] = useState(false);

  // Predefined logos with SVG data
  const predefinedLogos = [
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      color: '#25D366',
      svg: `<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="45" fill="#25D366"/>
        <path d="M50 15C31.775 15 17 29.775 17 48c0 6.3 1.775 12.2 4.85 17.2L17 85l20.25-5.65C42.2 82.125 45.95 83 50 83c18.225 0 33-14.775 33-33S68.225 15 50 15zm17.5 45.5c-.75 2.1-3.75 3.85-6.15 4.35-1.65.35-3.8.65-11.05-2.35-7.8-3.25-12.9-11.15-13.3-11.65-.4-.5-3.25-4.3-3.25-8.2s2.05-5.8 2.75-6.6c.7-.8 1.55-1 2.05-1s1 0 1.45.025c.45.025 1.05-.175 1.65 1.25.6 1.425 2.05 5 2.25 5.35.2.35.35.75.05 1.2-.3.45-.45.7-.85 1.1-.4.4-.85.9-.25 1.75.6.85 2.65 4.4 5.7 7.1 3.9 3.5 7.2 4.6 8.2 5.1 1 .5 1.6.425 2.2-.25.6-.675 2.55-2.975 3.25-4s1.4-.825 2.35-.5c.95.325 6.05 2.85 7.05 3.375 1 .525 1.675.8 1.925 1.225.25.425.25 2.475-.5 4.875z" fill="white"/>
      </svg>`
    },
    {
      name: 'Facebook',
      icon: Facebook,
      color: '#1877F2',
      svg: `<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="45" fill="#1877F2"/>
        <path d="M60.5 51.8H54V85H42V51.8H36V42h6V36.2c0-5 2.4-12.8 12.8-12.8H63v8.4h-6.4c-1 0-2.6.5-2.6 2.6V42h9L60.5 51.8z" fill="white"/>
      </svg>`
    },
    {
      name: 'Google Pay',
      icon: CreditCard,
      color: '#4285F4',
      svg: `<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <rect width="100" height="100" rx="20" fill="#4285F4"/>
        <text x="50" y="35" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="white" text-anchor="middle">Google</text>
        <text x="50" y="70" font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="white" text-anchor="middle">Pay</text>
      </svg>`
    },
    {
      name: 'PhonePe',
      icon: Smartphone,
      color: '#5F259F',
      svg: `<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <rect width="100" height="100" rx="20" fill="#5F259F"/>
        <text x="50" y="40" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="white" text-anchor="middle">Phone</text>
        <text x="50" y="65" font-family="Arial, sans-serif" font-size="14" font-weight="bold" fill="white" text-anchor="middle">Pe</text>
      </svg>`
    },
    {
      name: 'Email',
      icon: Mail,
      color: '#EA4335',
      svg: `<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="45" fill="#EA4335"/>
        <path d="M25 35h50v30H25z" fill="white"/>
        <path d="M25 35l25 18 25-18v-5L50 40 25 30v5z" fill="#EA4335"/>
      </svg>`
    },
    {
      name: 'Phone',
      icon: Phone,
      color: '#00C851',
      svg: `<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="45" fill="#00C851"/>
        <path d="M35 25h30c3 0 5 2 5 5v40c0 3-2 5-5 5H35c-3 0-5-2-5-5V30c0-3 2-5 5-5zm15 45c3 0 5-2 5-5s-2-5-5-5-5 2-5 5 2 5 5 5z" fill="white"/>
      </svg>`
    },
    {
      name: 'Location',
      icon: MapPin,
      color: '#FF5722',
      svg: `<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="45" fill="#FF5722"/>
        <path d="M50 25c-8.3 0-15 6.7-15 15 0 11.3 15 25 15 25s15-13.7 15-25c0-8.3-6.7-15-15-15zm0 20c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5z" fill="white"/>
      </svg>`
    },
    {
      name: 'WiFi',
      icon: Wifi,
      color: '#2196F3',
      svg: `<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="45" fill="#2196F3"/>
        <path d="M50 60c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zm-15-10c8.3 0 15 6.7 15 15h10c0-13.8-11.2-25-25-25s-25 11.2-25 25h10c0-8.3 6.7-15 15-15zm0-15c16.6 0 30 13.4 30 30h10c0-22.1-17.9-40-40-40s-40 17.9-40 40h10c0-16.6 13.4-30 30-30z" fill="white"/>
      </svg>`
    },
    {
      name: 'Instagram',
      icon: CreditCard,
      color: '#E4405F',
      svg: `<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="instagramGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#833AB4;stop-opacity:1" />
            <stop offset="50%" style="stop-color:#E4405F;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#F77737;stop-opacity:1" />
          </linearGradient>
        </defs>
        <rect width="100" height="100" rx="22" fill="url(#instagramGrad)"/>
        <rect x="25" y="25" width="50" height="50" rx="12" fill="none" stroke="white" stroke-width="4"/>
        <circle cx="50" cy="50" r="12" fill="none" stroke="white" stroke-width="4"/>
        <circle cx="67" cy="33" r="4" fill="white"/>
      </svg>`
    }
  ];

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && (file.type === 'image/png' || file.type === 'image/jpeg' || file.type === 'image/jpg')) {
      handleLogoUpload(file);
    } else if (file) {
      alert('Please upload PNG or JPG images only');
    }
  };

  const removeLogo = () => {
    handleLogoUpload(null);
  };

  const selectPredefinedLogo = (logo) => {
    // Convert SVG to data URL
    const svgBlob = new Blob([logo.svg], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(svgBlob);
    
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 200;
      canvas.height = 200;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, 200, 200);
      
      const dataURL = canvas.toDataURL('image/png');
      
      // Create a fake file object for consistency
      const fakeFile = new File([''], `${logo.name.toLowerCase()}-logo.png`, { type: 'image/png' });
      
      onSettingsChange('logo', dataURL);
      onSettingsChange('logoFile', fakeFile);
      
      URL.revokeObjectURL(url);
      setShowPredefinedLogos(false);
    };
    
    img.src = url;
  };

  return (
    <div className="customizer">
      <h3 className="section-title">Customize Design</h3>
      
      <div className="customizer-grid">
        <div className="form-group">
          <label className="form-label">Size</label>
          <select
            className="form-select"
            value={settings.size}
            onChange={(e) => onSettingsChange('size', parseInt(e.target.value))}
          >
            <option value="200">Small (200×200)</option>
            <option value="256">Medium (256×256)</option>
            <option value="512">Large (512×512)</option>
            <option value="1024">Extra Large (1024×1024)</option>
          </select>
        </div>

        <div className="form-group">
          <label className="form-label">Foreground Color</label>
          <div className="color-input-group">
            <input
              type="color"
              className="color-input"
              value={settings.fgColor}
              onChange={(e) => onSettingsChange('fgColor', e.target.value)}
            />
            <input
              type="text"
              className="color-text"
              value={settings.fgColor}
              onChange={(e) => onSettingsChange('fgColor', e.target.value)}
            />
          </div>
        </div>

        <div className="form-group">
          <label className="form-label">Background Color</label>
          <div className="color-input-group">
            <input
              type="color"
              className="color-input"
              value={settings.bgColor}
              onChange={(e) => onSettingsChange('bgColor', e.target.value)}
            />
            <input
              type="text"
              className="color-text"
              value={settings.bgColor}
              onChange={(e) => onSettingsChange('bgColor', e.target.value)}
            />
          </div>
        </div>

        <div className="form-group">
          <label className="form-label">Error Correction</label>
          <select
            className="form-select"
            value={settings.level}
            onChange={(e) => onSettingsChange('level', e.target.value)}
          >
            <option value="L">Low (~7%)</option>
            <option value="M">Medium (~15%)</option>
            <option value="Q">Quartile (~25%)</option>
            <option value="H">High (~30%)</option>
          </select>
        </div>
      </div>

      <div className="form-group">
        <label className="checkbox-label">
          <input
            type="checkbox"
            checked={settings.includeMargin}
            onChange={(e) => onSettingsChange('includeMargin', e.target.checked)}
          />
          <span className="checkbox-text">Include margin</span>
        </label>
      </div>

      {/* Logo Upload Section */}
      <div className="logo-section" style={{marginTop: '1.5rem', padding: '1rem', backgroundColor: '#f8fafc', borderRadius: '8px', border: '1px solid #e2e8f0'}}>
        <h4 style={{margin: '0 0 1rem 0', fontSize: '1rem', fontWeight: '600', color: '#334155'}}>
          ⭐ Add Logo
        </h4>
        
        {!settings.logo ? (
          <div className="logo-upload">
            {/* Upload Custom Logo */}
            <label htmlFor="logo-upload" style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '1.5rem 1rem',
              border: '2px dashed #cbd5e1',
              borderRadius: '8px',
              cursor: 'pointer',
              backgroundColor: '#fff',
              transition: 'all 0.2s',
              marginBottom: '1rem'
            }}>
              <Upload size={28} style={{color: '#64748b', marginBottom: '0.5rem'}} />
              <span style={{color: '#475569', fontSize: '0.9rem', textAlign: 'center'}}>
                Upload Custom Logo<br />
                <small style={{color: '#94a3b8'}}>PNG, JPG up to 5MB</small>
              </span>
            </label>
            <input
              id="logo-upload"
              type="file"
              accept="image/png,image/jpeg,image/jpg"
              onChange={handleFileChange}
              style={{display: 'none'}}
            />

            {/* Predefined Logos */}
            <div style={{textAlign: 'center'}}>
              <button
                onClick={() => setShowPredefinedLogos(!showPredefinedLogos)}
                style={{
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  color: 'white',
                  border: 'none',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '6px',
                  fontSize: '0.9rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  marginBottom: showPredefinedLogos ? '1rem' : '0'
                }}
              >
                {showPredefinedLogos ? 'Hide' : 'Choose'} Popular Logos
              </button>

              {showPredefinedLogos && (
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(80px, 1fr))',
                  gap: '0.75rem',
                  marginTop: '1rem',
                  padding: '1rem',
                  backgroundColor: '#fff',
                  borderRadius: '8px',
                  border: '1px solid #e2e8f0'
                }}>
                  {predefinedLogos.map((logo) => {
                    const IconComponent = logo.icon;
                    return (
                      <div
                        key={logo.name}
                        onClick={() => selectPredefinedLogo(logo)}
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          padding: '0.75rem 0.5rem',
                          cursor: 'pointer',
                          borderRadius: '6px',
                          transition: 'all 0.2s',
                          backgroundColor: '#f8fafc',
                          border: '1px solid #e2e8f0'
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.backgroundColor = '#e2e8f0';
                          e.target.style.transform = 'scale(1.05)';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.backgroundColor = '#f8fafc';
                          e.target.style.transform = 'scale(1)';
                        }}
                      >
                        <div style={{
                          width: '40px',
                          height: '40px',
                          borderRadius: '8px',
                          backgroundColor: logo.color,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          marginBottom: '0.5rem'
                        }}>
                          <IconComponent size={24} color="white" />
                        </div>
                        <span style={{
                          fontSize: '0.75rem',
                          color: '#475569',
                          textAlign: 'center',
                          fontWeight: '500'
                        }}>
                          {logo.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="logo-preview">
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '0.5rem',
              backgroundColor: '#fff',
              borderRadius: '6px',
              marginBottom: '1rem'
            }}>
              <div style={{display: 'flex', alignItems: 'center'}}>
                <img 
                  src={settings.logo} 
                  alt="Logo preview" 
                  style={{
                    width: '40px',
                    height: '40px',
                    objectFit: 'contain',
                    borderRadius: '4px',
                    marginRight: '0.75rem'
                  }}
                />
                <span style={{fontSize: '0.9rem', color: '#475569'}}>
                  {settings.logoFile?.name || 'Logo selected'}
                </span>
              </div>
              <button
                onClick={removeLogo}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#ef4444',
                  cursor: 'pointer',
                  padding: '0.25rem'
                }}
              >
                <X size={18} />
              </button>
            </div>

            {/* Logo Size Control */}
            <div className="form-group">
              <label className="form-label">Logo Size: {settings.logoSize}%</label>
              <input
                type="range"
                min="15"
                max="40"
                value={settings.logoSize}
                onChange={(e) => onSettingsChange('logoSize', parseInt(e.target.value))}
                style={{width: '100%'}}
              />
              <div style={{display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: '#94a3b8'}}>
                <span>Small</span>
                <span>Large</span>
              </div>
            </div>

            {/* Logo Options */}
            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem', marginTop: '1rem'}}>
              <label className="checkbox-label" style={{fontSize: '0.85rem'}}>
                <input
                  type="checkbox"
                  checked={settings.logoBackground}
                  onChange={(e) => onSettingsChange('logoBackground', e.target.checked)}
                />
                <span className="checkbox-text">White background</span>
              </label>
              
              <div style={{fontSize: '0.85rem'}}>
                <label style={{color: '#475569', marginBottom: '0.25rem', display: 'block'}}>
                  Corner radius
                </label>
                <input
                  type="range"
                  min="0"
                  max="20"
                  value={settings.logoRadius}
                  onChange={(e) => onSettingsChange('logoRadius', parseInt(e.target.value))}
                  style={{width: '100%'}}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default QRCustomizer;
