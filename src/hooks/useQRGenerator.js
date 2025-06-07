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
    includeMargin: true
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
    generateQRValue
  };
};

export default useQRGenerator;
