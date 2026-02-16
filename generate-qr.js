const QRCode = require('qrcode');
const fs = require('fs');
const path = require('path');

// Generate QR code for deployed URL
QRCode.toFile(
    path.join(__dirname, 'qr-code.png'),
    'https://lucasbhatia.dev',
    {
        color: {
            dark: '#000000',
            light: '#ffffff'
        },
        width: 256,
        margin: 2,
        type: 'image/png',
        quality: 0.95
    },
    function (err) {
        if (err) throw err;
        console.log('✓ QR code generated: qr-code.png');
    }
);

// Also generate for localhost testing
QRCode.toFile(
    path.join(__dirname, 'qr-code-localhost.png'),
    'http://localhost:8080',
    {
        color: {
            dark: '#000000',
            light: '#ffffff'
        },
        width: 256,
        margin: 2,
        type: 'image/png',
        quality: 0.95
    },
    function (err) {
        if (err) throw err;
        console.log('✓ QR code generated: qr-code-localhost.png');
    }
);
