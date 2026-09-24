import { Router } from 'express';
import { postController } from './post.controller';
import { asyncHandler } from '@/utils/asyncHandler';
import { authMiddleware } from '@/middlewares/auth.middleware';

export const postRoutes = Router();

// Públicas
postRoutes.get('/', asyncHandler(postController.list));
postRoutes.get('/slug/:slug', asyncHandler(postController.getBySlug));

// A partir daqui, tudo exige autenticação
postRoutes.use(authMiddleware);

postRoutes.get('/:id', asyncHandler(postController.getById));
postRoutes.post('/', asyncHandler(postController.create));
postRoutes.put('/:id', asyncHandler(postController.update));
postRoutes.delete('/:id', asyncHandler(postController.delete));