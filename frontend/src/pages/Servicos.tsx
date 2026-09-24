import { Wrench, ShieldCheck, Gauge, Zap, Check } from "lucide-react";
import { Link } from "react-router-dom";

const servicos = [
  {
    icon: Wrench,
    title: "Suspensão",
    description:
      "Diagnóstico completo do sistema de suspensão, identificando ruídos, folgas e desgaste antes que virem problema maior.",
    itens: [
      "Verificação de amortecedores e molas",
      "Inspeção de buchas, pivôs e terminais de direção",
      "Alinhamento e balanceamento",
      "Análise de desgaste irregular dos pneus",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Freios",
    description:
      "Avaliação e manutenção completa do sistema de freios, prioridade máxima em segurança.",
    itens: [
      "Troca de pastilhas e discos de freio",
      "Verificação do sistema hidráulico (fluido, cilindros, mangueiras)",
      "Sangria do sistema quando necessário",
      "Inspeção do freio de estacionamento",
    ],
  },
  {
    icon: Gauge,
    title: "Embreagem",
    description:
      "Manutenção e troca de embreagem, do diagnóstico inicial até a instalação do kit completo.",
    itens: [
      "Troca do kit de embreagem (disco, platô, rolamento)",
      "Verificação do atuador hidráulico ou cabo",
      "Ajuste de pedal",
      "Diagnóstico de patinação ou trepidação",
    ],
  },
  {
    icon: Zap,
    title: "Motor & Injeção Eletrônica",
    description:
      "Diagnóstico eletrônico e revisão de motor, usando scanner automotivo pra identificar a causa real do problema.",
    itens: [
      "Leitura de códigos de falha via scanner automotivo",
      "Verificação de sensores e atuadores",
      "Diagnóstico de consumo excessivo e perda de potência",
      "Revisão de velas, bicos injetores e sistema de ignição",
    ],
  },
];

function Servicos() {
  return (
    <>
      <section className="max-w-[1320px] mx-auto px-8 py-24">
        <p className="text-[var(--primary)] text-sm font-medium mb-4">
          O que fazemos
        </p>

        <h1 className="text-4xl md:text-6xl font-bold text-[var(--text-primary)] leading-tight tracking-tight mb-6">
          Nossos serviços
        </h1>

        <p className="max-w-[640px] text-lg text-[var(--text-secondary)] leading-relaxed">
          Diagnóstico honesto e execução de qualidade em cada um dos nossos serviços.
        </p>
      </section>

      <section className="max-w-[1320px] mx-auto px-8 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {servicos.map((servico) => {
            const Icon = servico.icon;
            return (
              <div
                key={servico.title}
                className="p-8 bg-[var(--surface)] border border-[var(--border)] rounded-lg hover:border-[var(--primary)] transition-colors duration-200"
              >
                <Icon size={32} className="text-[var(--primary)] mb-4" />

                <h2 className="text-2xl font-semibold text-[var(--text-primary)] mb-3">
                  {servico.title}
                </h2>

                <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
                  {servico.description}
                </p>

                <ul className="flex flex-col gap-2">
                  {servico.itens.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                      <Check size={16} className="text-[var(--primary)] mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      <section className="max-w-[1320px] mx-auto px-8 pb-24 text-center flex flex-col items-center">
        <h2 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-4">
          Não encontrou o que precisa?
        </h2>

        <p className="text-[var(--text-secondary)] mb-8">
          Fale com a gente, avaliamos seu veículo com o mesmo cuidado.
        </p>

        <Link
          to="/contato"
          className="px-8 py-4 rounded-md bg-[var(--primary)] text-white font-medium text-lg hover:opacity-90 transition"
        >
          Agendar avaliação
        </Link>
      </section>
    </>
  );
}

export default Servicos;