<<<<<<< HEAD
require('dotenv').config();
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Servire file statici dalla cartella "public"
app.use(express.static(path.join(__dirname, 'public')));

// Proxy per le API SolarEdge
=======
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const path = require('path');

const app = express();
const port = 3000;

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

>>>>>>> fe114a4339dee966848a7cc58eb60a957eb45676
app.use('/api', createProxyMiddleware({
    target: 'https://monitoringapi.solaredge.com',
    changeOrigin: true,
    pathRewrite: {
<<<<<<< HEAD
        '^/api': '',
=======
        // Non rimuovere /api dal percorso
>>>>>>> fe114a4339dee966848a7cc58eb60a957eb45676
    },
    onProxyReq: (proxyReq, req, res) => {
        proxyReq.setHeader('Access-Control-Allow-Origin', '*');
    },
    onProxyRes: (proxyRes, req, res) => {
        res.header('Access-Control-Allow-Origin', '*');
    },
}));

<<<<<<< HEAD
// Route per le pagine
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/monitoring', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'monitoring.html'));
});

app.get('/cloud', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'cloud.html'));
});

app.get('/install', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'install.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
=======
// Serve the index.html file for all other routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
>>>>>>> fe114a4339dee966848a7cc58eb60a957eb45676
});







<<<<<<< HEAD
=======




















>>>>>>> fe114a4339dee966848a7cc58eb60a957eb45676
