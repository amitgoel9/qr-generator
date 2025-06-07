import { useState, useCallback } from 'react';

const useQRGenerator = () => {
  const [qrData, setQrData] = useState({
    type: 'url',
    value: '',
    url: '',
    text: '',
    wifi: {
      ssid: '',
      password: '',
      security: 'WPA'
    },
    vcard: {
      name: '',
      phone: '',
      email: '',
      organization: '',
      url: ''
    }
  });

  const [qrSettings, setQrSettings] = useState({
    size: 256,
    bgColor: '#FFFFFF',
    fgColor: '#000000',
    level: 'M',
    includeMargin: true,
    // Logo settings
    logo: null,
    logoFile: null,
    logoSize: 30, // Percentage of QR code size
    logoBackground: true, // White background behind logo
    logoRadius: 8 // Border radius for logo
  });

  const updateQrData = useCallback((field, value) => {
    setQrData(prev => ({
      ...prev,
      [field]: value
    }));
  }, []);

  const updateQrSettings = useCallback((field, value) => {
    setQrSettings(prev => ({
      ...prev,
      [field]: value
    }));
  }, []);

  // Handle logo upload
  const handleLogoUpload = useCallback((file) => {
    if (!file) {
      setQrSettings(prev => ({
        ...prev,
        logo: null,
        logoFile: null
      }));
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      setQrSettings(prev => ({
        ...prev,
        logo: e.target.result,
        logoFile: file
      }));
    };
    reader.readAsDataURL(file);
  }, []);

  const generateQRValue = useCallback(() => {
    switch (qrData.type) {
      case 'url':
        return qrData.url;
      
      case 'text':
        return qrData.text;
      
      case 'wifi':
        const { ssid, password, security } = qrData.wifi;
        return `WIFI:T:${security};S:${ssid};P:${password};;`;
      
      case 'vcard':
        const { name, phone, email, organization, url } = qrData.vcard;
        return `BEGIN:VCARD
VERSION:3.0
FN:${name}
ORG:${organization}
TEL:${phone}
EMAIL:${email}
URL:${url}
END:VCARD`;
      
      default:
        return '';
    }
  }, [qrData]);

  return {
    qrData,
    qrSettings,
    updateQrData,
    updateQrSettings,
    handleLogoUpload,
    generateQRValue
  };
};

export default useQRGenerator;
