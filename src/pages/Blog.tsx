import { Link } from "react-router-dom";
import { ArrowRight, Calendar } from "lucide-react";
import { posts } from "../data/posts";

function Blog() {
  return (
    <section className="max-w-[1320px] mx-auto px-8 py-24">
      <p className="text-[var(--primary)] text-sm font-medium mb-4">Blog</p>

      <h1 className="text-4xl md:text-6xl font-bold text-[var(--text-primary)] leading-tight tracking-tight mb-6">
        Dicas para o seu carro
      </h1>

      <p className="max-w-[640px] text-lg text-[var(--text-secondary)] leading-relaxed mb-12">
        Conteúdo prático sobre manutenção preventiva, escrito por quem trabalha com isso todos os dias.
      </p>

      <div className="flex flex-col gap-6">
        {posts.map((post) => (
          <Link
            key={post.id}
            to={`/blog/${post.id}`}
            className="block p-8 bg-[var(--surface)] border border-[var(--border)] rounded-lg hover:border-[var(--primary)] transition-colors duration-200 no-underline"
          >
            <div className="flex items-center gap-2 text-xs text-[var(--text-secondary)] mb-3">
              <Calendar size={14} />
              {new Date(post.date).toLocaleDateString("pt-BR")}
            </div>

            <h2 className="text-2xl font-semibold text-[var(--text-primary)] mb-3">
              {post.title}
            </h2>

            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
              {post.excerpt}
            </p>

            <span className="flex items-center gap-1 text-sm text-[var(--primary)]">
              Ler mais <ArrowRight size={16} />
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Blog;