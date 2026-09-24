import { app } from './app';
import { env } from './config/env';
import { prisma } from './lib/prisma';

const server = app.listen(env.PORT, () => {
  console.log(`🚀 Servidor em http://localhost:${env.PORT}`);
});

process.on('SIGINT', async () => {
  console.log('\n🔻 Encerrando...');
  await prisma.$disconnect();
  server.close(() => process.exit(0));
});