import { prisma } from '@/lib/prisma';
import { AppError } from '@/utils/AppError';
import { Prisma } from '../../generated/prisma/client';

interface CreatePostDTO {
  title: string;
  slug?: string;
  excerpt: string;
  content: string;
  coverImage?: string;
  category: string;
  tags?: string[];
  published?: boolean;
  authorId: string;
}

// Transforma "Como Trocar Óleo" em "como-trocar-oleo"
function slugify(text: string) {
  return text
    .toLowerCase()
    .normalize('NFD')               // separa acentos das letras
    .replace(/[\u0300-\u036f]/g, '') // remove os acentos
    .replace(/[^a-z0-9]+/g, '-')     // troca o que não for letra/número por "-"
    .replace(/(^-|-$)+/g, '');       // remove "-" do começo e fim
}

export const postService = {
  async list(params: {
    page?: number;
    limit?: number;
    published?: boolean;
    category?: string;
    search?: string;
  }) {
    const { page = 1, limit = 10, published, category, search } = params;

    const where: Prisma.PostWhereInput = {
      ...(published !== undefined && { published }),
      ...(category && { category }),
      ...(search && {
        OR: [
          { title: { contains: search, mode: 'insensitive' } },
          { content: { contains: search, mode: 'insensitive' } },
        ],
      }),
    };

    // Promise.all roda as duas queries em paralelo (mais rápido)
    const [posts, total] = await Promise.all([
      prisma.post.findMany({
        where,
        include: { author: { select: { id: true, name: true } } },
        orderBy: { createdAt: 'desc' },
        skip: (page - 1) * limit,
        take: limit,
      }),
      prisma.post.count({ where }),
    ]);

    return {
      data: posts,
      meta: { page, limit, total, totalPages: Math.ceil(total / limit) },
    };
  },

  async getBySlug(slug: string) {
    const post = await prisma.post.findUnique({
      where: { slug },
      include: { author: { select: { id: true, name: true } } },
    });
    if (!post) throw new AppError('Post não encontrado', 404);
    return post;
  },

  async getById(id: string) {
    const post = await prisma.post.findUnique({ where: { id } });
    if (!post) throw new AppError('Post não encontrado', 404);
    return post;
  },

  async create(data: CreatePostDTO) {
    const slug = data.slug ? slugify(data.slug) : slugify(data.title);

    const slugExists = await prisma.post.findUnique({ where: { slug } });
    if (slugExists) throw new AppError('Já existe um post com esse slug', 409);

    return prisma.post.create({
      data: {
        title: data.title,
        slug,
        excerpt: data.excerpt,
        content: data.content,
        coverImage: data.coverImage,
        category: data.category,
        tags: data.tags ?? [],
        published: data.published ?? false,
        authorId: data.authorId,
      },
    });
  },

  async update(id: string, data: Partial<CreatePostDTO>) {
    await this.getById(id); // garante que existe

    const updateData: Prisma.PostUpdateInput = { ...data };

    if (data.slug || data.title) {
      const newSlug = slugify(data.slug || data.title || '');
      updateData.slug = newSlug;

      // Verifica se outro post já usa esse slug
      const conflict = await prisma.post.findFirst({
        where: { slug: newSlug, NOT: { id } },
      });
      if (conflict) throw new AppError('Slug já está em uso', 409);
    }

    delete (updateData as any).authorId; // não permite trocar autor

    return prisma.post.update({ where: { id }, data: updateData });
  },

  async delete(id: string) {
    await this.getById(id);
    await prisma.post.delete({ where: { id } });
  },
};