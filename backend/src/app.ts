import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { env } from '@/config/env';
import { authRoutes } from '@/modules/auth/auth.routes';
import { postRoutes } from '@/modules/posts/post.routes';
import { errorMiddleware } from '@/middlewares/error.middleware';
import { AppError } from '@/utils/AppError';

export const app = express();

// Segurança
app.use(helmet());
app.use(cors({ origin: env.CORS_ORIGIN, credentials: true }));

// Parse do body (transforma o JSON do body em objeto)
app.use(express.json({ limit: '5mb' }));

// Health check (útil para monitoramento)
app.get('/health', (_req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Rotas
app.use('/api/auth', authRoutes);
app.use('/api/posts', postRoutes);

// 404 — precisa vir depois das rotas
app.use((_req, _res, next) => {
  next(new AppError('Rota não encontrada', 404));
});

// Middleware de erro — SEMPRE por último
app.use(errorMiddleware);