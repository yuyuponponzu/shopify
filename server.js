const express = require('express');
const next = require('next');
const { createProxyMiddleware } = require('http-proxy-middleware');

const port = parseInt(process.env.PORT, 10) || 4000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
    const server = express();

    server.use(
        '/admin/api/2021-01/products.json',
        createProxyMiddleware({
            target:
                'https://362e1f09b3f0ecf8d524eaaaf46c3624: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@okok1121.myshopify.com',
            changeOrigin: true,
        })
    );

    server.all('*', (req, res) => {
        return handle(req, res);
    });

    server.listen(port, (err) => {
        if (err) throw err;
        console.log(`> Ready on http://localhost:${port}`);
    });
});
