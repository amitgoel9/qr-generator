import React from 'react';
import { Globe, Type, Wifi, User } from 'lucide-react';

const QR_TYPES = [
  { id: 'url', label: 'URL', icon: Globe, description: 'Website or link' },
  { id: 'text', label: 'Text', icon: Type, description: 'Plain text message' },
  { id: 'wifi', label: 'WiFi', icon: Wifi, description: 'WiFi network access' },
  { id: 'vcard', label: 'Contact', icon: User, description: 'Contact information' }
];

const QRTypeSelector = ({ currentType, onTypeChange }) => {
  return (
    <div className="type-selector">
      <h3 className="section-title">Select QR Type</h3>
      <div className="type-grid">
        {QR_TYPES.map(({ id, label, icon: Icon, description }) => (
          <button
            key={id}
            className={`type-card ${currentType === id ? 'active' : ''}`}
            onClick={() => onTypeChange(id)}
          >
            <Icon className="type-icon" size={24} />
            <div className="type-info">
              <span className="type-label">{label}</span>
              <span className="type-description">{description}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default QRTypeSelector;
