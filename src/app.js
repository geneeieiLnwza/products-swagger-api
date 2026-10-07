import express from 'express';
import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from './config/swagger.js';
import { createProductRouter } from './routes/products.js';

export function createApp() {
  const app = express();
  app.disable('x-powered-by');
  app.use((_req, res, next) => { res.set('X-Content-Type-Options', 'nosniff'); next(); });
  app.use(express.json({ limit: '100kb' }));
  app.get('/', (_req, res) => res.json({ name: 'Products Swagger API', version: '1.0.0', products: '/api/products', docs: '/api-docs' }));
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  app.get('/api-docs.json', (_req, res) => res.json(swaggerSpec));
  app.use('/api/products', createProductRouter());
  app.use((_req, res) => res.status(404).json({ error: 'Not found' }));
  app.use((error, _req, res, next) => {
    if (res.headersSent) return next(error);
    const status = error.status || 500;
    if (status >= 500) console.error(error);
    res.status(status).json({ error: status >= 500 ? 'Internal server error' : error.message });
  });
  return app;
}
