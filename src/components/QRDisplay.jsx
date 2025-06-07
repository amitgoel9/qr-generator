import React, { useRef, useEffect, useState, useCallback } from 'react';
import QRCode from 'qrcode';
import { Download, Share2 } from 'lucide-react';

const QRDisplay = ({ value, settings }) => {
  const canvasRef = useRef(null);
  const [qrGenerated, setQrGenerated] = useState(false);

  const drawLogo = useCallback((ctx) => {
    return new Promise((resolve) => {
      const logoImage = new Image();
      logoImage.onload = () => {
        const logoSize = (settings.size * settings.logoSize) / 100;
        const logoX = (settings.size - logoSize) / 2;
        const logoY = (settings.size - logoSize) / 2;

        // Save context state
        ctx.save();

        if (settings.logoBackground) {
          // Draw white background with border radius
          const padding = logoSize * 0.1;
          const bgSize = logoSize + padding * 2;
          const bgX = logoX - padding;
          const bgY = logoY - padding;

          ctx.fillStyle = '#ffffff';
          ctx.shadowColor = 'rgba(0, 0, 0, 0.1)';
          ctx.shadowBlur = 4;
          ctx.shadowOffsetY = 2;

          // Rounded rectangle for background
          ctx.beginPath();
          ctx.roundRect(bgX, bgY, bgSize, bgSize, settings.logoRadius);
          ctx.fill();

          // Reset shadow
          ctx.shadowColor = 'transparent';
          ctx.shadowBlur = 0;
          ctx.shadowOffsetY = 0;
        }

        // Clip logo to rounded rectangle
        ctx.beginPath();
        ctx.roundRect(logoX, logoY, logoSize, logoSize, settings.logoRadius);
        ctx.clip();

        // Draw logo
        ctx.drawImage(logoImage, logoX, logoY, logoSize, logoSize);

        // Restore context state
        ctx.restore();
        resolve();
      };
      logoImage.src = settings.logo;
    });
  }, [settings.size, settings.logoSize, settings.logoBackground, settings.logoRadius, settings.logo]);

  const generateQRWithLogo = useCallback(async () => {
    if (!value || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Set canvas size
    canvas.width = settings.size;
    canvas.height = settings.size;

    try {
      // Generate QR code data URL
      const qrDataURL = await QRCode.toDataURL(value, {
        width: settings.size,
        margin: 0,
        color: {
          dark: settings.fgColor,
          light: settings.bgColor,
        },
        errorCorrectionLevel: settings.level,
      });

      // Create QR image
      const qrImage = new Image();
      qrImage.onload = async () => {
        // Clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Draw QR code
        ctx.drawImage(qrImage, 0, 0, settings.size, settings.size);

        // Add logo if present
        if (settings.logo) {
          await drawLogo(ctx);
        }
        
        setQrGenerated(true);
      };
      qrImage.src = qrDataURL;
    } catch (error) {
      console.error('Error generating QR code:', error);
    }
  }, [value, settings.size, settings.fgColor, settings.bgColor, settings.level, settings.logo, drawLogo]);

  useEffect(() => {
    if (value && canvasRef.current) {
      generateQRWithLogo();
    }
  }, [value, generateQRWithLogo]);

  const downloadQR = async () => {
    if (!canvasRef.current || !qrGenerated) return;

    try {
      // Create download canvas with margin if needed
      const downloadCanvas = document.createElement('canvas');
      const downloadCtx = downloadCanvas.getContext('2d');
      
      const margin = settings.includeMargin ? 40 : 0;
      const totalSize = settings.size + margin * 2;
      
      downloadCanvas.width = totalSize;
      downloadCanvas.height = totalSize;

      // Fill background
      downloadCtx.fillStyle = settings.bgColor;
      downloadCtx.fillRect(0, 0, totalSize, totalSize);

      // Draw QR code
      downloadCtx.drawImage(canvasRef.current, margin, margin);

      // Download
      const link = document.createElement('a');
      link.download = `qr-code-${settings.logo ? 'with-logo' : 'standard'}.png`;
      link.href = downloadCanvas.toDataURL('image/png', 1.0);
      link.click();
    } catch (error) {
      console.error('Error downloading QR code:', error);
    }
  };

  const shareQR = async () => {
    if (!navigator.share || !canvasRef.current || !qrGenerated) return;

    try {
      canvasRef.current.toBlob(async (blob) => {
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
            <h3>Create Your QR Code</h3>
            <p>Fill in the form on the left to generate your custom QR code instantly</p>
            
            <div className="placeholder-tips">
              <h4>💡 Quick Tips:</h4>
              <ul className="tips-list">
                <li>URLs: Include http:// or https://</li>
                <li>WiFi: Use High error correction for better scanning</li>
                <li>Business: Add logos for brand recognition</li>
                <li>Size: Larger QR codes scan better from distance</li>
              </ul>
            </div>
            
            <div className="placeholder-tips" style={{marginTop: '1rem'}}>
              <h4>🎯 Popular Uses:</h4>
              <ul className="tips-list">
                <li>Website links for business cards</li>
                <li>WiFi passwords for guests</li>
                <li>Contact info (vCard) sharing</li>
                <li>Social media profiles</li>
                <li>Product information & menus</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="qr-display">
      <div className="qr-container">
        <div 
          className="qr-code-wrapper"
          style={{
            backgroundColor: settings.bgColor,
            padding: settings.includeMargin ? '20px' : '0',
            borderRadius: '8px',
            display: 'inline-block'
          }}
        >
          <canvas
            ref={canvasRef}
            style={{
              display: 'block',
              borderRadius: '4px'
            }}
          />
        </div>
        
        <div className="qr-actions">
          <button 
            className="action-btn primary" 
            onClick={downloadQR}
            disabled={!qrGenerated}
          >
            <Download size={20} />
            Download PNG
          </button>
          
          {navigator.share && (
            <button 
              className="action-btn secondary" 
              onClick={shareQR}
              disabled={!qrGenerated}
            >
              <Share2 size={20} />
              Share
            </button>
          )}
        </div>
        
        <div className="qr-info">
          <p className="qr-size">{settings.size}×{settings.size} pixels</p>
          <p className="qr-format">
            PNG format, High quality
            {settings.logo && <span style={{color: '#10b981'}}> • With Logo</span>}
          </p>
        </div>

        {settings.logo && (
          <div style={{
            marginTop: '1rem',
            padding: '0.75rem',
            backgroundColor: '#f0f9ff',
            borderRadius: '6px',
            border: '1px solid #0ea5e9'
          }}>
            <p style={{
              margin: 0,
              fontSize: '0.85rem',
              color: '#0c4a6e',
              textAlign: 'center'
            }}>
              ⭐ QR Code with embedded logo generated successfully!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default QRDisplay;
