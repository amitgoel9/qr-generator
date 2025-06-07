import React from 'react';
import QRTypeSelector from './QRTypeSelector';
import QRInputForm from './QRInputForm';
import QRCustomizer from './QRCustomizer';
import QRDisplay from './QRDisplay';
import useQRGenerator from '../hooks/useQRGenerator';
import '../styles/QRGenerator.css';

const QRGenerator = () => {
  const {
    qrData,
    qrSettings,
    updateQrData,
    updateQrSettings,
    handleLogoUpload,
    generateQRValue
  } = useQRGenerator();

  return (
    <div className="qr-generator">
      <div className="container">
        <div className="generator-grid">
          {/* Left Panel - Controls */}
          <div className="controls-panel">
            <QRTypeSelector 
              currentType={qrData.type}
              onTypeChange={(type) => updateQrData('type', type)}
            />
            
            <QRInputForm 
              qrData={qrData}
              onDataChange={updateQrData}
            />
            
            <QRCustomizer 
              settings={qrSettings}
              onSettingsChange={updateQrSettings}
              handleLogoUpload={handleLogoUpload}
            />
          </div>

          {/* Right Panel - QR Display */}
          <div className="display-panel">
            <QRDisplay 
              value={generateQRValue()}
              settings={qrSettings}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default QRGenerator;
