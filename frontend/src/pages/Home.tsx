import { Link } from "react-router-dom";
import { Wrench, ShieldCheck, Gauge, Zap, ArrowRight } from "lucide-react";

const servicos = [
  {
    icon: Wrench,
    title: "Suspensão",
    description: "Diagnóstico e revisão completa do sistema de suspensão.",
  },
  {
    icon: ShieldCheck,
    title: "Freios",
    description: "Avaliação e troca de pastilhas, discos e sistema de freios.",
  },
  {
    icon: Gauge,
    title: "Embreagem",
    description: "Manutenção e troca de embreagem.",
  },
  {
    icon: Zap,
    title: "Motor & Injeção Eletrônica",
    description: "Diagnóstico eletrônico e revisão de motor e injeção eletrônica.",
  },
];

function Home() {
  return (
    <>
      {/* 1. Hero */}
      <section className="max-w-[1320px] mx-auto px-8 py-24 flex flex-col items-start">
        <p className="text-[var(--primary)] text-sm font-medium mb-4">
          Desde 2018
        </p>

        <h1 className="text-5xl md:text-7xl font-bold text-[var(--text-primary)] leading-none tracking-tight mb-4">
          Revizzi Auto Center
        </h1>

        <p className="text-2xl md:text-3xl text-[var(--text-secondary)] font-medium mb-6">
          O respeito que seu carro merece.
        </p>

        <p className="max-w-[560px] text-[var(--text-secondary)] leading-relaxed mb-8">
          Desde 2018 cuidando de veículos com honestidade e conhecimento técnico real —
          sem enrolação, sem serviço desnecessário.
        </p>

        <div className="flex gap-4">
          <Link
            to="/contato"
            className="px-6 py-3 rounded-md bg-[var(--primary)] text-white font-medium hover:opacity-90 transition"
          >
            Agendar serviço
          </Link>

          <Link
            to="/servicos"
            className="px-6 py-3 rounded-md border border-[var(--border)] text-[var(--text-primary)] font-medium hover:bg-[var(--surface)] transition"
          >
            Ver serviços
          </Link>
        </div>
      </section>

      {/* 2. Serviços em destaque */}
      <section className="max-w-[1320px] mx-auto px-8 py-16">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl font-bold text-[var(--text-primary)]">
            Nossos serviços
          </h2>

          <Link
            to="/servicos"
            className="flex items-center gap-1 text-sm text-[var(--primary)] hover:opacity-80 transition"
          >
            Ver todos <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicos.map((servico) => {
            const Icon = servico.icon;
            return (
              <div
                key={servico.title}
                className="p-6 bg-[var(--surface)] border border-[var(--border)] rounded-lg hover:border-[var(--primary)] transition-colors duration-200"
              >
                <Icon size={28} className="text-[var(--primary)] mb-4" />
                <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">
                  {servico.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {servico.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. Por que escolher a Revizzi */}
      <section className="max-w-[1320px] mx-auto px-8 py-16">
        <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-10">
          Por que escolher a Revizzi
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-[var(--primary)] mb-2">
              7+ anos de oficina
            </h3>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              Desde 2018 no mercado, com experiência real em suspensão, freios,
              embreagem, motor e injeção eletrônica.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-[var(--primary)] mb-2">
              Sem enrolação
            </h3>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              Diagnóstico honesto — só fazemos o serviço que o seu carro
              realmente precisa.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-[var(--primary)] mb-2">
              Feito por quem entende
            </h3>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              Este site foi desenvolvido pelo próprio mecânico da oficina —
              refletindo o mesmo cuidado técnico que aplicamos nos carros.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Chamada final (CTA) */}
      <section className="max-w-[1320px] mx-auto px-8 py-24 text-center flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
          Seu carro merece respeito.
        </h2>

        <p className="text-[var(--text-secondary)] mb-8">
          Fale com a gente e agende uma avaliação.
        </p>

        <Link
          to="/contato"
          className="px-8 py-4 rounded-md bg-[var(--primary)] text-white font-medium text-lg hover:opacity-90 transition"
        >
          Agendar agora
        </Link>
      </section>
    </>
  );
}

export default Home;    