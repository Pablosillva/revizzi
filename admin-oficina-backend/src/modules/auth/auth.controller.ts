import { Request, Response } from 'express';
import { z } from 'zod';
import { authService } from './auth.service';

// Schemas de validação
const registerSchema = z.object({
  name: z.string().min(2, 'Nome muito curto'),
  email: z.string().email('E-mail inválido'),
  password: z.string().min(6, 'Senha deve ter ao menos 6 caracteres'),
});

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export const authController = {
  async register(req: Request, res: Response) {
    // .parse() valida e, se falhar, lança ZodError
    const data = registerSchema.parse(req.body);
    const user = await authService.register(data);
    return res.status(201).json(user); // 201 = Created
  },

  async login(req: Request, res: Response) {
    const data = loginSchema.parse(req.body);
    const result = await authService.login(data);
    return res.json(result);
  },

  async me(req: Request, res: Response) {
    return res.json({ user: req.user });
  },
};