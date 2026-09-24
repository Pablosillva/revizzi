import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { env } from '@/config/env';
import { AppError } from '@/utils/AppError';

interface TokenPayload {
  sub: string;
  role: 'ADMIN' | 'EDITOR';
}

export function authMiddleware(req: Request, _res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;

  if (!authHeader) throw new AppError('Token não informado', 401);

  // "Bearer eyJhbGci..." -> ["Bearer", "eyJhbGci..."]
  const [, token] = authHeader.split(' ');

  if (!token) throw new AppError('Token malformado', 401);

  try {
    const decoded = jwt.verify(token, env.JWT_SECRET) as TokenPayload;
    req.user = { id: decoded.sub, role: decoded.role };
    next(); // ← passa para o próximo handler
  } catch {
    throw new AppError('Token inválido ou expirado', 401);
  }
}

export function adminOnly(req: Request, _res: Response, next: NextFunction) {
  if (req.user?.role !== 'ADMIN') throw new AppError('Acesso negado', 403);
  next();
}