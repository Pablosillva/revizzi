import { MapPin, Phone, Clock, Send } from "lucide-react";

const horarios = [
  { dia: "Segunda a sexta", horario: "08:00 às 17:00" },
  { dia: "Sábado", horario: "Até 12:00" },
  { dia: "Domingo", horario: "Fechado" },
];

function Contato() {
  return (
    <section className="max-w-[1320px] mx-auto px-8 py-24">
      <p className="text-[var(--primary)] text-sm font-medium mb-4">
        Fale com a gente
      </p>

      <h1 className="text-4xl md:text-6xl font-bold text-[var(--text-primary)] leading-tight tracking-tight mb-6">
        Contato
      </h1>

      <p className="max-w-[640px] text-lg text-[var(--text-secondary)] leading-relaxed mb-16">
        Agende uma avaliação ou tire suas dúvidas — é rápido.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Coluna esquerda - Informações */}
        <div className="flex flex-col gap-8">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-[var(--surface)] border border-[var(--border)] rounded-lg">
              <MapPin size={20} className="text-[var(--primary)]" />
            </div>
            <div>
              <h3 className="text-[var(--text-primary)] font-semibold mb-1">
                Endereço
              </h3>
              <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                R. Inspetora Emília Mendonça Gomes, 801
                <br />
                Valentina de Figueiredo, João Pessoa - PB
                <br />
                58064-360
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-3 bg-[var(--surface)] border border-[var(--border)] rounded-lg">
              <Phone size={20} className="text-[var(--primary)]" />
            </div>
            <div>
              <h3 className="text-[var(--text-primary)] font-semibold mb-1">
                Telefone / WhatsApp
              </h3>

              <a href="https://wa.me/5583986066418"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--text-secondary)] text-sm hover:text-[var(--primary)] transition-colors duration-200"
              >
                (83) 98606-6418
              </a>
              <p className="text-[var(--text-secondary)] text-sm">
                Falar com Beto Tavares
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-3 bg-[var(--surface)] border border-[var(--border)] rounded-lg">
              <Clock size={20} className="text-[var(--primary)]" />
            </div>
            <div>
              <h3 className="text-[var(--text-primary)] font-semibold mb-2">
                Horário de funcionamento
              </h3>
              <div className="flex flex-col gap-1">
                {horarios.map((h) => (
                  <div key={h.dia} className="flex justify-between gap-6 text-sm">
                    <span className="text-[var(--text-secondary)]">{h.dia}</span>
                    <span className="text-[var(--text-primary)]">{h.horario}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Coluna direita - Formulário (visual, sem funcionar ainda) */}
        <form className="flex flex-col gap-4 p-8 bg-[var(--surface)] border border-[var(--border)] rounded-lg">
          <div className="flex flex-col gap-2">
            <label htmlFor="nome" className="text-sm text-[var(--text-secondary)]">
              Nome
            </label>
            <input
              id="nome"
              type="text"
              placeholder="Seu nome"
              className="px-4 py-3 rounded-md bg-[var(--background)] border border-[var(--border)] text-[var(--text-primary)] text-sm focus:outline-none focus:border-[var(--primary)] transition-colors duration-200"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="telefone" className="text-sm text-[var(--text-secondary)]">
              Telefone
            </label>
            <input
              id="telefone"
              type="tel"
              placeholder="(83) 90000-0000"
              className="px-4 py-3 rounded-md bg-[var(--background)] border border-[var(--border)] text-[var(--text-primary)] text-sm focus:outline-none focus:border-[var(--primary)] transition-colors duration-200"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="mensagem" className="text-sm text-[var(--text-secondary)]">
              Mensagem
            </label>
            <textarea
              id="mensagem"
              rows={5}
              placeholder="Conte um pouco sobre o serviço que precisa"
              className="px-4 py-3 rounded-md bg-[var(--background)] border border-[var(--border)] text-[var(--text-primary)] text-sm resize-none focus:outline-none focus:border-[var(--primary)] transition-colors duration-200"
            />
          </div>

          <button
            type="button"
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-[var(--primary)] text-white font-medium hover:opacity-90 transition mt-2"
          >
            <Send size={18} />
            Enviar mensagem
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contato;