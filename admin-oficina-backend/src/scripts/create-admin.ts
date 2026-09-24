import bcrypt from 'bcryptjs';
import { prisma } from '../lib/prisma';

async function main() {
  const password = await bcrypt.hash('admin123', 10);

  await prisma.user.upsert({
    where: { email: 'admin@revizzi.com' },
    update: {},
    create: {
      name: 'Admin',
      email: 'admin@revizzi.com',
      password,
      role: 'ADMIN',
    },
  });

  console.log('✅ Admin criado: admin@revizzi.com / admin123');
}

main()
  .catch((e) => {
    console.error('❌ Erro:', e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());