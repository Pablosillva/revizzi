import { Request, Response, NextFunction } from 'express';
import { ZodError } from 'zod';
import { Prisma } from '../generated/prisma/client';
import { AppError } from '@/utils/AppError';

export function errorMiddleware(
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
) {
  // 1. Erros da nossa aplicação
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  // 2. Erros de validação do Zod
  if (err instanceof ZodError) {
    return res.status(422).json({
      status: 'error',
      message: 'Erro de validação',
      issues: err.flatten().fieldErrors,
    });
  }

  // 3. Erros do Prisma (ex: unique constraint)
  if (err instanceof Prisma.PrismaClientKnownRequestError) {
    if (err.code === 'P2002') {
      return res.status(409).json({
        status: 'error',
        message: 'Registro duplicado',
      });
    }
  }

  // 4. Qualquer outro erro (não esperado)
  console.error('💥 Erro não tratado:', err);
  return res.status(500).json({
    status: 'error',
    message: 'Erro interno do servidor',
  });
}