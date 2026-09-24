import { ShieldCheck, Handshake, Award } from "lucide-react";

const valores = [
  {
    icon: ShieldCheck,
    title: "Ética e profissionalismo",
    description: "Cada diagnóstico e serviço é feito com ética e profissionalismo, do início ao fim.",
  },
  {
    icon: Handshake,
    title: "Relacionamento sólido",
    description: "Construímos um relacionamento sólido com fornecedores, parceiros e, principalmente, com nossos clientes.",
  },
  {
    icon: Award,
    title: "Qualidade em cada serviço",
    description: "Executamos cada serviço com o cuidado que você teria com o próprio carro.",
  },
];

function Sobre() {
  return (
    <>
      {/* 1. Nossa história */}
      <section className="max-w-[1320px] mx-auto px-8 py-24">
        <p className="text-[var(--primary)] text-sm font-medium mb-4">
          Sobre nós
        </p>

        <h1 className="text-4xl md:text-6xl font-bold text-[var(--text-primary)] leading-tight tracking-tight mb-6">
          Nossa história
        </h1>

        <p className="max-w-[640px] text-lg text-[var(--text-secondary)] leading-relaxed">
          Há mais de 8 anos prestando serviços de qualidade, sempre com
          transparência em cada atendimento.
        </p>
      </section>

      {/* 2. Nossos valores */}
      <section className="max-w-[1320px] mx-auto px-8 py-16">
        <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-10">
          Nossos valores
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {valores.map((valor) => {
            const Icon = valor.icon;
            return (
              <div
                key={valor.title}
                className="p-6 bg-[var(--surface)] border border-[var(--border)] rounded-lg hover:border-[var(--primary)] transition-colors duration-200"
              >
                <Icon size={28} className="text-[var(--primary)] mb-4" />
                <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">
                  {valor.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {valor.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Sobre;