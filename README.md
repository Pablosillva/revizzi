# Revizzi Auto Center

Sistema completo para gestão de blog de uma oficina mecânica.

## 📁 Estrutura

- `revizzi/` — Frontend React + TypeScript + Tailwind
- `admin-oficina-backend/` — Backend Express + TypeScript + Prisma + PostgreSQL

## 🛠️ Stack

**Frontend**: React, TypeScript, Vite, Tailwind CSS
**Backend**: Node.js, Express, TypeScript, Prisma 7, PostgreSQL
**Autenticação**: JWT + bcrypt

## 🚀 Como rodar

### Backend

```bash
cd admin-oficina-backend
npm install
docker compose up -d
npm run prisma:migrate
npm run create-admin
npm run dev