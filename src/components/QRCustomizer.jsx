import React from 'react';

const QRCustomizer = ({ settings, onSettingsChange }) => {
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
    </div>
  );
};

export default QRCustomizer;
