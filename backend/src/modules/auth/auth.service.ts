import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { prisma } from '@/lib/prisma';
import { env } from '@/config/env';
import { AppError } from '@/utils/AppError';

interface RegisterDTO {
  name: string;
  email: string;
  password: string;
}

interface LoginDTO {
  email: string;
  password: string;
}

export const authService = {
  async register({ name, email, password }: RegisterDTO) {
    // 1. Verifica se email já existe
    const exists = await prisma.user.findUnique({ where: { email } });
    if (exists) throw new AppError('E-mail já cadastrado', 409);

    // 2. Criptografa a senha (10 = custo do hash, quanto maior, mais lento/seguro)
    const hashed = await bcrypt.hash(password, 10);

    // 3. Cria usuário — repare no select: NUNCA devolvemos a senha
    const user = await prisma.user.create({
      data: { name, email, password: hashed },
      select: { id: true, name: true, email: true, role: true, createdAt: true },
    });

    return user;
  },

  async login({ email, password }: LoginDTO) {
    // 1. Busca usuário
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) throw new AppError('Credenciais inválidas', 401);

    // 2. Compara a senha digitada com o hash do banco
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) throw new AppError('Credenciais inválidas', 401);

    // 3. Gera o token
    const token = jwt.sign(
      { sub: user.id, role: user.role },
      env.JWT_SECRET,
      { expiresIn: env.JWT_EXPIRES_IN as jwt.SignOptions['expiresIn'] }
    );

    return {
      token,
      user: { id: user.id, name: user.name, email: user.email, role: user.role },
    };
  },
};