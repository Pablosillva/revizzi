import { Request, Response } from 'express';
import { z } from 'zod';
import { postService } from './post.service';
import { AppError } from '@/utils/AppError';

const createSchema = z.object({
  title: z.string().min(3),
  slug: z.string().optional(),
  excerpt: z.string().min(10),
  content: z.string().min(20),
  coverImage: z.string().url().optional().or(z.literal('')),
  category: z.string().min(2),
  tags: z.array(z.string()).optional(),
  published: z.boolean().optional(),
});

const updateSchema = createSchema.partial(); // todos os campos opcionais

const listQuerySchema = z.object({
  page: z.coerce.number().optional(),
  limit: z.coerce.number().optional(),
  published: z
    .enum(['true', 'false'])
    .optional()
    .transform((v) => (v === undefined ? undefined : v === 'true')),
  category: z.string().optional(),
  search: z.string().optional(),
});

export const postController = {
  async list(req: Request, res: Response) {
    const params = listQuerySchema.parse(req.query);
    const result = await postService.list(params);
    return res.json(result);
  },

  async getBySlug(req: Request, res: Response) {
    const post = await postService.getBySlug(req.params.slug);
    // Se for rascunho, só admin autenticado pode ver
    if (!post.published && !req.user) {
      throw new AppError('Post não encontrado', 404);
    }
    return res.json(post);
  },

  async getById(req: Request, res: Response) {
    const post = await postService.getById(req.params.id);
    return res.json(post);
  },

  async create(req: Request, res: Response) {
    const data = createSchema.parse(req.body);
    if (!req.user) throw new AppError('Não autenticado', 401);

    const post = await postService.create({ ...data, authorId: req.user.id });
    return res.status(201).json(post);
  },

  async update(req: Request, res: Response) {
    const data = updateSchema.parse(req.body);
    const post = await postService.update(req.params.id, data);
    return res.json(post);
  },

  async delete(req: Request, res: Response) {
    await postService.delete(req.params.id);
    return res.status(204).send(); // 204 = No Content
  },
};