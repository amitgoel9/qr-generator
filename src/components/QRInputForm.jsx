import React from 'react';

const QRInputForm = ({ qrData, onDataChange }) => {
  const handleInputChange = (field, value) => {
    if (field.includes('.')) {
      const [parent, child] = field.split('.');
      onDataChange(parent, {
        ...qrData[parent],
        [child]: value
      });
    } else {
      onDataChange(field, value);
    }
  };

  const renderForm = () => {
    switch (qrData.type) {
      case 'url':
        return (
          <div className="form-group">
            <label className="form-label">Website URL</label>
            <input
              type="url"
              className="form-input"
              placeholder="https://example.com"
              value={qrData.url}
              onChange={(e) => handleInputChange('url', e.target.value)}
            />
            <small className="form-hint">Include http:// or https://</small>
          </div>
        );

      case 'text':
        return (
          <div className="form-group">
            <label className="form-label">Text Message</label>
            <textarea
              className="form-textarea"
              placeholder="Enter your text message here..."
              value={qrData.text}
              onChange={(e) => handleInputChange('text', e.target.value)}
              rows="3"
            />
            <small className="form-hint">Maximum 2,953 characters</small>
          </div>
        );

      case 'wifi':
        return (
          <>
            <div className="form-group">
              <label className="form-label">Network Name (SSID)</label>
              <input
                type="text"
                className="form-input"
                placeholder="My WiFi Network"
                value={qrData.wifi.ssid}
                onChange={(e) => handleInputChange('wifi.ssid', e.target.value)}
              />
            </div>
            
            <div style={{display: 'grid', gridTemplateColumns: '1fr 120px', gap: '0.75rem'}}>
              <div className="form-group" style={{marginBottom: '0.75rem'}}>
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-input"
                  placeholder="WiFi Password"
                  value={qrData.wifi.password}
                  onChange={(e) => handleInputChange('wifi.password', e.target.value)}
                />
              </div>
              
              <div className="form-group" style={{marginBottom: '0.75rem'}}>
                <label className="form-label">Security</label>
                <select
                  className="form-select"
                  value={qrData.wifi.security}
                  onChange={(e) => handleInputChange('wifi.security', e.target.value)}
                >
                  <option value="WPA">WPA/WPA2</option>
                  <option value="WEP">WEP</option>
                  <option value="nopass">Open</option>
                </select>
              </div>
            </div>
          </>
        );

      case 'vcard':
        return (
          <>
            <div className="form-group">
              <label className="form-label">Full Name</label>
              <input
                type="text"
                className="form-input"
                placeholder="John Doe"
                value={qrData.vcard.name}
                onChange={(e) => handleInputChange('vcard.name', e.target.value)}
              />
            </div>
            
            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem'}}>
              <div className="form-group" style={{marginBottom: '0.75rem'}}>
                <label className="form-label">Phone Number</label>
                <input
                  type="tel"
                  className="form-input"
                  placeholder="+1 234 567 8900"
                  value={qrData.vcard.phone}
                  onChange={(e) => handleInputChange('vcard.phone', e.target.value)}
                />
              </div>
              
              <div className="form-group" style={{marginBottom: '0.75rem'}}>
                <label className="form-label">Email Address</label>
                <input
                  type="email"
                  className="form-input"
                  placeholder="john@example.com"
                  value={qrData.vcard.email}
                  onChange={(e) => handleInputChange('vcard.email', e.target.value)}
                />
              </div>
            </div>
            
            <div className="form-group">
              <label className="form-label">Organization (Optional)</label>
              <input
                type="text"
                className="form-input"
                placeholder="Company Name"
                value={qrData.vcard.organization}
                onChange={(e) => handleInputChange('vcard.organization', e.target.value)}
              />
            </div>
            
            <div className="form-group">
              <label className="form-label">Website (Optional)</label>
              <input
                type="url"
                className="form-input"
                placeholder="https://example.com"
                value={qrData.vcard.url}
                onChange={(e) => handleInputChange('vcard.url', e.target.value)}
              />
            </div>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <div className="input-form">
      <h3 className="section-title">Enter Information</h3>
      {renderForm()}
    </div>
  );
};

export default QRInputForm;
