const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const path = require('path');

const app = express();
const port = 3000;

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', createProxyMiddleware({
    target: 'https://monitoringapi.solaredge.com',
    changeOrigin: true,
    pathRewrite: {
        // Non rimuovere /api dal percorso
    },
    onProxyReq: (proxyReq, req, res) => {
        proxyReq.setHeader('Access-Control-Allow-Origin', '*');
    },
    onProxyRes: (proxyRes, req, res) => {
        res.header('Access-Control-Allow-Origin', '*');
    },
}));

// Serve the index.html file for all other routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});



























