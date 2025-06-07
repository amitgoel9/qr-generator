import React, { useRef } from 'react';
import QRCode from 'react-qr-code';
import { Download, Share2 } from 'lucide-react';
import html2canvas from 'html2canvas';

const QRDisplay = ({ value, settings }) => {
  const qrRef = useRef(null);

  const downloadQR = async () => {
    if (!qrRef.current || !value) return;

    try {
      const canvas = await html2canvas(qrRef.current, {
        backgroundColor: settings.bgColor,
        width: settings.size + (settings.includeMargin ? 80 : 0),
        height: settings.size + (settings.includeMargin ? 80 : 0),
        scale: 2 // Higher resolution
      });

      const link = document.createElement('a');
      link.download = 'qr-code.png';
      link.href = canvas.toDataURL();
      link.click();
    } catch (error) {
      console.error('Error downloading QR code:', error);
    }
  };

  const shareQR = async () => {
    if (!navigator.share || !qrRef.current || !value) return;

    try {
      const canvas = await html2canvas(qrRef.current);
      canvas.toBlob(async (blob) => {
        const file = new File([blob], 'qr-code.png', { type: 'image/png' });
        await navigator.share({
          title: 'QR Code',
          text: 'Check out this QR code',
          files: [file]
        });
      });
    } catch (error) {
      console.error('Error sharing QR code:', error);
    }
  };

  if (!value) {
    return (
      <div className="qr-display">
        <div className="qr-placeholder">
          <div className="placeholder-content">
            <div className="placeholder-icon">📱</div>
            <h3>Enter information to generate QR code</h3>
            <p>Fill in the form on the left to see your QR code here</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="qr-display">
      <div className="qr-container">
        <div 
          ref={qrRef}
          className="qr-code-wrapper"
          style={{
            backgroundColor: settings.bgColor,
            padding: settings.includeMargin ? '20px' : '0'
          }}
        >
          <QRCode
            value={value}
            size={settings.size}
            bgColor={settings.bgColor}
            fgColor={settings.fgColor}
            level={settings.level}
            includeMargin={false}
          />
        </div>
        
        <div className="qr-actions">
          <button className="action-btn primary" onClick={downloadQR}>
            <Download size={20} />
            Download PNG
          </button>
          
          {navigator.share && (
            <button className="action-btn secondary" onClick={shareQR}>
              <Share2 size={20} />
              Share
            </button>
          )}
        </div>
        
        <div className="qr-info">
          <p className="qr-size">{settings.size}×{settings.size} pixels</p>
          <p className="qr-format">PNG format, High quality</p>
        </div>
      </div>
    </div>
  );
};

export default QRDisplay;
