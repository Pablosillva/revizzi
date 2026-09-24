import { Router } from 'express';
import { authController } from './auth.controller';
import { asyncHandler } from '@/utils/asyncHandler';
import { authMiddleware } from '@/middlewares/auth.middleware';

export const authRoutes = Router();

authRoutes.post('/register', asyncHandler(authController.register));
authRoutes.post('/login', asyncHandler(authController.login));
authRoutes.get('/me', authMiddleware, asyncHandler(authController.me));